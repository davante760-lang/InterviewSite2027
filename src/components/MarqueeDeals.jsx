import { motion } from 'framer-motion'
import { FadeIn, SectionTitle } from './AnimatedSection'
import { dealCards as deals } from '../data/dealCards'

function DealSection({ id, title, description, deals, className = 'py-24 md:py-28 px-6' }) {
  return (
    <section id={id} className={className}>
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="MARQUEE DEALS" title={title} />
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="text-[14.5px] leading-[1.75] text-text-secondary max-w-[680px] mb-8">
            {description}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {deals.map((deal, index) => {
            const Card = deal.href ? motion.a : motion.article
            return (
            <FadeIn key={deal.name} delay={0.1 + index * 0.08}>
              <Card
                href={deal.href}
                aria-label={deal.href ? `Read ${deal.name} deal story` : undefined}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className={`bg-surface-1 border border-border rounded-xl p-5 h-full flex flex-col ${deal.href ? 'group hover:border-accent/60 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 transition-colors' : ''}`}
              >
                <div className="h-[126px] rounded-lg bg-surface-2 border border-border-light flex items-center justify-center px-4 mb-5 overflow-hidden">
                  {deal.logo ? (
                    <img
                      src={deal.logo}
                      alt={deal.logoAlt || `${deal.name} logo`}
                      className={`w-auto object-contain ${deal.logoClass}`}
                      style={{ maxWidth: '100%', ...deal.logoStyle }}
                      loading="lazy"
                    />
                  ) : (
                    <span aria-hidden="true" className="font-heading text-[22px] font-semibold leading-tight tracking-[-0.02em] text-text-primary text-center">
                      {deal.name}
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-[15px] font-semibold text-text-primary tracking-[-0.01em] mb-1.5">
                  {deal.name}
                </h3>
                <p className="text-[12.5px] leading-[1.6] text-text-tertiary mb-4">{deal.industry}</p>
                <div className="mt-auto pt-4 border-t border-border-light flex items-center justify-between gap-3">
                  <div className="shrink-0">
                    <span className="font-heading text-[21px] font-semibold tracking-[-0.03em] text-accent">{deal.value}</span>
                    {deal.valueLabel && <span className="block text-[10px] uppercase tracking-[0.12em] text-text-tertiary mt-0.5">{deal.valueLabel}</span>}
                  </div>
                  <div className="flex flex-col items-end gap-1.5 max-w-[126px] text-right">
                    <span className="text-[10px] leading-[1.5] text-text-tertiary">{deal.cycle}</span>
                    <span className="text-[9px] uppercase tracking-[0.1em] font-medium text-teal bg-teal-dim rounded-full px-2.5 py-1.5 text-center leading-[1.5]">
                      {deal.tag}
                    </span>
                  </div>
                </div>
                {deal.href && (
                  <span className="mt-4 flex items-center justify-between text-[12px] font-medium text-accent">
                    Read deal story
                    <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                )}
              </Card>
            </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function MarqueeDeals() {
  return (
    <DealSection
      id="marquee-deals"
      title="Deals"
      description="Selected wins across transportation, distribution, construction, and industrial operations."
      deals={deals}
    />
  )
}
