import { pillars, stories, storyAliases, email, linkedin } from './content.js';

const main = document.querySelector('main');
const arrow = '<span aria-hidden="true">↗</span>';
const chevron = '<span aria-hidden="true">→</span>';
const pillarLink = id => `#/pillars/${id}`;
const storyLink = id => `#/stories/${id}`;
let activePillar = 0;
let lastRoute = '';
const horizontalTabs = matchMedia('(max-width: 800px)');

function label(text, extra = '') {
  return `<p class="section-label ${extra}"><span aria-hidden="true"></span>${text}</p>`;
}
function tags(ids, links = true) {
  return `<div class="tags">${ids.map(id => {
    const p = pillars.find(p => p.id === id);
    return links ? `<a href="${pillarLink(id)}">${p.name}</a>` : `<span>${p.name}</span>`;
  }).join('')}</div>`;
}
function contactSection() {
  return `<section class="contact-section wrap"><div>${label('THE NEXT CONVERSATION')}<h2>Let’s talk about<br>the work <em>ahead.</em></h2></div><div class="contact-copy"><p>A new territory. A complex buying group. A customer that needs a reason to change. I’d like to hear what your next AE needs to own.</p><a class="button dark" href="mailto:${email}">Start a conversation ${arrow}</a><a class="text-link" href="${linkedin}" target="_blank" rel="noopener noreferrer">Connect on LinkedIn ${arrow}</a></div></section>`;
}
function miniCase(s) {
  return `<a class="mini-case" href="${storyLink(s.id)}"><div class="mini-case-head"><span class="eyebrow">${s.categoryLabel} / ${s.label}</span>${arrow}</div><h3>${s.name}</h3><p>${s.shortTitle}</p><div class="mini-case-bottom"><strong>${s.metric}</strong><span>${s.metricLabel}</span></div></a>`;
}
function featuredCase() {
  const s = stories[0];
  return `<a class="featured-case" href="${storyLink(s.id)}"><div class="featured-left">${label('01 / SELECTED ENGAGEMENT', 'light')}<div class="case-brand">Odom<span>↗</span></div><p class="featured-title">The product had support.<br>The switch needed a case.</p><p>How an inherited opportunity became an approved incumbent replacement.</p><span class="underlined-link">Read the decision story ${chevron}</span></div><div class="featured-right"><div class="featured-metric"><strong>$1.66<span>M</span></strong><span>Recorded contract value · Five-year agreement</span></div><div class="featured-facts"><div><b>657</b><span>Licensed units</span></div><div><b>4</b><span>Connected disciplines</span></div></div><div class="case-track" aria-label="Deal progression"><span>Evaluation</span><i></i><span>Business case</span><i></i><span>Agreement</span></div></div></a>`;
}
function explorerPanel(index) {
  const p = pillars[index];
  return `<div class="explorer-panel-inner"><div class="panel-heading"><span class="panel-counter">${p.number}<small>/ 07</small></span><span class="eyebrow">${p.name}</span></div><h3>${p.verb}</h3><p class="panel-question">${p.question}</p><p>${p.summary}</p><div class="panel-moves">${p.moves.map(([title]) => `<span>${chevron} ${title}</span>`).join('')}</div><div class="panel-proof"><span class="eyebrow">IN PRACTICE</span><p>${p.evidence}</p></div><a class="button outline-light" href="${pillarLink(p.id)}">Explore this discipline ${arrow}</a></div>`;
}
function explorer() {
  return `<div class="pillar-explorer"><div class="pillar-tabs" role="tablist" aria-label="Seven sales disciplines" aria-orientation="${horizontalTabs.matches?'horizontal':'vertical'}">${pillars.map((p,i) => `<button id="pillar-tab-${i}" class="pillar-tab ${i===activePillar?'selected':''}" role="tab" aria-controls="pillar-panel" aria-selected="${i===activePillar}" tabindex="${i===activePillar?0:-1}" data-pillar="${i}"><span class="tab-number">${p.number}</span><span>${p.name}</span>${chevron}</button>`).join('')}</div><div id="pillar-panel" class="explorer-panel" role="tabpanel" tabindex="0" aria-labelledby="pillar-tab-${activePillar}">${explorerPanel(activePillar)}</div></div>`;
}
function home() {
  return `<section class="hero wrap"><div class="hero-kicker"><span class="eyebrow">DAVE ALEXANDER / ENTERPRISE SALES</span><span class="edition"><span aria-hidden="true">●</span> THE APPROACH & THE EVIDENCE</span></div><div class="hero-grid"><div class="hero-title"><h1>Selling change.<br><em>Owning the work.</em></h1></div><div class="hero-intro"><span class="intro-mark" aria-hidden="true">↗</span><p>I help complex buying teams turn operational problems into decisions they can stand behind.</p><p class="supporting">From building the pipeline to working through the final objection, I own the process—and bring the right people into it.</p><a class="text-link" href="#/pillars">Explore my approach ${arrow}</a></div></div><div class="hero-bottom"><span>OPERATIONAL SAAS</span><span>COMPLEX BUYING GROUPS</span><span>FULL-CYCLE OWNERSHIP</span><a href="#/stories">Go straight to the deal stories ↓</a></div>${featuredCase()}</section>
  <section class="approach-section wrap" id="approach"><div class="section-heading"><div>${label('THE OPERATING APPROACH')}<h2>A deal has<br><em>seven jobs to do.</em></h2></div><p>These disciplines are connected. Select one to see how I approach it, the question I’m trying to answer, and the evidence behind it.</p></div>${explorer()}</section>
  <section class="more-work-section wrap"><div class="section-heading compact"><div>${label('MORE OF THE WORK')}<h2>Different obstacles.<br><em>Specific decisions.</em></h2></div><a class="text-link" href="#/stories">Browse every story ${arrow}</a></div><div class="two-cases">${miniCase(stories[1])}${miniCase(stories[2])}</div></section>
  <section class="lessons-section"><div class="wrap lessons-layout"><div>${label('WHAT THE LOSSES TAUGHT ME')}<h2>Judgment gets better<br>when you examine<br><em>what didn’t work.</em></h2><p>The useful part of a loss is identifying which signals mattered and what deserved a different decision.</p><a class="text-link" href="#/stories?type=loss">Read the reflections ${arrow}</a></div><div class="lesson-list"><a href="${storyLink('operational-fit')}"><span class="lesson-no">01</span><div><h3>The buyer’s criteria<br>set the test.</h3><p>Strong product results could not resolve an operational-fit gap.</p></div>${arrow}</a><a href="${storyLink('platform-loss')}"><span class="lesson-no">02</span><div><h3>A preference isn’t<br>a purchase decision.</h3><p>A broader platform requirement changed what qualified the deal.</p></div>${arrow}</a></div></div></section>
  <section class="about-strip wrap"><span class="about-symbol" aria-hidden="true">d.a</span><div><span class="eyebrow">THE PERSON BEHIND THE PROCESS</span><h2>Curious about the business.<br><em>Accountable for the outcome.</em></h2><p>My background spans insurance technology and operational SaaS. I like understanding how a business works, where the friction lives, and what it would take to make a change worthwhile.</p><a class="text-link" href="#/about">A little more about me ${arrow}</a></div></section>${contactSection()}`;
}
function approachPage() {
  return `<section class="page-hero wrap">${label('THE OPERATING APPROACH')}<h1>Seven disciplines.<br><em>One connected job.</em></h1><div class="page-hero-bottom"><p>Enterprise selling means owning the work between a promising conversation and a decision the customer is ready to make.</p><span class="eyebrow">EXPLORE THE PLAYBOOK ↓</span></div></section><section class="wrap approach-index">${explorer()}<div class="principle-bar"><span>THE THROUGH LINE</span><p>Understand the buyer’s decision.<br>Make the next step <em>meaningful.</em></p></div></section>${contactSection()}`;
}
function pillarPage(p) {
  const i = pillars.indexOf(p);
  return `<section class="page-hero wrap pillar-hero"><a class="back-link" href="#/pillars">← All seven disciplines</a><div class="pillar-hero-grid"><div>${label(`${p.number} / 07 · ${p.name}`)}<h1>${p.verb.split(' ').slice(0,-1).join(' ')}<br><em>${p.verb.split(' ').at(-1)}</em></h1><p class="wide-intro">${p.summary}</p></div><div class="giant-number" aria-hidden="true">${p.number}</div></div></section><div class="wrap article-layout"><aside class="article-sidebar"><span class="eyebrow">THE SEVEN DISCIPLINES</span><nav aria-label="Sales disciplines">${pillars.map(x=>`<a href="${pillarLink(x.id)}" ${x===p?'aria-current="page"':''}><span>${x.number}</span>${x.name}</a>`).join('')}</nav></aside><article class="pillar-article"><div class="question-block"><span class="eyebrow">THE QUESTION I’M ANSWERING</span><h2>${p.question}</h2></div><div class="numbered-moves">${p.moves.map(([title,body],n)=>`<section><span>0${n+1}</span><div><h3>${title}</h3><p>${body}</p></div></section>`).join('')}</div><div class="reflection-block"><span class="eyebrow">THE PERSPECTIVE</span><p>${p.reflection}</p></div><div class="related-heading"><h2>Where it shows up.</h2><span class="eyebrow">THE SUPPORTING STORIES</span></div><div class="related-stories">${p.stories.map(id=>{const s=stories.find(x=>x.id===id);return `<a href="${storyLink(id)}"><span class="eyebrow">${s.categoryLabel} · ${s.name}</span><h3>${s.shortTitle}</h3>${arrow}</a>`}).join('')}</div><div class="next-pillar"><span class="eyebrow">NEXT DISCIPLINE</span><a href="${pillarLink(pillars[(i+1)%7].id)}">${pillars[(i+1)%7].name} ${chevron}</a></div></article></div>${contactSection()}`;
}
function storyRow(s) {
  return `<article class="story-row" data-story="${s.id}"><div class="story-row-meta"><span class="eyebrow">${s.number} / ${s.categoryLabel}</span><span class="story-sector">${s.label}</span></div><div class="story-row-main"><a href="${storyLink(s.id)}"><span class="story-account">${s.name}</span><h2>${s.shortTitle}</h2><p>${s.summary}</p></a>${tags(s.pillars)}</div><a class="story-row-metric" href="${storyLink(s.id)}" aria-label="Read ${s.name} story"><strong>${s.metric}</strong><span>${s.metricLabel}</span><span class="round-arrow" aria-hidden="true">↗</span></a></article>`;
}
function libraryPage(params) {
  const type = ['win','study','loss'].includes(params.get('type')) ? params.get('type') : params.get('filter')==='loss'?'loss':'all';
  const skill = pillars.some(p=>p.id===params.get('pillar'))?params.get('pillar'):'all';
  return `<section class="page-hero wrap">${label('SELECTED WORK')}<h1>The decisions<br><em>behind the deals.</em></h1><div class="page-hero-bottom"><p>Commercial wins, practical tradeoffs, and candid reflections. Explore by outcome or by the part of the job you want to understand.</p><span class="eyebrow">05 STORIES / 07 DISCIPLINES</span></div></section><section class="wrap library"><div class="library-controls"><div class="filter-group" role="group" aria-label="Filter by outcome">${[['all','All work'],['win','Wins'],['study','Deal study'],['loss','Losses & lessons']].map(([value,title])=>`<button data-type="${value}" class="${value===type?'active':''}" aria-pressed="${value===type}">${title}</button>`).join('')}</div><label class="skill-filter"><span>Explore a discipline</span><select id="skill-filter"><option value="all">All disciplines</option>${pillars.map(p=>`<option value="${p.id}" ${p.id===skill?'selected':''}>${p.name}</option>`).join('')}</select></label></div><div class="results-summary"><span id="result-count" aria-live="polite"></span><button id="reset-filters">Reset filters ↺</button></div><div id="story-results">${stories.map(storyRow).join('')}</div><div class="empty-state" hidden><h2>No stories in this combination.</h2><p>Try another discipline or clear the outcome filter.</p><button class="button dark" id="empty-reset">Show all work ${arrow}</button></div></section>${contactSection()}`;
}
function casePage(s) {
  const index = stories.indexOf(s), next = stories[(index+1)%stories.length];
  return `<section class="case-hero wrap"><a class="back-link" href="#/stories">← Selected work</a><div class="case-topline"><span class="eyebrow">${s.name} / ${s.label}</span><span class="status-badge ${s.category}">${s.categoryLabel}</span></div><h1>${s.title}</h1><p class="case-deck">${s.summary}</p><div class="case-stats">${s.stats.map(([value,title])=>`<div><strong>${value}</strong><span>${title}</span></div>`).join('')}</div><div class="case-tools">${tags(s.pillars)}<button class="text-link copy-link" data-copy>Copy story link ${arrow}</button></div></section><section class="case-brief"><div class="wrap brief-grid"><span class="eyebrow">THE 30-SECOND BRIEF</span><p>${s.brief}</p></div></section><div class="wrap article-layout case-article-layout"><aside class="article-sidebar case-sidebar"><span class="eyebrow">INSIDE THE STORY</span><nav aria-label="On this page"><a href="${storyLink(s.id)}?section=context" data-scroll="context">01 The context</a><a href="${storyLink(s.id)}?section=turning-point" data-scroll="turning-point">02 The turning point</a><a href="${storyLink(s.id)}?section=actions" data-scroll="actions">03 The decisions</a><a href="${storyLink(s.id)}?section=outcome" data-scroll="outcome">04 Outcome & reflection</a></nav><div class="ownership-note"><span class="eyebrow">${s.category==='study'?'TEAM CASE STUDY':'CLEAR OWNERSHIP'}</span><p>${s.category==='win'?'Individual contribution and team execution are described separately.':'The focus is the decision process and what can be learned from it.'}</p></div></aside><article class="case-article"><section id="context" class="article-section"><span class="eyebrow">01 / THE CONTEXT</span><h2>What made this<br><em>deal different.</em></h2><p>${s.context}</p><div class="role-grid"><div><h3>${s.category==='win'?'My role':'The sales approach'}</h3><p>${s.role}</p></div><div><h3>The team’s contribution</h3><p>${s.team}</p></div></div></section><section id="turning-point" class="turning-point"><span class="eyebrow">02 / THE MOMENT THAT MATTERED</span><h2>${s.tension}</h2><p>${s.tensionText}</p></section><section id="actions" class="article-section"><span class="eyebrow">03 / THE DECISIONS</span><h2>How the work<br><em>moved forward.</em></h2><div class="numbered-moves">${s.decisions.map(([title,body],i)=>`<section><span>0${i+1}</span><div><h3>${title}</h3><p>${body}</p></div></section>`).join('')}</div></section><section id="outcome" class="article-section outcome-section"><span class="eyebrow">04 / OUTCOME & REFLECTION</span><h2>What happened.<br><em>What stays with me.</em></h2><p>${s.outcome}</p><div class="reflection-block"><span class="eyebrow">THE TAKEAWAY</span><p>${s.lesson}</p></div><p class="evidence-note">${s.note}</p></section><div class="case-next"><span class="eyebrow">NEXT STORY / ${next.name}</span><a href="${storyLink(next.id)}"><h3>${next.shortTitle}</h3>${arrow}</a></div></article></div>${contactSection()}`;
}
function aboutPage() {
  return `<section class="page-hero wrap about-hero">${label('ABOUT DAVE')}<h1>I like understanding<br>how a business<br><em>actually works.</em></h1><div class="about-hero-bottom"><span class="about-avatar" aria-hidden="true">d.a</span><div><h2>Dave Alexander</h2><p>Enterprise sales · Insurance technology · Operational SaaS</p></div></div></section><section class="wrap about-content"><div class="about-sidebar"><span class="eyebrow">THE SHORT VERSION</span><p>Curiosity in discovery.<br>Clarity in the business case.<br>Ownership through the close.</p><a class="text-link" href="${linkedin}" target="_blank" rel="noopener noreferrer">Find me on LinkedIn ${arrow}</a></div><div class="about-body"><p class="large-copy">I’m drawn to sales where understanding the customer’s operation is essential to earning the deal.</p><p>My experience spans insurance technology and operational SaaS: businesses with established workflows, multiple stakeholders, and a real cost to changing systems.</p><p>I enjoy the full cycle. Finding a relevant opening. Listening to the people doing the work. Building a case the executive team can defend. Then coordinating the commercial and technical work needed to get it done.</p><p>This portfolio is a view into that process. The wins show how I work through complexity; the losses show which assumptions deserve closer inspection.</p><div class="personal-note"><span class="eyebrow">AWAY FROM THE PIPELINE</span><h2>Aviation. History.<br><em>Whatever I’m learning next.</em></h2><p>Outside work, I enjoy family time, aviation, military history, and experimenting with practical uses for AI. The common thread is curiosity about how things work.</p></div><div class="about-links"><a class="button dark" href="mailto:${email}?subject=Resume%20request">Request my resume ${arrow}</a><a class="button outline" href="#/stories">Explore the work ${arrow}</a></div></div></section>${contactSection()}`;
}
function notFound() {return `<section class="wrap page-hero"><span class="eyebrow">PAGE NOT FOUND</span><h1>Let’s get back<br><em>to the work.</em></h1><p>This page isn’t part of the portfolio.</p><a class="button dark" href="#/">Return to the overview ${arrow}</a></section>`;}

function getRoute() {
  const hash = location.hash.startsWith('#/') ? location.hash.slice(1) : '/';
  const [path, query=''] = hash.split('?');
  return {path, parts:path.split('/').filter(Boolean), params:new URLSearchParams(query)};
}
function setPillar(index, focus = false) {
  activePillar = (index + pillars.length) % pillars.length;
  document.querySelectorAll('[data-pillar]').forEach((button,i)=>{
    button.classList.toggle('selected', i===activePillar);
    button.setAttribute('aria-selected',String(i===activePillar));
    button.tabIndex=i===activePillar?0:-1;
    if(focus&&i===activePillar) button.focus();
  });
  const panel=document.querySelector('#pillar-panel');
  if(panel){panel.setAttribute('aria-labelledby',`pillar-tab-${activePillar}`);panel.innerHTML=explorerPanel(activePillar);}
}
function filterStories(type, skill, updateURL = true) {
  const matching=stories.filter(s=>(type==='all'||s.category===type)&&(skill==='all'||s.pillars.includes(skill)||pillars.find(p=>p.id===skill)?.stories.includes(s.id)));
  document.querySelectorAll('[data-story]').forEach(row=>row.hidden=!matching.some(s=>s.id===row.dataset.story));
  document.querySelectorAll('[data-type]').forEach(button=>{button.classList.toggle('active',button.dataset.type===type);button.setAttribute('aria-pressed',String(button.dataset.type===type));});
  document.querySelector('#skill-filter').value=skill;
  document.querySelector('#result-count').textContent=`${matching.length} ${matching.length===1?'story':'stories'}${skill!=='all'?` · ${pillars.find(p=>p.id===skill).name}`:''}`;
  document.querySelector('.empty-state').hidden=matching.length>0;
  document.querySelector('#reset-filters').hidden=type==='all'&&skill==='all';
  if(updateURL){const params=new URLSearchParams();if(type!=='all')params.set('type',type);if(skill!=='all')params.set('pillar',skill);history.replaceState(null,'',`#/stories${params.size?'?'+params:''}`);}
}
function bindPage(route) {
  document.querySelectorAll('[data-pillar]').forEach(button=>{
    button.addEventListener('click',()=>setPillar(Number(button.dataset.pillar)));
    button.addEventListener('keydown',event=>{
      let next=Number(button.dataset.pillar);
      if(event.key==='ArrowDown'||event.key==='ArrowRight')next++;
      else if(event.key==='ArrowUp'||event.key==='ArrowLeft')next--;
      else if(event.key==='Home')next=0;
      else if(event.key==='End')next=6;
      else return;
      event.preventDefault();setPillar(next,true);
    });
  });
  if(document.querySelector('#skill-filter')){
    const type=['win','loss','study'].includes(route.params.get('type'))?route.params.get('type'):route.params.get('filter')==='loss'?'loss':'all';
    const skill=pillars.some(p=>p.id===route.params.get('pillar'))?route.params.get('pillar'):'all';
    filterStories(type,skill,false);
    document.querySelectorAll('[data-type]').forEach(button=>button.addEventListener('click',()=>filterStories(button.dataset.type,document.querySelector('#skill-filter').value)));
    document.querySelector('#skill-filter').addEventListener('change',event=>filterStories(document.querySelector('[data-type].active').dataset.type,event.target.value));
    ['reset-filters','empty-reset'].forEach(id=>document.getElementById(id).addEventListener('click',()=>filterStories('all','all')));
  }
  document.querySelectorAll('[data-scroll]').forEach(link=>link.addEventListener('click',event=>{
    if(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
    event.preventDefault();history.replaceState(null,'',link.getAttribute('href'));const target=document.getElementById(link.dataset.scroll);target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});target.tabIndex=-1;target.focus({preventScroll:true});
  }));
  document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{
    try{await navigator.clipboard.writeText(location.href);button.textContent='Link copied ✓';document.querySelector('#announcement').textContent='Story link copied to clipboard.';}
    catch{button.textContent='Copy the URL from your address bar';document.querySelector('#announcement').textContent='Copy the story URL from your browser address bar.';}
  }));
}
function closeMenu(){document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');document.querySelector('#main-nav').classList.remove('open');}
function render(focus=false) {
  const route=getRoute();const [section,slug]=route.parts;
  let html,title='Enterprise Sales';
  if(!section)html=home();
  else if(section==='pillars'&&!slug){html=approachPage();title='The approach';}
  else if(section==='pillars'){const p=pillars.find(p=>p.id===slug);html=p?pillarPage(p):notFound();title=p?p.name:'Page not found';}
  else if(section==='stories'&&!slug){html=libraryPage(route.params);title='Selected work';}
  else if(section==='stories'){const s=stories.find(s=>s.id===(storyAliases[slug]||slug));html=s?casePage(s):notFound();title=s?`${s.name} · Deal story`:'Page not found';}
  else if(section==='about'&&!slug){html=aboutPage();title='About Dave';}
  else{html=notFound();title='Page not found';}
  main.innerHTML=html;
  document.title=`Dave Alexander — ${title}`;
  document.querySelectorAll('[data-nav]').forEach(a=>{if(a.dataset.nav===section)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  closeMenu();bindPage(route);
  if(lastRoute!==route.path){window.scrollTo({top:0,behavior:'instant'});if(focus)main.focus({preventScroll:true});}
  const sectionTarget = section==='stories'&&slug&&['context','turning-point','actions','outcome'].includes(route.params.get('section')) ? document.getElementById(route.params.get('section')) : null;
  if(sectionTarget){sectionTarget.scrollIntoView({behavior:'instant'});sectionTarget.tabIndex=-1;if(focus)sectionTarget.focus({preventScroll:true});}
  lastRoute=route.path;
}
document.querySelector('.menu-toggle').addEventListener('click',()=>{const button=document.querySelector('.menu-toggle');const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));document.querySelector('#main-nav').classList.toggle('open',open);});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&document.querySelector('#main-nav').classList.contains('open')){closeMenu();document.querySelector('.menu-toggle').focus();}});
document.querySelector('.skip-link').addEventListener('click',event=>{event.preventDefault();main.focus();main.scrollIntoView();});
horizontalTabs.addEventListener('change',event=>document.querySelector('[role="tablist"]')?.setAttribute('aria-orientation',event.matches?'horizontal':'vertical'));
window.addEventListener('hashchange',()=>render(true));
render();
