import React from 'react'

 const partners = [
    {
      id : 1,
      image : "https://res.cloudinary.com/dhahajyth/image/upload/v1761906630/Frame_5_se8fst.png",
      name : "Royal Frenchel"
    },
    {
      id : 2,
      image : "https://res.cloudinary.com/dhahajyth/image/upload/v1761906630/1-GLDSLV_-TWL-gradient-solid-gold-heart_SILVER-GOLD-GRADIENT-SOLID_1_jzt9ho.png",
      name : "Tail Wagging Love"
    },
    {
      id: 3,
      image : "https://res.cloudinary.com/dhahajyth/image/upload/v1761906630/image_1_o5elsy.png",
      name : "Forever Life Natural"
    },
    {
      id : 4,
      image : "https://res.cloudinary.com/dhahajyth/image/upload/v1761906630/Group_u9wkag.png",
      name : "Accredited Bussiness"
    }
  ]

const Partner = () => {
  return (
           <section className="py-8 md:py-16 flex flex-col justify-center items-center">
          <div className="flex gap-[10px] flex-wrap justify-center px-4 gap-[64px]">
            {partners.map((partner) => (
              <div key={partner?.id} className="max-w-[235.76px] max-h-[67.5px] relative rounded-lg flex items-center justify-center">
              <img src={partner?.image}
              alt={partner.name}
              className="size-full"/>
              </div>
            ))}
          </div>
        </section>
  )
}

export default Partner;
