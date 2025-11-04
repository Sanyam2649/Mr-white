'use client';
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="overflow-hidden bg-black text-[#FFFFFF] m-0">
      <Navbar/>
       <div className="pt-[70px] sm:pt-[80px] md:pt-[95px]">
          <div className="flex flex-col gap-y-24">
            
            {/* Hero Section */}
            <section className="h-[400px] flex flex-col justify-center items-center w-full relative bg-cover bg-center">
              <div 
                className="absolute inset-0 bg-black/40"
                style={{
                  backgroundImage: "url('https://res.cloudinary.com/dhahajyth/image/upload/v1761890482/Frame_1000003310_idzudf.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className="z-20">
                <h1 className="max-[1200px]:text-[32px] text-[40px] font-work-sans font-semibold text-center">
                  Contact
                </h1>
                <p className="max-[1200px]:text-[16px] text-[20px] font-public-sans font-light text-center">
                  Can we help you? Let us know your needs.
                </p>
              </div>
            </section>

            {/* Contact Form Section */}
            <section className="max-[1100px]:px-4 px-10 max-[1100px]:flex-col max-[1100px]:items-center flex">
              <div className="w-1/2 max-[1100px]:w-full p-4">
                <form 
                  className="flex flex-col gap-y-4" 
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="relative flex flex-col gap-y-4">
                    
                    {/* Full Name */}
                    <div className="flex flex-col">
                      <input 
                        placeholder="Full Name*" 
                        className={`w-full border rounded-[5px] bg-white/10 py-3 pl-4 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--mrwhite-primary-color)] focus:ring-1 focus:ring-[var(--mrwhite-primary-color)] font-work-sans font-light ${
                          errors.fullName ? 'border-red-500' : 'border-gray-600'
                        }`}
                        autoComplete="name"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                      {errors.fullName && (
                        <span className="text-red-500 text-sm mt-1">{errors.fullName}</span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                      <input 
                        placeholder="E-mail*" 
                        className={`w-full border rounded-[5px] bg-white/10 py-3 pl-4 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--mrwhite-primary-color)] focus:ring-1 focus:ring-[var(--mrwhite-primary-color)] font-work-sans font-light ${
                          errors.email ? 'border-red-500' : 'border-gray-600'
                        }`}
                        autoComplete="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <span className="text-red-500 text-sm mt-1">{errors.email}</span>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <input 
                        placeholder="Phone number" 
                        className="w-full border border-gray-600 rounded-[5px] bg-white/10 py-3 pl-4 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--mrwhite-primary-color)] focus:ring-1 focus:ring-[var(--mrwhite-primary-color)] font-work-sans font-light"
                        autoComplete="tel"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col">
                      <input 
                        placeholder="Subject*" 
                        className={`w-full border rounded-[5px] bg-white/10 py-3 pl-4 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--mrwhite-primary-color)] focus:ring-1 focus:ring-[var(--mrwhite-primary-color)] font-work-sans font-light ${
                          errors.subject ? 'border-red-500' : 'border-gray-600'
                        }`}
                        autoComplete="off"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      {errors.subject && (
                        <span className="text-red-500 text-sm mt-1">{errors.subject}</span>
                      )}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col">
                      <textarea 
                        placeholder="Write your message here*" 
                        name="message"
                        className={`w-full border rounded-[5px] bg-white/10 py-3 pl-4 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--mrwhite-primary-color)] focus:ring-1 focus:ring-[var(--mrwhite-primary-color)] font-work-sans font-light resize-none h-[160px] ${
                          errors.message ? 'border-red-500' : 'border-gray-600'
                        }`}
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && (
                        <span className="text-red-500 text-sm mt-1">{errors.message}</span>
                      )}
                    </div>

                  </div>

                  {/* Submit Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded text-center">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded text-center">
                      Sorry, there was an error sending your message. Please try again.
                    </div>
                  )}

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="justify-center text-[#010101] whitespace-nowrap disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-[#D3B86A] text-primary-foreground shadow-xs rounded-sm cursor-pointer hover:bg-[#D3B86A]/80 transition-all duration-300 active:scale-98 has-[>svg]:px-3 px-4 self-center py-2 mt-4 flex items-center w-[289px] max-[350px]:w-full h-[47px] gap-[10px] text-[20px] font-medium font-work-sans mx-auto disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <span className="text-xl inline-block">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-[20px] h-[20px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M76.83 480a25.69 25.69 0 0 1-25.57-25.74 29.13 29.13 0 0 1 1.2-7.63L70.88 380c.77-2.46-.1-4.94-1.23-6.9l-.22-.4c-.08-.13-.46-.66-.73-1.05s-.58-.81-.86-1.22l-.19-.27A215.66 215.66 0 0 1 32 251.37c-.18-57.59 22.35-112 63.46-153.28C138 55.47 194.9 32 255.82 32A227.4 227.4 0 0 1 398 81.84c39.45 31.75 66.87 76 77.21 124.68a213.5 213.5 0 0 1 4.78 45c0 58.93-22.64 114.28-63.76 155.87-41.48 42-97.18 65.06-156.83 65.06-21 0-47.87-5.36-60.77-9-15.52-4.34-30.23-10-31.85-10.6a15.12 15.12 0 0 0-5.37-1 14.75 14.75 0 0 0-5.8 1.15l-.85.33-67.48 24.38A29.44 29.44 0 0 1 76.83 480zm-2-31.8zM87.48 380z"></path>
                            </svg>
                          </span>
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Image */}
              <div className="w-1/2 max-[1100px]:w-full max-[1100px]:flex max-[1100px]:justify-center flex justify-end">
                <div className="relative w-[540px] h-[621px] max-[1100px]:w-full max-[1100px]:max-w-[540px]">
                  <Image
                    src="https://res.cloudinary.com/dhahajyth/image/upload/v1761912417/Message_white_y38b61.png"
                    alt="contact"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </section>

          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default ContactPage;