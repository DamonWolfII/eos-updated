import React from 'react'
import ContactUs from '@/components/contact/contact'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Map from '@/components/Map'

const contactpage = () => {
  return (
    <div>
        <Header />
        <ContactUs />
        <Map/>
        <Footer />
    </div>
  )
}

export default contactpage