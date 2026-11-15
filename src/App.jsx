import { useEffect } from 'react'
import StickyNav from './components/StickyNav'
import Hero from './components/Hero'
import NumbersBar from './components/NumbersBar'
import QuarterlyAttainment from './components/QuarterlyAttainment'
import WorkHistory from './components/WorkHistory'
import WhatImBuiltFor from './components/WhatImBuiltFor'
import WhyLimble from './components/WhyLimble'
import HowIWork from './components/HowIWork'
import MarqueeDeals from './components/MarqueeDeals'
import WhatYoullGet from './components/WhatYoullGet'
import AboutDave from './components/AboutDave'
import ResumeDownload from './components/ResumeDownload'
import Footer from './components/Footer'
import DealStory from './components/DealStory'
import { dealCards } from './data/dealCards'
import { dealStories } from './data/dealStories'
import { SectionDivider } from './components/AnimatedSection'

export default function App() {
  useEffect(() => {
    const section = document.getElementById(window.location.hash.slice(1))
    if (section) {
      window.scrollTo({ top: section.getBoundingClientRect().top + window.scrollY - 96 })
    }
  }, [])

  const slug = window.location.pathname.match(/^\/deals\/([^/]+)(?:\/|\/index\.html)?$/)?.[1]
  const dealIndex = dealCards.findIndex(deal => deal.slug === slug)
  if (dealIndex >= 0 && dealStories[slug]) {
    return <DealStory deal={dealCards[dealIndex]} story={dealStories[slug]} nextDeal={dealCards[(dealIndex + 1) % dealCards.length]} />
  }

  return (
    <>
      <StickyNav />
      <Hero />
      <NumbersBar />
      <QuarterlyAttainment />
      <SectionDivider />
      <WorkHistory />
      <WhatImBuiltFor />
      <WhyLimble />
      <HowIWork />
      <MarqueeDeals />
      <WhatYoullGet />
      <AboutDave />
      <ResumeDownload />
      <Footer />
    </>
  )
}
