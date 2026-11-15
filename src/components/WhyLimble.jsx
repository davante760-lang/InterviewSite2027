import { FadeIn, SectionTitle } from './AnimatedSection'

const reasons = [
  {
    title: 'Outcomes That Actually Matter',
    body: 'Limble helps maintenance teams move from reactive fixes to preventive work, control inventory, and lift technician productivity. That is uptime, cost, and safety. Three things every plant manager loses sleep over and every CFO already tracks. That is a business case that lands on the plant floor and in the executive team the same way.',
  },
  {
    title: 'A Sale That Fits How I Win',
    body: 'Selling a maintenance transformation looks a lot like the deals I closed at Samsara. Diagnose how the operation actually runs today. Quantify what downtime and inefficient work is costing them. Get operations and technical stakeholders on the same page. Then earn the exec check. Same motion, different buyer.',
  },
  {
    title: 'Real Ownership',
    body: 'The role owns the whole motion. Pipeline, strategy, negotiation, close, forecast. Alongside SDR, Marketing, SEs, Product, CS. That mix of owning the number personally and having a team to run with is exactly what I want in my next role.',
  },
]

export default function WhyLimble() {
  return (
    <section id="why-limble" className="bg-surface-1 border-b border-border py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="WHY LIMBLE" title="What Piqued My Interest in Limble" />
        </FadeIn>
        <div className="flex flex-col gap-4">
          {reasons.map((reason, index) => (
            <FadeIn key={reason.title} delay={index * 0.07}>
              <article className="bg-surface-2 border border-border rounded-xl p-5">
                <h3 className="font-heading font-medium text-text-primary mb-2">{reason.title}</h3>
                <p className="text-[14.5px] leading-[1.75] text-text-secondary">{reason.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.25}>
          <div className="relative bg-surface-2 border border-border rounded-xl p-6 mt-4 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent" />
            <p className="font-heading text-[17px] md:text-[19px] leading-[1.55] text-text-primary">
              “The deals I close today and what Limble is asking maintenance teams to do sit right next to each other. Give operators a platform that makes uptime, productivity, and asset performance measurable. Then give them a reason to actually change how they work.”
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
