import Courses from '@/components/landing/Courses'
import Footer from '@/components/landing/Footer'
import MarketingSection from '@/components/landing/MarketingSection'
import Navbar from '@/components/landing/Navbar'
import Testimonials from '@/components/landing/Testimonials'
import React from 'react'

const CoursesPage = () => {
  return (
    <section>
        <Navbar />
        <Courses />
        <Testimonials />
        <MarketingSection />
        <Footer />
    </section>
  )
}

export default CoursesPage
