export const email = 'alexanderdave619@gmail.com';
export const linkedin = 'https://www.linkedin.com/in/davealexander760';

export const pillars = [
  { id: 'territory', name: 'Territory & pipeline', line: 'Prioritize the right accounts and find a reason to start a conversation.' },
  { id: 'discovery', name: 'Discovery & qualification', line: 'Understand the problem, the buying process, and what could stop the deal.' },
  { id: 'stakeholders', name: 'Stakeholder alignment', line: 'Equip the champion and bring the right people into the decision.' },
  { id: 'value', name: 'Business case & value', line: 'Build the case with customer data and assumptions the buyer can defend.' },
  { id: 'evaluation', name: 'Evaluation & execution', line: 'Agree on what a trial needs to prove and who owns each step.' },
  { id: 'negotiation', name: 'Negotiation & close', line: 'Work through pricing, timing, procurement, and the cost of switching.' },
  { id: 'forecast', name: 'Forecast & continuity', line: 'Forecast against buying progress. Carry the commitments into the handoff.' }
];

export const stories = [
  {
    id: 'odom', name: 'Odom', category: 'win', label: 'Closed won', industry: 'Beverage distribution',
    metric: '$1.66M', metricLabel: 'Total contract value · 5 years', scope: '657 licensed units',
    preview: 'Turning an inherited opportunity into an approved incumbent replacement.',
    headline: 'Making the switch worth it.',
    sections: [
      ['The challenge', 'The product had support, but replacing the incumbent meant cost and disruption. The President required hard savings before approving the change.'],
      ['My role', 'I inherited the opportunity and coordinated the champion, technical team, Gridline, and sales leadership. We tied the evaluation to the renewal window and equipped the champion to make the internal case. Access to the President remained through the champion.'],
      ['The result', 'A five-year agreement covering 657 licensed units, with approximately $1.66M in total contract value. Partner support and commercial approvals helped make the transition workable.']
    ],
    takeaway: 'Product preference wasn’t enough. The business case and transition plan had to make changing systems worthwhile.',
    note: 'Contract value is rounded. It is not a measure of realized customer savings.'
  },
  {
    id: 'calfrac', name: 'Calfrac', category: 'win', label: 'Closed won', industry: 'Energy & field operations',
    metric: '$271.6K', metricLabel: 'Total contract value · 3 years', scope: '165 vehicles',
    preview: 'Building the business case and solving the customer’s budget timing.',
    headline: 'The value was clear. The timing needed work.',
    sections: [
      ['The challenge', 'Calfrac had questioned whether cameras justified the investment. Once the customer favored the solution, its budget calendar became the obstacle.'],
      ['My role', 'After SDR engagement opened the account, I led discovery and commercial discussions. I brought pricing and an SE-built model using customer data into the economic-buyer conversation, then coordinated Finance, Deal Desk, Accounting, and Legal on billing timing.'],
      ['The result', 'A three-year agreement covering 165 vehicles and approximately $271.6K in total contract value. The contract incorporated the trial, with billing aligned to the next budget year.']
    ],
    takeaway: 'A buyer can agree on value and still need a different commercial structure to move forward.',
    note: 'Contract value is rounded. Modeled ROI is not presented as delivered savings.'
  },
  {
    id: 'regional-carrier', name: 'Regional carrier', category: 'study', label: 'Team case study', industry: 'Freight & logistics',
    preview: 'Giving a planned purchase a reason to happen sooner.',
    headline: 'Turning “next year” into a real discussion.',
    sections: [
      ['The challenge', 'The customer planned to wait until the following year. Interest in the product hadn’t created a reason to change the calendar.'],
      ['The team’s approach', 'Sales and technical colleagues involved the owner, accounting, and operational stakeholders. Regular trial reviews connected product evidence to coaching workflows. Payment timing and installation planning addressed the practical reasons to wait.'],
      ['The outcome', 'The buyer expressed willingness to bring the purchase forward. This is a team case study; final signature and individual revenue credit remain unconfirmed.']
    ],
    takeaway: 'Urgency works when it comes from the customer’s evidence and a feasible buying plan.',
    note: 'Customer identity is omitted. No booked-revenue claim is made.'
  },
  {
    id: 'operational-fit', name: 'Logistics group', category: 'loss', label: 'Closed lost', industry: 'Operational fit',
    preview: 'Test what the buyer cares about, not just where the product shines.',
    headline: 'Strong trial results. Unresolved requirements.',
    sections: [
      ['What happened', 'The trial produced encouraging safety results, but hardware mobility, installation, and workflow customization remained unresolved. A proposed improvement couldn’t be tested before the decision deadline.'],
      ['Where the deal broke down', 'Our strongest evidence emphasized safety performance. The customer was judging broader operational fit, and a new executive joined the final decision without direct engagement during the evaluation.'],
      ['The outcome', 'The customer reported choosing a competitor.']
    ],
    takeaway: 'I would turn operational requirements into explicit trial tests earlier and recheck who will make the final decision.',
    note: 'An anonymized loss reflection, not a claim of a measured process improvement.'
  },
  {
    id: 'platform-loss', name: 'Transportation fleet', category: 'loss', label: 'Closed lost', industry: 'Qualification & forecast',
    preview: 'Requalify when a product evaluation becomes a platform purchase.',
    headline: 'A preference wasn’t a purchase decision.',
    sections: [
      ['What happened', 'The safety team preferred the product, but the purchase required a complete platform covering safety, electronic logging, and telematics.'],
      ['Where the deal broke down', 'Positive trial feedback continued while product readiness, executive access, and the broader buying process remained unresolved. Close dates kept moving.'],
      ['The outcome', 'The opportunity was recorded Closed Lost. The available account history does not establish a final winning vendor.']
    ],
    takeaway: 'When the scope changes, I would reconfirm must-have capabilities and timing with the decision owner before investing in more evaluation.',
    note: 'Customer identity is omitted; the final competing vendor remains unconfirmed.'
  }
];

export const storyAliases = { woodfield: 'regional-carrier', kenco: 'operational-fit', tcw: 'platform-loss' };
