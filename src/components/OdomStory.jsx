import Footer from './Footer'

const linkStyle = 'rounded-sm text-[13px] font-medium transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4'
const headingStyle = 'font-heading text-[19px] font-semibold tracking-[-0.02em] text-text-primary mb-3'

function StorySection({ title, children }) {
  return (
    <section>
      <h2 className={headingStyle}>{title}</h2>
      {children}
    </section>
  )
}

export default function OdomStory() {
  return (
    <>
      <header className="px-6">
        <nav aria-label="Deal story navigation" className="max-w-[860px] mx-auto flex items-center justify-between gap-4 py-6 border-b border-border">
          <a href="/#marquee-deals" className={`${linkStyle} text-text-secondary`}>
            <span aria-hidden="true">← </span>Back to deals
          </a>
          <a href="/" className={`${linkStyle} font-heading text-text-tertiary`}>Dave Alexander</a>
        </nav>
      </header>

      <main className="px-6 pt-12 md:pt-16 pb-16 md:pb-20">
        <article className="max-w-[720px] mx-auto" aria-labelledby="odom-title">
          <header className="mb-10 md:mb-12">
            <div className="flex items-center justify-between gap-5 mb-7">
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-accent">Deal story</span>
              <img src="/deal-logos/odom.png" alt="The Odom Corporation logo" className="w-[132px] max-h-[56px] object-contain" />
            </div>
            <h1 id="odom-title" className="font-heading text-[32px] md:text-[42px] leading-[1.12] font-semibold tracking-[-0.035em] mb-4">
              The Odom Corporation
            </h1>
            <p className="text-[16px] md:text-[18px] leading-[1.65] text-text-secondary max-w-[600px]">
              Reviving a stalled evaluation and winning a 657-vehicle competitive displacement.
            </p>
            <div aria-hidden="true" className="h-[2px] w-12 bg-accent mt-6" />

            <dl className="grid grid-cols-3 divide-x divide-border mt-8 rounded-xl border border-border bg-surface-1 py-5">
              <div className="px-3 sm:px-6">
                <dt className="text-[11px] text-text-tertiary mb-1">ARR</dt>
                <dd className="font-heading text-[23px] sm:text-[29px] font-semibold tracking-[-0.03em] text-accent">$331.9K</dd>
              </div>
              <div className="px-3 sm:px-6">
                <dt className="text-[11px] text-text-tertiary mb-1">Vehicles</dt>
                <dd className="font-heading text-[23px] sm:text-[29px] font-semibold tracking-[-0.03em]">657</dd>
              </div>
              <div className="px-3 sm:px-6">
                <dt className="text-[11px] text-text-tertiary mb-1">From takeover</dt>
                <dd className="font-heading text-[23px] sm:text-[29px] font-semibold tracking-[-0.03em]">204 <span className="text-[12px] sm:text-[14px] font-normal tracking-normal text-text-tertiary">days</span></dd>
              </div>
            </dl>
          </header>

          <div className="space-y-8 md:space-y-10 text-[15px] leading-[1.8] text-text-secondary">
            <StorySection title="How I got involved">
              <p>I inherited Odom in January 2026. Netradyne had lost two earlier attempts at the account, and the current evaluation had stalled. I worked with our partner, Gridline, and Odom’s VP of Logistics to build momentum around a concrete deadline: the notice date for their Samsara renewal.</p>
            </StorySection>

            <StorySection title="The situation">
              <p>Odom’s managers were spending too much time reviewing false alerts, and confidence in the existing system had eroded. They wanted better visibility and more effective coaching. But replacing technology across hundreds of vehicles meant installation costs, operational disruption, and an executive decision that required a financial justification.</p>
            </StorySection>

            <StorySection title="My objective">
              <p>Turn an operational preference into an approved purchase. I needed to help the customer validate the solution, equip our champion to make the internal case, and clear the commercial and implementation hurdles before the renewal deadline.</p>
            </StorySection>

            <StorySection title="What I did">
              <ul className="space-y-5 list-disc pl-5 marker:text-accent">
                <li className="pl-1">
                  <strong className="font-semibold text-text-primary">Built the evaluation around the people using the system.</strong>{' '}
                  I coordinated a 10-unit trial with Gridline and our trial team, maintained weekly check-ins, and involved Odom’s operations leaders in comparing the results with their incumbent.
                </li>
                <li className="pl-1">
                  <strong className="font-semibold text-text-primary">Prepared my champion for the executive conversation.</strong>{' '}
                  I gave him a CFO-focused comparison, trial highlights, and a phased deployment plan. We used Odom’s own operating data to model the business case. The President’s decision came through our champion, so those materials had to work without me in the room.
                </li>
                <li className="pl-1">
                  <strong className="font-semibold text-text-primary">Moved the approval work alongside the evaluation.</strong>{' '}
                  I followed through on security questions and coordinated contract revisions so those issues were resolved before the final pricing agreement.
                </li>
              </ul>
            </StorySection>

            <section className="rounded-xl border border-accent/25 bg-accent-subtle p-6 md:p-7">
              <h2 className={`${headingStyle} text-accent`}>The turning point</h2>
              <p>The President required hard savings to justify switching. A cost-neutral proposal would not get approved.</p>
              <p className="mt-4">Our champion proposed a longer commitment. I brought my director into the pricing conversation and secured a lower installation quote. Together, we reached a five-year structure with price increases in later years while retaining the four-camera solution the customer valued.</p>
            </section>

            <StorySection title="The result">
              <p>The opportunity closed on August 12, ahead of the August 15 notice deadline: <strong className="font-semibold text-text-primary">$331.9K in ARR and approximately $1.66M in total contract value</strong>, covering 657 vehicles. That was 204 days after I took ownership.</p>
            </StorySection>

            <StorySection title="What I learned">
              <p>A successful evaluation still needs an executable buying decision. The champion needs evidence they can defend, the executive needs a financial reason to approve, and the operations team needs a credible plan for making the change.</p>
            </StorySection>
          </div>

          <nav aria-label="Continue exploring" className="flex flex-wrap items-center justify-between gap-5 border-t border-border mt-12 pt-7">
            <a href="/#marquee-deals" className={`${linkStyle} text-accent`}><span aria-hidden="true">← </span>Back to deals</a>
            <a href="/DaveAlexanderResume.pdf" download className={`${linkStyle} text-text-secondary`}>Download resume <span aria-hidden="true">↓</span></a>
          </nav>
        </article>
      </main>

      <Footer />
    </>
  )
}
