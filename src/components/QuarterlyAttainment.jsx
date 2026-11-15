import { FadeIn, SectionTitle } from './AnimatedSection'

const rows = [
  ['FY23', 'Samsara · ramp', '65%', '85%', '118%', '136%', '101%'],
  ['FY24', 'Samsara', '100%', '108%', '122%', '134%', '116%'],
  ['FY25', 'Samsara', '105%', '110%', '118%', '147%', '120%'],
  ['2026', 'Netradyne', '—', '—', '105%', '208%', '91%'],
]

export default function QuarterlyAttainment() {
  return (
    <section id="attainment" className="py-24 md:py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <FadeIn>
          <SectionTitle eyebrow="PERFORMANCE DETAIL" title="Quarterly Attainment" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="overflow-x-auto rounded-xl border border-border bg-surface-1" tabIndex="0">
            <table className="w-full min-w-[700px] border-collapse text-[13px]">
              <caption className="sr-only">Quarterly quota attainment at Samsara for FY23 through FY25 and Netradyne for 2026</caption>
              <thead>
                <tr className="bg-surface-3 text-text-primary">
                  {['Period', 'Q1', 'Q2', 'Q3', 'Q4', 'Annual quota'].map((heading, index) => (
                    <th key={heading} scope="col" className={`px-4 py-3.5 font-medium border-b border-border ${index === 0 ? 'text-left' : 'text-center'}`}>{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row[0]} className="border-b border-border-light last:border-b-0 even:bg-surface-2/40">
                    <th scope="row" className="px-4 py-3.5 text-left font-medium text-text-primary whitespace-nowrap">
                      {row[0]} <span className="text-text-tertiary font-normal">({row[1]})</span>
                    </th>
                    {row.slice(2, 6).map((value, index) => <td key={`${row[0]}-${index}`} className="px-4 py-3.5 text-center text-text-secondary whitespace-nowrap">{value}</td>)}
                    <td className="px-4 py-3.5 text-center font-semibold text-teal whitespace-nowrap">{row[6]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[12px] text-text-tertiary leading-relaxed mt-3">
            Netradyne: 170% of first-year ramp quota; 91% of the full $1.27M annual quota.
            Quarterly figures use the full $317,500 quota. — = not reported.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
