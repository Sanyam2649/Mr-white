'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import AuthModal from '@/components/authModel';

  const freePlanFeatures = [
    {
      icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_931_1065)">
<path d="M5.15217 17.1808L13.6863 12.2025V7.89667L10.6255 6.1175L15.4372 3.2275L18.5413 5.07417V15.0242L9.98301 20L5.70467 17.5125L5.15217 17.1808ZM14.8472 2.81917L6.31301 7.7975V12.1033L9.37384 13.8825L4.56217 16.7725L1.45801 14.9258V4.975L10.0163 0L14.2947 2.4875L14.8472 2.81917ZM9.99967 12.9167C9.2266 12.9151 8.48563 12.6073 7.93898 12.0607C7.39233 11.514 7.08455 10.7731 7.08301 10C7.08301 8.39333 8.39301 7.08333 9.99967 7.08333C11.6063 7.08333 12.9163 8.39333 12.9163 10C12.9163 11.6067 11.6063 12.9167 9.99967 12.9167Z" fill="#D3B86A"/>
</g>
<defs>
<clipPath id="clip0_931_1065">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
),
      title: "Access Your Personal Portal Anytime",
      description: "Step into your personal portal with Mr. White, where tailored guidance, and wisdom for you and your companion are available 24/7. It also includes an ongoing history of your priceless queries about your dog."
    },
    {
      icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.875 2.5V15C16.875 15.1658 16.8092 15.3247 16.6919 15.4419C16.5747 15.5592 16.4158 15.625 16.25 15.625H5.625C5.29348 15.625 4.97554 15.7567 4.74112 15.9911C4.5067 16.2255 4.375 16.5435 4.375 16.875H15C15.1658 16.875 15.3247 16.9408 15.4419 17.0581C15.5592 17.1753 15.625 17.3342 15.625 17.5C15.625 17.6658 15.5592 17.8247 15.4419 17.9419C15.3247 18.0592 15.1658 18.125 15 18.125H3.75C3.58424 18.125 3.42527 18.0592 3.30806 17.9419C3.19085 17.8247 3.125 17.6658 3.125 17.5V4.375C3.12706 3.71259 3.39111 3.0779 3.85951 2.60951C4.3279 2.14111 4.96259 1.87706 5.625 1.875H16.25C16.4158 1.875 16.5747 1.94085 16.6919 2.05806C16.8092 2.17527 16.875 2.33424 16.875 2.5Z" fill="#D3B86A"/>
</svg>
),
      title: "Unlock Expert Canine Knowledge",
      description: "Gain insight into your dog's history, needs, and bond with humans through Mr.White's vast data and real-world experience. Get tailored input on questions you raise such as: training and activity recommendations to strengthen your connection."
    },
    {
      icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.875 2.5V15C16.875 15.1658 16.8092 15.3247 16.6919 15.4419C16.5747 15.5592 16.4158 15.625 16.25 15.625H5.625C5.29348 15.625 4.97554 15.7567 4.74112 15.9911C4.5067 16.2255 4.375 16.5435 4.375 16.875H15C15.1658 16.875 15.3247 16.9408 15.4419 17.0581C15.5592 17.1753 15.625 17.3342 15.625 17.5C15.625 17.6658 15.5592 17.8247 15.4419 17.9419C15.3247 18.0592 15.1658 18.125 15 18.125H3.75C3.58424 18.125 3.42527 18.0592 3.30806 17.9419C3.19085 17.8247 3.125 17.6658 3.125 17.5V4.375C3.12706 3.71259 3.39111 3.0779 3.85951 2.60951C4.3279 2.14111 4.96259 1.87706 5.625 1.875H16.25C16.4158 1.875 16.5747 1.94085 16.6919 2.05806C16.8092 2.17527 16.875 2.33424 16.875 2.5Z" fill="#D3B86A"/>
</svg>
),
      title: "Top Product Recommendations with Care",
      description: "Mr. White reviews products with Anahata Graceland's 50+ years of expertise—those used in her kennel earn a star, as do all we recommend. We focus on quality, longevity, safety, and dog approval."
    },
    {
      icon : (<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.96332 4.67078C11.2531 4.67078 12.2987 3.62519 12.2987 2.33539C12.2987 1.04559 11.2531 0 9.96332 0C8.67352 0 7.62793 1.04559 7.62793 2.33539C7.62793 3.62519 8.67352 4.67078 9.96332 4.67078Z" fill="#D3B86A"/>
<path d="M18.1383 8.7604L15.9617 8.30637C15.2202 8.15103 14.4881 8.49091 14.101 9.09515C13.7251 8.90205 13.3208 8.73554 12.8908 8.59735V7.30304C12.8917 6.32375 12.09 5.52295 11.1142 5.52295H8.88863C7.90762 5.52295 7.10941 6.32375 7.10941 7.30304V8.60419C6.6837 8.73979 6.28374 8.90631 5.90523 9.10028C5.51816 8.49346 4.78516 8.15103 4.04273 8.30637L1.86439 8.7604C0.908251 8.96038 0.287698 9.9088 0.487679 10.8684L1.03442 13.4801C1.23269 14.4371 2.18195 15.0577 3.13896 14.8577L3.82815 14.7135C4.17316 15.2233 4.65039 15.6911 5.26148 16.091C6.5343 16.9253 8.21571 17.3853 10.0001 17.3853C12.7303 17.3853 15.082 16.2876 16.1651 14.7109L16.8655 14.8577C17.8216 15.0568 18.7709 14.4371 18.9692 13.4801L19.5167 10.8684C19.7158 9.9088 19.0953 8.96038 18.1383 8.7604ZM9.99919 16.4936C8.38732 16.4936 6.87672 16.0876 5.74981 15.3452C5.36358 15.0928 5.04343 14.8122 4.78683 14.5118L5.31467 14.4011C6.27252 14.2019 6.89308 13.2535 6.69309 12.2957L6.20301 9.9474C6.48882 9.79377 6.78923 9.659 7.10849 9.54401V9.97231C7.10849 10.9499 7.90842 11.7507 8.88771 11.7507H11.1132C12.09 11.7507 12.8899 10.9491 12.8899 9.97231V9.52169C13.2152 9.63756 13.5207 9.77061 13.804 9.92165L13.307 12.2966C13.1088 13.2544 13.7284 14.2028 14.6863 14.4019L15.2193 14.5135C14.2254 15.6902 12.2591 16.4936 9.99919 16.4936Z" fill="#D3B86A"/>
<path d="M17.6645 7.74085C18.9543 7.74085 19.9999 6.69526 19.9999 5.40546C19.9999 4.11566 18.9543 3.07007 17.6645 3.07007C16.3747 3.07007 15.3291 4.11566 15.3291 5.40546C15.3291 6.69526 16.3747 7.74085 17.6645 7.74085Z" fill="#D3B86A"/>
<path d="M2.81456 7.69204C4.07795 7.42768 4.88476 6.1892 4.62382 4.92664C4.35775 3.66496 3.12181 2.85473 1.85755 3.11909C0.595872 3.38258 -0.214357 4.62023 0.050003 5.88278C0.313527 7.14617 1.55117 7.95556 2.81456 7.69204Z" fill="#D3B86A"/>
</svg>
),
      title: "A Unique Dog Lover’s Community",
      description :"Mr. White reviews products with Anahata Graceland’s 50+ years of expertise—those used in her kennel earn a star, as do all we recommend. We focus on quality, longevity, safety, and dog approval, gathering marketplace feedback to ensure the best. With little pet industry regulation, we deliver trusted choices."
    },
    {
      icon : (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_931_1100)">
<path d="M9.99973 4.61891C11.275 4.61891 12.3093 3.58492 12.3093 2.30961C12.3093 1.0343 11.2751 0 9.99973 0C8.72438 0 7.69043 1.03426 7.69043 2.30961C7.69043 3.58496 8.72441 4.61891 9.99973 4.61891Z" fill="#D3B86A"/>
<path d="M10.0003 8.91431C11.5867 8.91431 13.2114 8.36497 12.9579 6.84407C12.8546 6.22642 12.3439 5.3606 11.9559 4.97294C11.9057 4.92302 11.6783 4.90997 11.6165 4.94825C11.1457 5.23864 10.593 5.40794 10.0002 5.40794C9.4078 5.40794 8.85507 5.23864 8.38432 4.94825C8.32249 4.90997 8.09503 4.92302 8.04483 4.97294C7.65718 5.3606 7.14585 6.22642 7.04288 6.84407C6.7894 8.36501 8.41413 8.91431 10.0003 8.91431Z" fill="#D3B86A"/>
<path d="M3.73707 15.7048C5.01238 15.7048 6.04668 14.6709 6.04668 13.3955C6.04668 12.1199 5.01242 11.0859 3.73707 11.0859C2.46172 11.0859 1.42773 12.1199 1.42773 13.3955C1.42777 14.6709 2.46176 15.7048 3.73707 15.7048Z" fill="#D3B86A"/>
<path d="M5.69317 16.0591C5.64297 16.0086 5.41555 15.9961 5.35371 16.0341C4.88266 16.3245 4.33024 16.4936 3.7375 16.4936C3.14481 16.4936 2.59235 16.3246 2.12157 16.0341C2.05973 15.9962 1.832 16.0086 1.78184 16.0591C1.39414 16.4465 0.883129 17.3123 0.780199 17.93C0.526645 19.4509 2.15137 20 3.7375 20C5.32395 20 6.94868 19.4509 6.69508 17.93C6.59192 17.3123 6.08086 16.4465 5.69317 16.0591Z" fill="#D3B86A"/>
<path d="M16.2618 15.7048C17.5371 15.7048 18.5711 14.6709 18.5711 13.3955C18.5711 12.1199 17.5371 11.0859 16.2618 11.0859C14.9864 11.0859 13.9521 12.1199 13.9521 13.3955C13.9522 14.6709 14.9864 15.7048 16.2618 15.7048Z" fill="#D3B86A"/>
<path d="M19.2194 17.93C19.1164 17.3123 18.6054 16.4465 18.2178 16.0591C18.1675 16.0086 17.9398 15.9961 17.878 16.0341C17.4072 16.3245 16.8548 16.4936 16.2621 16.4936C15.6694 16.4936 15.1169 16.3246 14.6459 16.0341C14.584 15.9962 14.3566 16.0086 14.3064 16.0591C13.9187 16.4465 13.4079 17.3123 13.3046 17.93C13.0511 19.4509 14.6756 20 16.2621 20C17.8482 20 19.4729 19.4509 19.2194 17.93Z" fill="#D3B86A"/>
<path d="M13.1347 14.491L10.3812 12.9015V9.72241C10.3812 9.51198 10.2108 9.34155 10.0004 9.34155C9.79022 9.34155 9.61979 9.51198 9.61979 9.72241V12.9015L6.86635 14.491C6.68432 14.5962 6.62162 14.8294 6.72682 15.0114C6.83205 15.1935 7.06514 15.2559 7.24721 15.151L10.0003 13.5611L12.7538 15.1507C12.9358 15.2559 13.1687 15.1935 13.2739 15.0114C13.3791 14.8294 13.3167 14.5962 13.1347 14.491Z" fill="#D3B86A"/>
</g>
<defs>
<clipPath id="clip0_931_1100">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
),
      title: "A Thriving Network for Dog Welfare Professionals",
      description : "Mr. White supports veterinarians, groomers, trainers, product companies, event organizers, educators, nonprofits, dog park leaders, and wellness practitioners with reduced-rate pack membership. Access dog family records, exchange insights in a fun network, and connect with families to grow your craft and deliver quality care. "
    }
  ];

  const premiumPlanFeatures = [
    {
      icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.33301 5.00004V3.33337M8.33301 16.6667V15M11.6663 5.00004V3.33337M11.6663 16.6667V15M15.1848 8.33337H16.6663M3.33301 8.33337H4.81449M15.1848 11.6667H16.6663M3.33301 11.6667H4.81449M8.33301 8.33337H11.6663V11.6667H8.33301V8.33337ZM6.66632 15H13.333C14.2535 15 14.9997 14.2539 14.9997 13.3334V6.66671C14.9997 5.74623 14.2535 5.00004 13.333 5.00004H6.66632C5.74586 5.00004 4.99966 5.74623 4.99966 6.66671V13.3334C4.99966 14.2539 5.74586 15 6.66632 15Z" stroke="#D3B86A"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
),
      title: "Comprehensive Memory & Care Archive",
      description: "Securely store vital records, vaccination history, medication alerts, vet visits, milestones, photos, and stories—all organized beautifully in one place and accessible 24/7."
    },
    {
      icon: (<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.25 12.8332C3.59819 12.5717 4.031 12.4167 4.5 12.4167C5.65059 12.4167 6.58333 13.3494 6.58333 14.5C6.58333 14.969 6.42836 15.4018 6.16682 15.75M13.25 12.8332C12.9018 12.5717 12.469 12.4167 12 12.4167C10.8494 12.4167 9.91667 13.3494 9.91667 14.5C9.91667 14.969 10.0717 15.4018 10.3332 15.75M13.2499 6.58329C14.0736 6.58265 14.5053 6.57219 14.84 6.40167C15.1536 6.24189 15.4086 5.98692 15.5683 5.67332C15.75 5.3168 15.75 4.85008 15.75 3.91667V3.41667C15.75 2.48325 15.75 2.01653 15.5683 1.66002C15.4086 1.34641 15.1536 1.09144 14.84 0.931658C14.4835 0.75 14.0167 0.75 13.0833 0.75H3.41667C2.48325 0.75 2.01653 0.75 1.66002 0.931658C1.34641 1.09144 1.09144 1.34641 0.931658 1.66002C0.75 2.01653 0.75 2.48325 0.75 3.41667V3.91667C0.75 4.85008 0.75 5.3168 0.931658 5.67332C1.09144 5.98692 1.34641 6.24189 1.66002 6.40167C1.99466 6.57219 2.42639 6.58265 3.25004 6.58329M13.2499 6.58329C13.25 6.63717 13.25 6.69267 13.25 6.75V13.0833C13.25 14.0167 13.25 14.4835 13.0683 14.84C12.9086 15.1536 12.6536 15.4086 12.34 15.5683C11.9835 15.75 11.5167 15.75 10.5833 15.75H5.91667C4.98324 15.75 4.51653 15.75 4.16002 15.5683C3.84641 15.4086 3.59144 15.1536 3.43166 14.84C3.25 14.4835 3.25 14.0167 3.25 13.0833V6.75C3.25 6.69267 3.25 6.63717 3.25004 6.58329M13.2499 6.58329C13.2493 5.75969 13.2388 5.32798 13.0683 4.99335C12.9086 4.67974 12.6536 4.42477 12.34 4.26499C11.9835 4.08333 11.5167 4.08333 10.5833 4.08333H5.91667C4.98325 4.08333 4.51653 4.08333 4.16002 4.26499C3.84641 4.42477 3.59144 4.67974 3.43166 4.99335C3.26115 5.32798 3.25068 5.75969 3.25004 6.58329M9.91667 8.25C9.91667 9.1705 9.1705 9.91667 8.25 9.91667C7.3295 9.91667 6.58333 9.1705 6.58333 8.25C6.58333 7.3295 7.3295 6.58333 8.25 6.58333C9.1705 6.58333 9.91667 7.3295 9.91667 8.25Z" stroke="#D3B86A"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
),
      title: "Personalized Health & Savings Tracker",
      description: "Avoid duplicate vet costs with your pups full health history at your fingertips. Receive expert care tips and timely reminders tailored to support extending your dog's life and wellbeing."
    },
    {
      icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M2 3.79995C2 2.91629 2.71634 2.19995 3.6 2.19995H6.8C7.68366 2.19995 8.4 2.91629 8.4 3.79995V4.86662H11.6V3.79995C11.6 2.91629 12.3164 2.19995 13.2 2.19995H16.4C17.2836 2.19995 18 2.91629 18 3.79995V6.99995C18 7.88361 17.2836 8.59995 16.4 8.59995H15.3333V11.8H16.4C17.2836 11.8 18 12.5163 18 13.4V16.6C18 17.4836 17.2836 18.2 16.4 18.2H13.2C12.3164 18.2 11.6 17.4836 11.6 16.6V15.5333H8.4V16.6C8.4 17.4836 7.68366 18.2 6.8 18.2H3.6C2.71634 18.2 2 17.4836 2 16.6V13.4C2 12.5163 2.71634 11.8 3.6 11.8H4.66667V8.59995H3.6C2.71634 8.59995 2 7.88361 2 6.99995V3.79995ZM14.2667 8.59995H13.2C12.3164 8.59995 11.6 7.88361 11.6 6.99995V5.93328H8.4V6.99995C8.4 7.88361 7.68366 8.59995 6.8 8.59995H5.73333V11.8H6.8C7.68366 11.8 8.4 12.5163 8.4 13.4V14.4666H11.6V13.4C11.6 12.5163 12.3164 11.8 13.2 11.8H14.2667V8.59995ZM3.6 3.26662C3.30545 3.26662 3.06667 3.5054 3.06667 3.79995V6.99995C3.06667 7.2945 3.30545 7.53328 3.6 7.53328H6.8C7.09455 7.53328 7.33333 7.2945 7.33333 6.99995V3.79995C7.33333 3.5054 7.09455 3.26662 6.8 3.26662H3.6ZM3.06667 13.4C3.06667 13.1054 3.30545 12.8666 3.6 12.8666H6.8C7.09455 12.8666 7.33333 13.1054 7.33333 13.4V16.6C7.33333 16.8945 7.09455 17.1333 6.8 17.1333H3.6C3.30545 17.1333 3.06667 16.8945 3.06667 16.6V13.4ZM12.6667 13.4C12.6667 13.1054 12.9055 12.8666 13.2 12.8666H16.4C16.6945 12.8666 16.9333 13.1054 16.9333 13.4V16.6C16.9333 16.8945 16.6945 17.1333 16.4 17.1333H13.2C12.9055 17.1333 12.6667 16.8945 12.6667 16.6V13.4ZM12.6667 3.79995C12.6667 3.5054 12.9055 3.26662 13.2 3.26662H16.4C16.6945 3.26662 16.9333 3.5054 16.9333 3.79995V6.99995C16.9333 7.2945 16.6945 7.53328 16.4 7.53328H13.2C12.9055 7.53328 12.6667 7.2945 12.6667 6.99995V3.79995Z" fill="#D3B86A" stroke="#D3B86A"/>
</svg>
),
      title: "BlockchainDNA NFT Legacy",
      description: "Protect your family bond with a unique BlockchainDNA NFT that verifies your dog's records on the blockchain, ensuring an unbreakable, verifiable legacy passed down through generations."
    },
    {
      icon : (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.6445 4.3492C18.0561 4.76119 18.3002 5.31131 18.3294 5.89296C18.3585 6.47461 18.1708 7.04639 17.8025 7.4975C17.4341 7.94862 16.9115 8.24697 16.3357 8.33473C15.76 8.42249 15.1722 8.29342 14.6862 7.97253L7.97203 14.6867C8.29292 15.1727 8.42198 15.7605 8.33422 16.3362C8.24646 16.912 7.94812 17.4346 7.497 17.803C7.04588 18.1713 6.4741 18.3591 5.89245 18.3299C5.3108 18.3007 4.76069 18.0567 4.34869 17.645C3.98906 17.2833 3.75832 16.8133 3.69203 16.3075C3.18773 16.2404 2.71936 16.0097 2.35869 15.6509C1.94707 15.2389 1.70303 14.6888 1.67385 14.1071C1.64467 13.5255 1.83244 12.9537 2.20076 12.5026C2.56908 12.0514 3.09175 11.7531 3.66748 11.6653C4.24321 11.5776 4.83102 11.7066 5.31703 12.0275L12.0312 5.31337C11.7103 4.82736 11.5812 4.23955 11.669 3.66382C11.7568 3.08808 12.0551 2.56542 12.5062 2.1971C12.9573 1.82877 13.5291 1.64101 14.1108 1.67019C14.6924 1.69937 15.2425 1.94341 15.6545 2.35503C16.0142 2.71679 16.2449 3.18675 16.3112 3.69253C16.8155 3.7597 17.2839 3.99037 17.6445 4.3492ZM14.6862 12.0275L13.837 11.1784L11.1779 13.8375L12.027 14.6867C11.7061 15.1727 11.5771 15.7605 11.6648 16.3362C11.7526 16.912 12.0509 17.4346 12.5021 17.803C12.9532 18.1713 13.5249 18.3591 14.1066 18.3299C14.6883 18.3007 15.2384 18.0567 15.6504 17.645C16.01 17.2833 16.2407 16.8133 16.307 16.3075C16.8128 16.2412 17.2828 16.0105 17.6445 15.6509C18.0561 15.2389 18.3002 14.6888 18.3294 14.1071C18.3585 13.5255 18.1708 12.9537 17.8025 12.5026C17.4341 12.0514 16.9115 11.7531 16.3357 11.6653C15.76 11.5776 15.1722 11.7066 14.6862 12.0275ZM5.31286 7.97253L6.16619 8.8217L8.82119 6.1667L7.97203 5.31337C8.29292 4.82736 8.42198 4.23955 8.33422 3.66382C8.24646 3.08808 7.94812 2.56542 7.497 2.1971C7.04588 1.82877 6.4741 1.64101 5.89245 1.67019C5.3108 1.69937 4.76069 1.94341 4.34869 2.35503C3.98906 2.71679 3.75832 3.18675 3.69203 3.69253C3.18773 3.7597 2.71936 3.99037 2.35869 4.3492C1.94707 4.76119 1.70303 5.31131 1.67385 5.89296C1.64467 6.47461 1.83244 7.04639 2.20076 7.4975C2.56908 7.94862 3.09175 8.24697 3.66748 8.33473C4.24321 8.42249 4.83102 8.29342 5.31703 7.97253H5.31286Z" fill="#D3B86A"/>
</svg>
),
      title: "Interspecies Culture & Bonding Guidance",
      description : "With over 50 years of experience, Anahata Graceland and Mr. White offer unique insights and guidance to help you nurture a deep, respectful relationship that honors your dog and helps you build a bond as equals each with your own roles in one family."
    },
    {
      icon : (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8563 6.5625C15.5213 6.5625 15.2824 6.5625 15 6.5625V5.9375C15 5.42055 14.5795 5 14.0625 5V4.0625C14.0625 3.37215 13.5029 2.8125 12.8125 2.8125H7.1875C6.49715 2.8125 5.9375 3.37215 5.9375 4.0625V5C5.42055 5 5 5.42055 5 5.9375V6.5625C4.71762 6.5625 4.47875 6.5625 4.14375 6.5625C3.40938 6.5625 2.8125 7.15938 2.8125 7.89375V15.8563C2.8125 16.5906 3.40938 17.1875 4.14375 17.1875C7.22172 17.1875 0.888087 17.1875 15.8563 17.1875C16.5906 17.1875 17.1875 16.5906 17.1875 15.8563V7.89375C17.1875 7.15938 16.5906 6.5625 15.8563 6.5625ZM15 7.96875H14.0625V7.1875H15V7.96875ZM14.0625 10.7812H15V16.25H14.0625V10.7812ZM13.75 10.1562C13.5781 10.1562 13.4375 10.0156 13.4375 9.84375V8.90625C13.4375 8.73438 13.5781 8.59375 13.75 8.59375C14.0874 8.59375 14.9712 8.59375 15.3125 8.59375C15.4844 8.59375 15.625 8.73438 15.625 8.90625V9.84375C15.625 10.0156 15.4844 10.1562 15.3125 10.1562C14.9751 10.1562 14.0913 10.1562 13.75 10.1562ZM7.1875 4.375C7.1875 4.20242 7.32742 4.0625 7.5 4.0625H12.5C12.6726 4.0625 12.8125 4.20242 12.8125 4.375V5C12.2955 5 11.875 5.42055 11.875 5.9375V6.5625H8.125V5.9375C8.125 5.42055 7.70445 5 7.1875 5V4.375ZM5 10.7812H5.9375V16.5625H5V10.7812ZM4.6875 10.1562C4.51562 10.1562 4.375 10.0156 4.375 9.84375V8.90625C4.375 8.73438 4.51562 8.59375 4.6875 8.59375C5.02488 8.59375 5.90867 8.59375 6.25 8.59375C6.42188 8.59375 6.5625 8.73438 6.5625 8.90625V9.84375C6.5625 10.0156 6.42188 10.1562 6.25 10.1562C5.90852 10.1562 5.02465 10.1562 4.6875 10.1562ZM5.9375 7.96875H5V7.1875H5.9375V7.96875ZM5.625 6.5625V5.9375C5.625 5.76234 5.76234 5.625 5.9375 5.625H7.1875C7.35977 5.625 7.5 5.76508 7.5 5.9375V6.5625C4.90809 6.5625 6.74738 6.5625 5.625 6.5625ZM11.7875 12.25L10.5188 13.5344C10.2312 13.825 9.76875 13.825 9.48125 13.5344L8.2125 12.25C7.75 11.7844 7.66875 11.0312 8.07188 10.5094C8.55625 9.87813 9.45937 9.83438 10 10.3813C10.5406 9.83438 11.4437 9.87813 11.9281 10.5094C12.3312 11.0312 12.25 11.7844 11.7875 12.25ZM12.5 5.9375C12.5 5.76234 12.6373 5.625 12.8125 5.625H14.0625C14.2348 5.625 14.375 5.76508 14.375 5.9375V6.5625C13.2535 6.5625 15.0904 6.5625 12.5 6.5625V5.9375Z" fill="#D3B86A"/>
</svg>
),
      title: "Trusted Local Services & Dog-Friendly Travel",
      description :"Easily find and review vets, groomers, and discover dog-friendly hotels, restaurants, and destinations—making every outing a joyful adventure." 
    },
      {
      icon : (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.25 1.875H5.625C4.96259 1.87706 4.3279 2.14111 3.85951 2.60951C3.39111 3.0779 3.12706 3.71259 3.125 4.375V17.5C3.125 17.6658 3.19085 17.8247 3.30806 17.9419C3.42527 18.0592 3.58424 18.125 3.75 18.125H15C15.1658 18.125 15.3247 18.0592 15.4419 17.9419C15.5592 17.8247 15.625 17.6658 15.625 17.5C15.625 17.3342 15.5592 17.1753 15.4419 17.0581C15.3247 16.9408 15.1658 16.875 15 16.875H4.375C4.375 16.5435 4.5067 16.2255 4.74112 15.9911C4.97554 15.7567 5.29348 15.625 5.625 15.625H16.25C16.4158 15.625 16.5747 15.5592 16.6919 15.4419C16.8092 15.3247 16.875 15.1658 16.875 15V2.5C16.875 2.33424 16.8092 2.17527 16.6919 2.05806C16.5747 1.94085 16.4158 1.875 16.25 1.875ZM14.375 9.375L12.375 7.875C12.3214 7.83319 12.2554 7.81048 12.1875 7.81048C12.1196 7.81048 12.0536 7.83319 12 7.875L10 9.375V3.125H14.375V9.375Z" fill="#D3B86A"/>
</svg>
),
      title: "Turn Memories into a Treasured Book",
      description :"One of the most special features of your Living Legacy of Love Dog Hub subscription is the ability to create a beautifully personalized book. Whether you want to commemorate your dog’s first birthday, a memorable milestone, or simply preserve your favorite photos and stories, you can easily select any section of the Living Hub to print as a keepsake. This tangible collection of memories is perfect for sharing with family and friends or cherishing for years to come—a lasting tribute to the unique journey you share with your companion." 
    },
      {
      icon : (<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.07215 3.23582C3.9659 3.23582 4.68996 2.51117 4.68996 1.61809C4.68996 0.724062 3.9659 0 3.07215 0C2.17812 0 1.4541 0.724062 1.4541 1.61809C1.45406 2.51117 2.17812 3.23582 3.07215 3.23582Z" fill="#D3B86A"/>
<path d="M9.98855 7.52485V7.52728C9.9925 7.52728 9.99613 7.52606 10 7.52606C10.004 7.52606 10.0076 7.52728 10.0115 7.52728V7.52485C10.6194 7.51247 11.1085 7.01798 11.1085 6.40763C11.1085 5.79638 10.6194 5.3022 10.0115 5.28981V5.28735C10.0076 5.28735 10.0039 5.28856 10 5.28856C9.99613 5.28856 9.9925 5.28735 9.98855 5.28735V5.28981C9.38063 5.3022 8.8916 5.79638 8.8916 6.40763C8.89156 7.01798 9.38063 7.51247 9.98855 7.52485Z" fill="#D3B86A"/>
<path d="M16.9284 3.23582C17.8224 3.23582 18.5464 2.51117 18.5464 1.61809C18.5464 0.724062 17.8224 0 16.9284 0C16.0346 0 15.3105 0.724062 15.3105 1.61809C15.3106 2.51117 16.0346 3.23582 16.9284 3.23582Z" fill="#D3B86A"/>
<path d="M18.3632 4.0022H16.9447H16.2258C15.4014 4.0022 14.6464 4.46435 14.2714 5.19837L12.963 9.02521C12.918 9.11294 12.8342 9.17521 12.7368 9.19247C12.6394 9.20974 12.5396 9.1804 12.4667 9.11294L11.6528 8.40825C11.4093 8.1829 11.09 8.05774 10.7582 8.05774H10H9.2418C8.91 8.05774 8.59066 8.1829 8.34719 8.40825L7.53332 9.11294C7.46043 9.1804 7.36062 9.20974 7.26324 9.19247C7.1659 9.17521 7.08211 9.11294 7.03703 9.02521L5.72863 5.19837C5.35363 4.46435 4.59871 4.0022 3.77426 4.0022H3.05527H1.6368C0.852891 4.0022 0 4.85509 0 5.63935V11.0773C0 11.4692 0.317578 11.7871 0.709531 11.7871C0.902461 11.7871 0.709531 11.7871 1.20492 11.7871L1.47469 16.4248C1.47469 16.8418 1.81313 17.1799 2.23016 17.1799C2.40617 17.1799 2.7307 17.1799 3.05523 17.1799C3.37977 17.1799 3.7043 17.1799 3.88031 17.1799C4.29734 17.1799 4.63578 16.8418 4.63578 16.4248L4.90555 11.7871L4.90223 8.47591C4.90223 8.4236 4.93793 8.37853 4.98902 8.36583C5.04016 8.35372 5.09246 8.3779 5.11637 8.4245L6.15434 10.9792C6.27957 11.2236 6.51184 11.3954 6.78223 11.4435C7.05262 11.4916 7.32996 11.4105 7.53168 11.2242L8.52488 10.4926C8.55816 10.4621 8.60625 10.4542 8.64738 10.4715C8.68883 10.4899 8.71547 10.5308 8.71547 10.5755L8.7191 13.4469L8.9057 16.6573C8.9057 16.9459 9.14012 17.1799 9.42895 17.1799C9.55055 17.1799 9.77523 17.1799 9.99996 17.1799C10.2247 17.1799 10.4494 17.1799 10.571 17.1799C10.8598 17.1799 11.0942 16.9459 11.0942 16.6573L11.2808 13.4469L11.2845 10.5755C11.2845 10.5307 11.3111 10.4899 11.3525 10.4715C11.3936 10.4542 11.4417 10.4621 11.475 10.4926L12.4682 11.2242C12.67 11.4105 12.9473 11.4916 13.2177 11.4435C13.4881 11.3954 13.7204 11.2236 13.8455 10.9792L14.8836 8.4245C14.9074 8.37794 14.9598 8.35372 15.0109 8.36583C15.062 8.37853 15.0977 8.42356 15.0977 8.47591L15.0943 11.7871L15.3641 16.4248C15.3641 16.8418 15.7025 17.1799 16.1196 17.1799C16.2957 17.1799 16.6202 17.1799 16.9447 17.1799C17.2692 17.1799 17.5938 17.1799 17.7697 17.1799C18.1868 17.1799 18.5253 16.8418 18.5253 16.4248L18.795 11.7871C19.2904 11.7871 19.0975 11.7871 19.2904 11.7871C19.6824 11.7871 20 11.4692 20 11.0773V5.63935C20 4.85509 19.1471 4.0022 18.3632 4.0022Z" fill="#D3B86A"/>
</svg>
),
      title: "Private Dog Family Community",
      description :"Connect with fellow dog lovers in an exclusive space to share stories, plan meetups, and strengthen your bonds within a warm, vibrant community." 
    },
      {
      icon : (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0003 1.66675C8.35215 1.66675 6.74099 2.15549 5.37058 3.07117C4.00017 3.98685 2.93206 5.28833 2.30133 6.81105C1.6706 8.33377 1.50558 10.0093 1.82712 11.6258C2.14866 13.2423 2.94234 14.7272 4.10777 15.8926C5.27321 17.0581 6.75807 17.8517 8.37458 18.1733C9.99109 18.4948 11.6666 18.3298 13.1894 17.6991C14.7121 17.0683 16.0136 16.0002 16.9292 14.6298C17.8449 13.2594 18.3337 11.6483 18.3337 10.0001C18.3337 8.90573 18.1181 7.8221 17.6993 6.81105C17.2805 5.80001 16.6667 4.88135 15.8929 4.10752C15.1191 3.3337 14.2004 2.71987 13.1894 2.30109C12.1783 1.8823 11.0947 1.66675 10.0003 1.66675ZM7.08366 5.41675C7.4133 5.41675 7.73553 5.5145 8.00961 5.69763C8.28369 5.88077 8.49732 6.14107 8.62346 6.44561C8.74961 6.75015 8.78261 7.08526 8.7183 7.40856C8.654 7.73187 8.49526 8.02884 8.26217 8.26193C8.02909 8.49501 7.73211 8.65375 7.40881 8.71806C7.08551 8.78236 6.7504 8.74936 6.44586 8.62321C6.14131 8.49707 5.88101 8.28345 5.69788 8.00936C5.51474 7.73528 5.417 7.41305 5.417 7.08341C5.417 6.64139 5.59259 6.21746 5.90515 5.9049C6.21771 5.59234 6.64163 5.41675 7.08366 5.41675ZM7.25616 13.9226C7.17929 14.0022 7.08734 14.0657 6.98567 14.1093C6.884 14.153 6.77465 14.176 6.664 14.177C6.55335 14.1779 6.44361 14.1568 6.3412 14.1149C6.23879 14.073 6.14574 14.0112 6.0675 13.9329C5.98926 13.8547 5.92738 13.7616 5.88548 13.6592C5.84358 13.5568 5.82249 13.4471 5.82345 13.3364C5.82441 13.2258 5.8474 13.1164 5.89108 13.0147C5.93475 12.9131 5.99824 12.8211 6.07783 12.7442L12.7445 6.07758C12.8214 5.99799 12.9133 5.9345 13.015 5.89083C13.1167 5.84716 13.226 5.82417 13.3367 5.82321C13.4473 5.82224 13.557 5.84333 13.6595 5.88523C13.7619 5.92713 13.8549 5.98901 13.9332 6.06725C14.0114 6.1455 14.0733 6.23854 14.1152 6.34095C14.1571 6.44337 14.1782 6.5531 14.1772 6.66375C14.1762 6.7744 14.1533 6.88375 14.1096 6.98542C14.0659 7.08709 14.0024 7.17904 13.9228 7.25591L7.25616 13.9226ZM12.917 14.5834C12.5874 14.5834 12.2651 14.4857 11.991 14.3025C11.717 14.1194 11.5033 13.8591 11.3772 13.5546C11.251 13.25 11.218 12.9149 11.2824 12.5916C11.3467 12.2683 11.5054 11.9713 11.7385 11.7382C11.9716 11.5051 12.2685 11.3464 12.5918 11.2821C12.9151 11.2178 13.2503 11.2508 13.5548 11.3769C13.8593 11.5031 14.1196 11.7167 14.3028 11.9908C14.4859 12.2649 14.5837 12.5871 14.5837 12.9167C14.5837 13.3588 14.4081 13.7827 14.0955 14.0953C13.7829 14.4078 13.359 14.5834 12.917 14.5834Z" fill="#D3B86A"/>
</svg>
),
      title: "Exclusive Discounts & Early Access",
      description :"Enjoy lifetime 5% discounts on qualified recommended products and get first access to new offerings from trusted partners." 
    }
  ];
  
const SubscriptionPage = () => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
const handleLoginClick = () => {
    setIsAuthModalOpen(true);
  };
  return (
    <div className='overflow-hidden bg-black text-[#FFFFFF] m-0'>
        <Navbar/>
       <section className="max-w-[1440px] mx-auto min-h-screen py-16 flex flex-col justify-center md:justify-between items-center gap-10 max-[1024px]:px-4 max-[450px]:px-3">
              <section className="h-[400px] flex flex-col justify-center items-center w-full relative bg-[url('https://res.cloudinary.com/dhahajyth/image/upload/v1761890481/eb3d3a7cd0e7479b2c94f4055a40b980d6c343a0_xsd72w.jpg')] bg-cover bg-center rounded-lg">
                <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
                <div className="h-[70px] flex flex-col gap-[12px] items-center z-20">
                  <h2 className="text-[32px] max-[1200px]:text-center font-semibold font-work-sans tracking-tighter text-white">
                    Connect with Mr. White Your Way: Free or Premium
                  </h2>
                  <p className="text-[20px] text-center font-medium font-public-sans text-white/80">
                    How does Mr. White benefit your life?
                  </p>
                </div>
              </section>
              
        <div className='flex flex-col items-center px-[48px] py-[96px] gap-[40px]'>
          <div>
            <h1 className=' text-[32px] font-semibold'>Get Started with Mr. White in 3 Easy Steps</h1>
          <p className='text-[16px] text-center'>A short guide on how to get started with Mr White</p>
          </div>
         <div className='h-[167px] gap-[24px] flex flex-row'>
        {[
    {
      step: 1,
      title: 'Sign up',
      desc: 'Create your account in moments—join the Companion Crew for free or the Elite Pack as a full member—to start your journey with Mr. White and your companion.',
    },
    {
      step: 2,
      title: 'Choose Your Subscription',
      desc: 'Join the Companion Crew for free to get daily tips on X, or unlock all benefits with the Elite Pack membership for $12.50 monthly or $110 yearly (saving $40).',
    },
    {
      step: 3,
      title: 'Access Your Personal Portal',
      desc: 'Step into your personal portal with Mr. White, where tailored guidance, records, and wisdom for you and your dog are available 24/7.',
    },
  ].map(({ step, title, desc }) => (
    <div
      key={step}
      className='flex flex-row w-[432px] h-full px-[24px] py-[20px] gap-[24px] bg-[#FFFFFF1A]'
    >
      <div className='size-[40px] gap-[8px] items-center rounded-[500px] bg-[#D3B86A]'>
        <p className='text-center text-black text-[24px]'>{step}</p>
      </div>
      <div className='flex flex-col h-[127px] gap-[8px]'>
        <p className='text-[20px] font-semibold text-[#FFFFFF]'>
           {title}</p>
        <p className='text-[16px] leading-tight'>{desc}</p>
      </div>
    </div>
  ))}
</div>

          <button className='h-[47px] w-[293px] px-[64px] py-[12px] gap-[8px] rounded-[8px] bg-[#D3B86A] mt-[40px] flex flex-inline text-black'
            onClick={handleLoginClick}
          >
            <span className='gap-[4px]'>
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" className="!w-5 !h-5 lg:!w-6 lg:!h-6">
                <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                <path d="M21 12h-13l3 -3"></path>
                <path d="M11 15l-3 -3"></path>
              </svg>
            </span>
            <span>Sign up & Login</span>
          </button>
        </div>
              
              
              
              
               
               <div className='flex flex-col justify-center items-center'>
                <h1 className='justify-center items-center text-[32px]'>Subscriptions, Mr. White has?</h1>
                <p className='justify-center items-center pb-[40px] text-[16px]'>Mr. White’s available subscriptions</p>
                <Subscription/>
               </div>
       </section>
       <Footer/>
       
             <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
       </div>
  )
}

export default SubscriptionPage;


export function Subscription() { 
  return (
         <div className="flex max-[1200px]:flex-col  px-12 max-[1200px]:items-center gap-[40px] w-full">
                {/* Free Plan */}
                <div className="w-1/2 max-[1200px]:w-[652px] max-[600px]:w-full h-fit flex flex-col gap-[24px] px-6 py-8 bg-white/10 rounded-sm relative">
                  <div className="flex flex-col gap-[12px]">
                    <h2 className="text-[28px] font-semibold font-work-sans tracking-tighter text-white">
                      Mr. White&apos;s Companion Crew - FREE Plan
                    </h2>
                    <p className="text-[16px] font-semibold font-work-sans text-white">
                      Enjoy a FREE account with Benefits of Mr. White
                    </p>
                    <p className="text-[16px] text-justify font-light font-public-sans tracking-tight text-white/80">
                      Mr. White guides dogs and their humans toward a fulfilling life with free daily tips and expert advice for deepening your bond with your companion.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-[32px] font-medium font-work-sans text-[#D3B86A] tracking-tighter">Free!</h2>
                    <p className="text-[14px] font-light font-public-sans text-white/80">*Lifetime free subscription</p>
                  </div>
                  <div className="border-t border-[#D3B86A] my-4"></div>
                  <div className="flex flex-col gap-[24px]">
                    {freePlanFeatures.map((feature, index) => (
                      <div key={index} className="w-full flex flex-col justify-center gap-[12px] border-b-2 border-b-black/80 pb-6">
                        <h3 className="text-[16px] font-semibold font-work-sans tracking-tighter text-white flex items-center gap-2">
                          <div className="w-4 h-4 relative">
                          {feature.icon}
                          </div>
                          {feature.title}
                        </h3>
                        <p className="text-[16px] text-justify font-light font-public-sans tracking-tight text-white/80">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-[#D3B86A] text-primary-foreground shadow-xs rounded-sm cursor-pointer hover:bg-[#D3B86A]/80 transition-all duration-300 active:scale-98 font-work-sans px-4 py-2 has-[>svg]:px-3 w-full self-center h-[45px] text-[20px] text-black">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-xl inline-block">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="!w-6 !h-6">
                            <path d="M231.12,107.72a35.91,35.91,0,0,1-46.19,6.8.14.14,0,0,0-.1,0l-70.35,70.36s0,0,0,.08a36,36,0,1,1-66.37,22.92,36,36,0,1,1,22.92-66.37.14.14,0,0,0,.1,0l70.35-70.36s0,0,0-.08a36,36,0,1,1,66.37-22.92,36,36,0,0,1,23.27,59.57Z"></path>
                          </svg>
                        </span>
                        <span>Sign Up to Get Started</span>
                      </div>
                    </button>
                  </div>
                </div>
    
                {/* Premium Plan */}
                <div className="w-1/2 max-[1200px]:w-[652px] max-[600px]:w-full h-fit flex flex-col gap-[24px] px-6 py-8 bg-white/10 rounded-sm relative">
                  <div className="bg-[#D3B86A] h-[30px] w-[112px] font-work-sans text-[12px] font-semibold absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform rounded-full flex items-center justify-center text-black">
                    Most Wanted
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <h2 className="text-[28px] font-semibold font-work-sans tracking-tighter text-white">
                      Mr. White AI Buddy - LEGACY OF LOVE LIVING HUB
                    </h2>
                    <div className="italic text-[28px] font-work-sans font-light text-[#D3B86A]">
                      (Your Dog&apos;s Name) Legacy of Love Living Hub
                    </div>
                    <p className="text-[16px] font-semibold font-work-sans bg-[#D3B86A] text-black px-2 py-2 w-fit rounded-sm tracking-tighter">
                      Everything in the FREE Account Plus these Invaluable Services
                    </p>
                    <p className="text-[16px] text-justify font-light font-public-sans tracking-tight text-white/80">
                      Unlock an all-encompassing, AI-powered subscription designed to honor your companion&apos;s unique journey and simplify every aspect of their care.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-[32px] font-medium font-work-sans text-[#D3B86A] tracking-tighter">$19.95/Month</h2>
                    <p className="text-[14px] font-light font-public-sans text-white/80 italic text-[16px]">
                      Save 20% on yearly plan - Includes dedicated human support!
                    </p>
                  </div>
                  <div className="border-t border-[#D3B86A] my-4"></div>
                  <div className="flex flex-col gap-[24px]">
                    {premiumPlanFeatures.map((feature, index) => (
                      <div key={index} className="w-full flex flex-col justify-center gap-[12px] border-b-2 border-b-black/80 pb-6">
                        <h3 className="text-[16px] font-semibold font-work-sans tracking-tighter text-white flex items-center gap-2">
                          <div className="w-4 h-4 relative">
                          {feature.icon}
                          </div>
                          {feature.title}
                        </h3>
                        <p className="text-[16px] text-justify font-light font-public-sans tracking-tight text-white/80">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-[#D3B86A] text-primary-foreground shadow-xs rounded-sm cursor-pointer hover:bg-[#D3B86A]/80 transition-all duration-300 active:scale-98 font-work-sans px-4 py-2 has-[>svg]:px-3 w-full self-center h-[45px] text-[20px] text-black">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-xl inline-block">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="!w-6 !h-6">
                            <path d="M231.12,107.72a35.91,35.91,0,0,1-46.19,6.8.14.14,0,0,0-.1,0l-70.35,70.36s0,0,0,.08a36,36,0,1,1-66.37,22.92,36,36,0,1,1,22.92-66.37.14.14,0,0,0,.1,0l70.35-70.36s0,0,0-.08a36,36,0,1,1,66.37-22.92,36,36,0,0,1,23.27,59.57Z"></path>
                          </svg>
                        </span>
                        <span>Sign Up to Subscribe</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
  )
}