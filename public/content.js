export const pillars = [
  {
    id: 'territory', number: '01', name: 'Territory & pipeline', verb: 'Create opportunity.',
    question: 'Where is there a reason to have a conversation?',
    summary: 'I prioritize accounts by fit and evidence of change, then work from the operating team up and the executive team down.',
    moves: [
      ['Tier by fit and timing', 'Strong fit plus an active trigger earns the deepest attention. A good-fit account without a trigger needs a different cadence.'],
      ['Turn research into a point of view', 'Leadership changes, expansion, renewals, and operational initiatives give outreach a specific reason to exist.'],
      ['Build multiple paths into an account', 'Use operator conversations to understand the workflow. Bring that context to executives, with SDRs and partners working from the same account plan.']
    ],
    evidence: 'At Odom, an inherited opportunity gained direction when the evaluation was tied to the incumbent’s renewal window.',
    reflection: 'Research should change the next action: who I contact, what I ask, or how I prioritize the account.',
    stories: ['odom', 'calfrac'],
    labels: ['Account selection', 'Trigger-led outreach', 'Partner coordination']
  },
  {
    id: 'discovery', number: '02', name: 'Discovery & qualification', verb: 'Find the real purchase.',
    question: 'What has to be true for this customer to buy?',
    summary: 'I work backward from the business problem, the decision owner, and the conditions that make a purchase possible.',
    moves: [
      ['Understand the operating problem', 'Explore how the work happens today, what it costs, who feels the impact, and why the customer is looking now.'],
      ['Qualify the buying process', 'Clarify must-have capabilities, funding, decision timing, and who can approve or stop the purchase.'],
      ['Requalify when scope changes', 'A camera evaluation and a full-platform replacement are different purchases. The criteria, stakeholders, and forecast need to change with the scope.']
    ],
    evidence: 'Calfrac’s first economic-buyer discussion established the signer, budget timing, and decision deadline alongside the business case.',
    reflection: 'A willing champion and a promising trial are useful signals. They do not, by themselves, establish a path to a purchase.',
    stories: ['calfrac', 'platform-loss'], labels: ['Business pain', 'Decision process', 'Qualification gates']
  },
  {
    id: 'stakeholders', number: '03', name: 'Stakeholder alignment', verb: 'Build a shared decision.',
    question: 'Who needs to believe in the change—and why?',
    summary: 'I connect the people who use the product, validate the solution, fund the investment, and approve the change.',
    moves: [
      ['Map influence, not just titles', 'Understand the operator’s requirements, IT’s constraints, finance’s assumptions, and the executive’s priorities.'],
      ['Equip the champion', 'Give the internal advocate evidence, a clear recommendation, and answers to the objections they will face when I am not in the room.'],
      ['Keep checking the decision room', 'Revisit who will make the final call. A new executive or an influential evaluator can change the decision late in the process.']
    ],
    evidence: 'At Odom, the champion reused the deployment story in internal executive discussions. Access to the President remained indirect.',
    reflection: 'Broad participation helps. Knowing who will decide—and what they need to see—is what makes that coverage useful.',
    stories: ['odom', 'operational-fit'], labels: ['Champion development', 'Executive alignment', 'Consensus']
  },
  {
    id: 'value', number: '04', name: 'Business case & value', verb: 'Make the investment clear.',
    question: 'Can the buyer defend this decision to finance?',
    summary: 'I translate operational pain into a business case the customer can challenge, refine, and carry into an approval meeting.',
    moves: [
      ['Start with customer inputs', 'Use the customer’s operating data, costs, and workflow to define the problem before attaching a financial outcome.'],
      ['Make assumptions visible', 'Work with the SE and buyer to test the model. Separate observed trial results from projected benefits.'],
      ['Present the complete decision', 'Show the investment, expected value, transition effort, and implications of keeping the current approach together.']
    ],
    evidence: 'Calfrac’s SE-built model used customer-supplied data. I brought the model and pricing into the economic-buyer conversation together.',
    reflection: 'The strongest model is one the customer understands well enough to question—and ultimately own.',
    stories: ['calfrac', 'odom'], labels: ['Customer data', 'ROI assumptions', 'Executive business case']
  },
  {
    id: 'evaluation', number: '05', name: 'Evaluation & execution', verb: 'Give the trial a job.',
    question: 'What must the evaluation prove to enable a decision?',
    summary: 'I treat an evaluation as a joint project with customer-specific tests, clear ownership, and a defined next buying step.',
    moves: [
      ['Agree on the tests', 'Identify success criteria, participants, measures, and the decision that follows. Include practical workflow and deployment requirements.'],
      ['Prepare the team', 'Bring SEs the business context and technical questions. Establish who owns commercial progress, technical validation, and customer participation.'],
      ['Use checkpoints to resolve risk', 'Review results together, address issues early, and test whether the customer’s important questions have actually been answered.']
    ],
    evidence: 'In one logistics evaluation, strong safety results did not outweigh installation and hardware-mobility concerns.',
    reflection: 'A trial can demonstrate strong performance and still fail the customer’s most important test.',
    stories: ['operational-fit', 'regional-carrier', 'calfrac'], labels: ['Success criteria', 'SE partnership', 'Operational validation']
  },
  {
    id: 'negotiation', number: '06', name: 'Negotiation & close', verb: 'Make change workable.',
    question: 'What is still preventing a good decision from becoming an agreement?',
    summary: 'I identify the specific commercial or operational barrier, then coordinate the people and terms needed to resolve it.',
    moves: [
      ['Expose the paper process early', 'Surface legal, security, procurement, and signature requirements before the final commercial discussion.'],
      ['Diagnose the objection', 'Price, budget timing, implementation effort, and switching costs are different problems. The response should match the actual barrier.'],
      ['Trade with a purpose', 'Use term, billing structure, deployment options, and appropriate approvals to create a workable agreement without removing the reason to buy.']
    ],
    evidence: 'Odom required hard savings and a credible transition plan. Calfrac required billing aligned with the customer’s next budget year.',
    reflection: 'A late-stage objection often reveals an unresolved part of the buying process. Solving it takes more than another product presentation.',
    stories: ['odom', 'calfrac'], labels: ['Commercial structure', 'Procurement', 'Switching costs']
  },
  {
    id: 'forecast', number: '07', name: 'Forecast & continuity', verb: 'Keep the commitments real.',
    question: 'What evidence supports the forecast—and what happens after signature?',
    summary: 'I separate customer enthusiasm from buying progress and keep delivery expectations connected to the promises made in the sale.',
    moves: [
      ['Forecast against buyer evidence', 'Look for agreed milestones, approval participation, and a feasible decision path. A positive meeting is not the same as a completed buying step.'],
      ['Make dependencies explicit', 'Product readiness, executive access, contract exits, and changing dates belong in the risk discussion.'],
      ['Plan beyond the signature', 'Carry scope, stakeholders, success measures, and rollout expectations into the handoff. Keep implementation commitments visible during negotiation.']
    ],
    evidence: 'The platform-loss story shows the risk of extending a forecast while product readiness and executive alignment remain unresolved.',
    reflection: 'Repeated date movement should lead to a fresh qualification conversation, not simply a new date.',
    stories: ['platform-loss', 'odom'], labels: ['Risk visibility', 'Forecast judgment', 'Implementation handoff']
  }
];

export const stories = [
  {
    id: 'odom', name: 'Odom', label: 'Beverage distribution', category: 'win', categoryLabel: 'Closed won', number: '01',
    title: 'The product had support. The switch still needed a business case.',
    shortTitle: 'Making an incumbent replacement worth the disruption.',
    summary: 'An inherited opportunity, an established competitor, and an executive who required hard savings before approving the change.',
    metric: '$1.66M', metricLabel: 'Five-year contract value',
    stats: [['$1.66M', 'Recorded contract value'], ['657', 'Licensed units'], ['5 years', 'Agreement term']],
    pillars: ['stakeholders', 'value', 'negotiation', 'forecast'],
    brief: 'I took over a stalled opportunity and helped turn field-user support into a decision the customer could justify internally. The work combined a structured evaluation, champion enablement, partner coordination, and a practical transition plan.',
    tension: '“Cost neutral” was not enough.',
    tensionText: 'The President required hard savings to justify changing an established platform. A strong product evaluation had not yet solved the commercial decision.',
    context: 'Odom wanted more useful safety visibility and coaching from its technology. Earlier attempts at the account had not converted. The incumbent’s renewal window created a real decision timeline, but the customer still had to weigh the disruption and expense of a transition.',
    role: 'I inherited the opportunity and led its progression with the customer champion, our technical team, sales leadership, and Gridline. I did not originate the account. The President was reached through the champion rather than directly.',
    team: 'The partner supported the combined solution and deployment planning. Technical colleagues ran evaluation and training work. Sales leadership participated in the final commercial approvals.',
    decisions: [
      ['Give the evaluation a deadline', 'Anchor the plan to the incumbent’s renewal window, with security review, the trial, executive discussions, and paperwork sequenced around that decision.'],
      ['Help the champion make the internal case', 'Provide a comparative story, evaluation evidence, and deployment materials the champion could reuse with the executive team. Support the customer’s own recommendation rather than relying on another vendor presentation.'],
      ['Solve for the full cost of changing', 'Coordinate contract structure and installation economics with leadership and partners. Preserve the product capabilities that gave the customer a reason to switch.']
    ],
    outcome: 'The opportunity was recorded Closed Won for a five-year agreement covering 657 licensed units. Installation planning proceeded alongside the final commercial work.',
    lesson: 'Winning the product preference and winning the decision to change are separate jobs. The customer needed a financial case and a transition plan they could trust.',
    note: 'Contract value is rounded from the recorded opportunity value. It is a commercial result, not a claim of realized customer savings.',
    trajectory: ['Inherited evaluation', 'Internal business case', 'Commercial alignment', 'Transition planning']
  },
  {
    id: 'calfrac', name: 'Calfrac', label: 'Energy & field operations', category: 'win', categoryLabel: 'Closed won', number: '02',
    title: 'The value made sense. The budget calendar didn’t.',
    shortTitle: 'Turning a first-time investment into an approved purchase.',
    summary: 'A customer-specific value model and a commercial structure that allowed the decision to move ahead of the next budget year.',
    metric: '$271.6K', metricLabel: 'Three-year contract value',
    stats: [['$271.6K', 'Recorded contract value'], ['165', 'Vehicles'], ['3 years', 'Agreement term']],
    pillars: ['discovery', 'value', 'evaluation', 'negotiation'],
    brief: 'Calfrac had previously questioned the case for cameras. I brought customer data, an SE-built value model, and pricing into the economic-buyer conversation, then coordinated terms that addressed the budget timing.',
    tension: 'An agreed need can still get stuck in a budget cycle.',
    tensionText: 'After the customer favored the solution, its budget calendar remained a barrier. The commercial work had to make the timing feasible.',
    context: 'The customer was evaluating a first-time camera investment alongside an established technology environment. A generic safety pitch was not enough: the case needed to reflect its fleet, operating conditions, and investment priorities.',
    role: 'After SDR engagement opened the opportunity, I led discovery and commercial discussions, qualified the signer and timing, and coordinated the customer with the technical and approval teams.',
    team: 'The SDR helped open the account. The SE built the ROI model using customer inputs. Finance, Deal Desk, Accounting, and Legal helped structure the agreement and billing.',
    decisions: [
      ['Bring price and value into the same conversation', 'Present the investment alongside a fleet-specific model. Invite the buyer to challenge assumptions so the business case can support an internal approval.'],
      ['Qualify the approval path early', 'Clarify who signs, when the customer needs to decide, and how its budget process affects the purchase. Keep those constraints connected to the commercial plan.'],
      ['Change the timing structure', 'Coordinate billing aligned to the next budget year and an agreement incorporating the trial. Use the evaluation to validate the decision within that agreed framework.']
    ],
    outcome: 'The opportunity was recorded Closed Won for a three-year agreement. The contract incorporated the trial, with billing structured around the customer’s budget requirements.',
    lesson: 'A buyer can agree on value while still being unable to buy on the proposed terms. Qualification and commercial structure make the business case actionable.',
    note: 'Contract value is rounded from the recorded three-year agreement. Earlier ROI projections used different proposal assumptions and are not presented as delivered savings.',
    trajectory: ['Customer inputs', 'Executive value case', 'Budget alignment', 'Contract with trial']
  },
  {
    id: 'regional-carrier', name: 'Regional carrier', label: 'Freight & logistics', category: 'study', categoryLabel: 'Deal study', number: '03',
    title: 'A next-year purchase became a decision worth making sooner.',
    shortTitle: 'Connecting trial evidence to a practical reason to act.',
    summary: 'A team case study in executive engagement, customer-owned evidence, and resolving the timing of an investment.',
    metric: 'Why now?', metricLabel: 'Creating a reason to act',
    stats: [['Trial evidence', 'Value validation'], ['Owner + finance', 'Decision participation'], ['Payment timing', 'Commercial consideration']],
    pillars: ['stakeholders', 'value', 'evaluation', 'negotiation'],
    brief: 'The customer intended to wait until the following year. This case examines how a team connected trial evidence with owner and accounting participation, then addressed the practical timing of payment and implementation.',
    tension: 'There was interest, but no reason to move the calendar.',
    tensionText: 'Changing the buyer’s timeline required evidence of value and a way to act without creating a new budget problem.',
    context: 'The evaluation needed to accommodate existing systems, driver privacy preferences, and installation capacity. The customer was interested in improving its safety workflows but had planned a later purchase.',
    role: 'This is presented as a team deal study. The focus is the sales approach and decision sequence, rather than an individual booked-revenue claim.',
    team: 'Sales, technical, trial-success, and installation colleagues worked with the owner, safety users, accounting, and operational stakeholders.',
    decisions: [
      ['Engage the owner early', 'Bring the executive into the evaluation and expand participation to the people who would validate the economics and implement the solution.'],
      ['Make the progress tangible', 'Use regular trial reviews to connect measured product behavior with coaching workflows and customer-owned assumptions.'],
      ['Remove the practical reason to wait', 'Explore insurance support, payment timing, and installation arrangements alongside the value case.']
    ],
    outcome: 'The buyer expressed willingness to bring the purchase forward. This case highlights that decision shift without making an unconfirmed claim about final signature or personal revenue credit.',
    lesson: 'Urgency is more durable when it comes from the customer’s own evidence and a feasible buying plan.',
    note: 'Presented as an anonymized team case study; booked-revenue and final-signature claims are excluded.',
    trajectory: ['Deferred purchase', 'Visible trial evidence', 'Owner + finance review', 'Timing reconsidered']
  },
  {
    id: 'operational-fit', name: 'Logistics group', label: 'Operational fit', category: 'loss', categoryLabel: 'Loss & reflection', number: '04',
    title: 'We proved safety performance. They were judging operational fit.',
    shortTitle: 'The customer’s criteria were broader than our strongest proof.',
    summary: 'Strong evaluation results did not resolve hardware mobility, installation, workflow customization, and final decision coverage.',
    metric: 'Fit > features', metricLabel: 'The decision lesson',
    stats: [['Operational fit', 'Deciding consideration'], ['Trial criteria', 'Evaluation lesson'], ['New executive', 'Coverage gap']],
    pillars: ['discovery', 'stakeholders', 'evaluation'],
    brief: 'The evaluation generated encouraging safety results and a competitive financial case. The customer still had unresolved requirements for everyday operation, and a new executive joined the final decision.',
    tension: 'The evaluation answered our best question, not all of theirs.',
    tensionText: 'Hardware mobility and workflow requirements were central to the buyer. Strong results elsewhere did not make those tradeoffs disappear.',
    context: 'A logistics organization was comparing vendors across multiple operating needs. Moving equipment between vehicles and configuring workflows for different groups mattered to the people who would run the system.',
    role: 'The team maintained broad participation and a structured evaluation. My reflection centers on how the requirements were tested and how final decision coverage was checked.',
    team: 'Sales and technical colleagues supported the trial, executive reviews, operational questions, and proposed product improvements.',
    decisions: [
      ['Performance dominated the readout', 'Safety results received clear attention, while hardware mobility and installation were treated more as issues to resolve than explicit go/no-go tests.'],
      ['The proposed fix missed the decision window', 'An interface improvement could not be evaluated before the customer needed to choose. A promising preview did not substitute for tested capability.'],
      ['The final committee changed', 'A new executive participated in the final decision without having been directly engaged through the evaluation.']
    ],
    outcome: 'The customer reported selecting a competitor. The available account review points to operational fit and decision timing as central factors.',
    lesson: 'I would turn operational complaints into measurable trial tests earlier, confirm whether proposed fixes can be tested in time, and recheck who will attend the final decision meeting.',
    note: 'Customer identity and internal commercial details are omitted. These are reflections on the loss, not claims of a subsequently measured process improvement.',
    trajectory: ['Strong product results', 'Operational gaps', 'Decision deadline', 'Competitor selected']
  },
  {
    id: 'platform-loss', name: 'Transportation fleet', label: 'Qualification & forecast', category: 'loss', categoryLabel: 'Loss & reflection', number: '05',
    title: 'A safety preference was not a platform buying decision.',
    shortTitle: 'When the purchase changes, the qualification must change too.',
    summary: 'A positive product evaluation continued while platform requirements, product readiness, and executive access remained unresolved.',
    metric: 'Requalify', metricLabel: 'The decision lesson',
    stats: [['Broader platform', 'Purchase scope'], ['Product readiness', 'Critical dependency'], ['Executive access', 'Unresolved risk']],
    pillars: ['discovery', 'stakeholders', 'forecast'],
    brief: 'The safety team liked the product, but the purchase required an integrated solution spanning safety, electronic logging, and telematics. Product availability and broader decision-maker access remained critical.',
    tension: '“We prefer your safety solution” came with a condition.',
    tensionText: 'The customer needed a complete platform. Repeated positive evaluation feedback did not remove the capability and timing dependency.',
    context: 'An evaluation expanded into a broader platform replacement. The safety champion could recommend a product, but executive and technical stakeholders owned the larger decision.',
    role: 'The account received sustained relationship and technical work. The lesson is about deal structure: when scope and dependencies changed, qualification needed to be revisited more decisively.',
    team: 'Sales, technical, and product colleagues worked through evaluation feedback and the dependency on a broader product offering.',
    decisions: [
      ['The scope expanded', 'A favorable camera evaluation became one input to a platform choice, with different criteria and decision owners.'],
      ['The dependency remained open', 'The customer required a proven capability that was not ready within its buying window. Additional evaluation activity did not resolve that constraint.'],
      ['Forecast dates continued moving', 'Repeated timeline changes and limited executive access left the buying path uncertain despite strong engagement with the safety team.']
    ],
    outcome: 'The opportunity was recorded Closed Lost. The available account history does not establish a final winning vendor.',
    lesson: 'When a must-have depends on product delivery, I would confirm the acceptable timing directly with the decision owner, document the consequence of a slip, and reassess further investment in the evaluation.',
    note: 'Customer identity is omitted. The final competing vendor remains unconfirmed; the story focuses on qualification and forecast judgment.',
    trajectory: ['Safety evaluation', 'Platform requirement', 'Unresolved dependency', 'Opportunity lost']
  }
];

export const storyAliases = { woodfield: 'regional-carrier', kenco: 'operational-fit', tcw: 'platform-loss' };
export const email = 'alexanderdave619@gmail.com';
export const linkedin = 'https://www.linkedin.com/in/davealexander760';
