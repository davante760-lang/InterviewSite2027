import { motion } from 'framer-motion'
import { FadeIn, SectionTitle } from './AnimatedSection'

const cards = [
  {
    title: 'Full-Cycle Enterprise Pursuit',
    body: 'I own the deal from picking the account to signing the paper. About 55% of my pipeline is cold outbound I sourced myself. Long enough in this to know the pipeline you inherit is not the pipeline that gets you to President\u2019s Club.',
  },
  {
    title: 'Complex Buying Committees',
    body: 'Every big deal I\u2019ve closed at Samsara moved through four to six stakeholders over four to six months. Operator, technical evaluator, finance, legal, executive buyer. One champion is a single point of failure. The deal moves when everyone in the room has the same reason for change.',
  },
  {
    title: 'Selling Into Ops-Heavy Buyers',
    body: 'The buyers I\u2019ve closed at Samsara run operations that break when the workflow does. Food and beverage plants, construction fleets, emergency services, field ops. What they buy is not software. What they buy is time back, less downtime, and a business case that adds up on paper for the CFO.',
  },
  {
    title: 'Teams That Actually Talk To Each Other',
    body: 'I do my best work when Sales, SDR, Marketing, SEs, Product, and Customer Success are talking. I bring field signal back to Product. I stay accountable for the number. Cross-functional is not a buzzword to me. It either works or my number doesn\u2019t land.',
  },
]

export default function WhatImBuiltFor() {
  return (
    <section id="built-for" className="bg-surface-1 border-b border-border py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="FIT" title="What I'm Built For" />
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="text-[14.5px] leading-[1.75] text-text-secondary max-w-[680px] mb-8">
            Four things I keep coming back to when I look at a role.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-4">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={0.1 + i * 0.06}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-surface-2 border border-border rounded-xl p-5"
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
