import { motion } from 'framer-motion'
import { FadeIn, SectionTitle } from './AnimatedSection'

const cards = [
  {
    title: 'Pipeline Ownership',
    body: 'I don\u2019t wait for inbound. About 55% of my pipeline is self-sourced through targeted outbound. Top five regionally at Samsara for pipeline generation.',
  },
  {
    title: 'Quantified Value Selling',
    body: 'Enterprise buyers don\u2019t fund features. They fund outcomes their board asks them about. Productivity, cost, uptime, risk, time to value. I keep the evaluation anchored in the number the CFO cares about, not the demo the SE runs.',
  },
  {
    title: 'Complex Deal Leadership',
    body: 'A technical champion is a good start, not a signed contract. I get the full committee aligned, negotiate on value not price, and keep internal resources moving in the same direction from first meeting to signature.',
  },
  {
    title: 'Forecast Discipline',
    body: 'Clean CRM. Real next steps. MEDDPICC-based forecast. I surface risk early because a soft forecast punishes the whole team. Activity is not progress.',
  },
]

export default function WhatYoullGet() {
  return (
    <section id="what-you-get" className="bg-surface-1 border-b border-border py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="VALUE" title="What You Get" />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-surface-2 border border-border rounded-xl p-5 h-full"
              >
                <h3 className="font-heading font-medium text-text-primary mb-2">{card.title}</h3>
                <p className="text-[14.5px] leading-[1.75] text-text-secondary">{card.body}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
