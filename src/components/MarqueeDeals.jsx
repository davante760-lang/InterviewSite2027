import { motion } from 'framer-motion'
import { FadeIn, SectionTitle } from './AnimatedSection'

const deals = [
  {
    name: 'JDE Concrete',
    industry: 'Concrete & construction operations',
    value: '$250K',
    cycle: '6-month sales cycle',
    logo: '/jde-concrete.png',
    logoClass: 'max-h-[82px] max-w-[210px]',
    tag: 'Self-sourced',
  },
  {
    name: 'Excelsior Ambulance Service',
    industry: 'Emergency medical services',
    value: '$117K',
    cycle: '4-month sales cycle',
    logo: '/excelsior-ambulance.webp',
    logoClass: 'max-h-[76px] max-w-[240px]',
    tag: 'Self-sourced',
  },
  {
    name: 'Dietz & Watson',
    industry: 'Food manufacturing & distribution',
    value: '$91K',
    cycle: '65-day sales cycle',
    logo: '/dietz-watson.png',
    logoClass: 'max-h-[98px] max-w-[210px]',
    tag: 'Self-sourced',
  },
  {
    name: 'The Odom Corporation',
    industry: 'Beverage distribution · 657 vehicles',
    value: '$331.9K',
    valueLabel: 'ARR',
    cycle: '204 days from takeover',
    tag: 'Samsara displacement',
    logo: '/deal-logos/odom.png',
    logoClass: 'max-h-[82px] max-w-full',
  },
  {
    name: 'Texas TransEastern',
    industry: 'Fuel & hazmat transportation · 230 trucks',
    value: '$194.9K',
    valueLabel: 'ARR',
    cycle: 'Closed Oct 2026',
    tag: 'Samsara displacement',
    logo: '/deal-logos/texas-transeastern.png',
    logoClass: 'max-h-[90px] max-w-full',
  },
  {
    name: "BJ's Logistics",
    industry: 'Retail distribution · 220 vehicles',
    value: '$164.5K',
    valueLabel: 'ARR',
    cycle: 'Closed Apr 2026',
    tag: 'Lytx displacement',
    logo: '/deal-logos/bjs.png',
    logoAlt: "BJ's Wholesale Club logo",
    logoClass: 'max-h-[90px] max-w-full',
  },
  {
    name: 'Miami Yellow Cab',
    industry: 'Taxi & insurance operations · 680+ cabs',
    value: '$163.7K',
    valueLabel: 'ARR',
    cycle: '337-day opportunity cycle',
    tag: 'First camera deployment',
    logo: '/deal-logos/miami-yellow-cab.png',
    logoAlt: 'Yellow Cab 965 logo',
    logoClass: 'max-h-[112px] max-w-full',
    logoStyle: { clipPath: 'circle(43% at 50% 50%)' },
  },
  {
    name: 'Kodiak Building Partners',
    industry: 'Building products · 270 vehicles',
    value: '$110K',
    valueLabel: 'ARR',
    cycle: '135-day opportunity cycle',
    tag: 'Safety program rollout',
    logo: '/deal-logos/kodiak-wordmark.jpg',
    logoClass: 'max-h-[82px] max-w-full',
    logoStyle: { filter: 'invert(1)', mixBlendMode: 'lighten' },
  },
  {
    name: 'Woodfield',
    industry: 'Freight & defense logistics · 116 vehicles',
    value: '$103.3K',
    valueLabel: 'ARR',
    cycle: '101-day opportunity cycle',
    tag: 'Spireon displacement',
    logo: '/deal-logos/woodfield.png',
    logoClass: 'max-h-[90px] max-w-full',
  },
  {
    name: 'Calfrac',
    industry: 'Oilfield services · 165 vehicles',
    value: '$88.9K',
    valueLabel: 'ARR',
    cycle: '93-day opportunity cycle',
    tag: 'ROI-led win',
    logo: '/deal-logos/calfrac.png',
    logoClass: 'max-h-[98px] max-w-full',
  },
]

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
          {deals.map((deal, index) => (
            <FadeIn key={deal.name} delay={0.1 + index * 0.08}>
              <motion.article
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-surface-1 border border-border rounded-xl p-5 h-full flex flex-col"
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
              </motion.article>
            </FadeIn>
          ))}
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
