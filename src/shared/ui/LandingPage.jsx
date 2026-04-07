import React from 'react'
import Hero from '../../app/public/components/Hero'
import Navbar from '../../app/public/components/NavBar'
import CourseCatalog from '../../app/public/components/CourseCatalog'
import FeaturesSection from '../../app/public/components/FeatureSection'
import HowItWorks from '../../app/public/components/HowItWorks'
import ProgrammeRoles from '../../app/public/components/ProgrammeRoles'
import TestimonialsSection from '../../app/public/components/TestimonialSection'
import CTASection from '../../app/public/components/CTASection'
import Footer from '../../app/public/components/Footer'

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CourseCatalog />
      <FeaturesSection />
      <HowItWorks />
      <ProgrammeRoles />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  )
}

export default LandingPage