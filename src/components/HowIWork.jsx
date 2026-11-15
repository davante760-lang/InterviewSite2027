import { FadeIn, SectionTitle } from './AnimatedSection'

const items = [
  {
    title: 'Trigger-Based Prospecting',
    body: 'At Samsara I tier a book of 150 to 250 accounts down to what I actually work every week. The signals I chase are the ones that mean the buyer is already thinking about change. New operations or fleet leadership. Facility expansions. M&A. Safety incidents. Insurance premium spikes. DOT and compliance events. I lead with what changed in their business, not a product pitch. Same discipline transfers to any territory.',
  },
  {
    title: 'Multi-Threading',
    body: 'Every complex deal I\u2019ve closed at Samsara ran two threads at once. Top-down with the CFO or COO. Bottom-up with the operator, IT, finance. One champion is a single point of failure. The deal moves forward when everyone has the same business case in their head and the same number attached to it.',
  },
  {
    title: 'MEDDPICC Discipline',
    body: 'I would rather hear no than maybe. Every deal I forecast has metrics attached, an economic buyer named, decision criteria written down, and paper process mapped. Procurement, security, legal, implementation risk. All surfaced early. Nothing rolls forward on hope.',
  },
  {
    title: 'Cross-Functional Deal Leadership',
    body: 'I bring in SDR, SEs, Product, CS, legal, and leadership when they have a reason to be there and something specific to do. That is how my average deal size at Samsara got to $84K. Multi-product attach and business cases the exec buyer would actually sign.',
  },
]

export default function HowIWork() {
  return (
    <section id="how-i-sell" className="py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="APPROACH" title="How I Sell" />
        </FadeIn>

        <div className="space-y-6">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="pl-4 border-l border-border-light max-w-[680px]">
                <h3 className="font-heading text-[15px] font-semibold text-text-primary tracking-[-0.01em] mb-2">
                  {item.title}
                </h3>
                <p className="text-[14.5px] leading-[1.75] text-text-secondary">
                  {item.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
