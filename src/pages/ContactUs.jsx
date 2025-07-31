import React from 'react'
import Header from '../components/contact/Header'
import GetInTouch from '../components/contact/GetInTouch'
import Form from '../components/contact/form'
import Contact from '../components/contact/Contact'
import Map from '../components/contact/Map'
import Inquiries from '../components/contact/Inquiries'
import Policy from '../components/contact/Policy'
import {Footer} from '../components/Footer'

const ContactUs = () => {
  return (
    <div>
        <Header />
        <GetInTouch />
        <Form />
        <Contact />
        <Map />
        {/* Policy and Inquiries in row layout */}
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="flex justify-center">
              <Inquiries />
            </div>
            <div className="flex justify-center">
              <Policy />
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default ContactUs