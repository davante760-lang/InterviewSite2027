import { pillars, stories, storyAliases, email, linkedin } from './content.js';

const arrow = '<span aria-hidden="true">↗</span>';
const main = document.querySelector('main');
const dialog = document.querySelector('#story-dialog');
const mobileNav = document.querySelector('#mobile-nav');
const menuButton = document.querySelector('.menu-toggle');
let dialogFromPage = false;
let returnFocus = null;
let pageScroll = 0;

function constellation() {
  const paths = ['20,100 110,150 200,90 260,180 160,240 110,150','20,100 35,260 160,240 215,340 125,420 35,260','40,510 125,420 260,490 330,400','200,90 350,45 410,150','1160,65 1270,120 1390,80 1340,250 1270,120 1190,275 1100,210','1390,80 1430,360 1340,250 1270,390 1370,480 1430,360','1190,275 1270,390 1150,480 1080,400','260,490 370,565 460,515','1040,535 1150,480 1230,580'];
  const points = new Set(paths.flatMap(path => path.split(' ')));
  return `<svg class="constellation" viewBox="0 0 1440 620" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g>${paths.map(p=>`<polyline points="${p}"/>`).join('')}${[...points].map(p=>{const[x,y]=p.split(',');return `<circle cx="${x}" cy="${y}" r="2"/>`;}).join('')}</g></svg>`;
}
function winCard(story) {
  return `<a class="deal-card" href="#/stories/${story.id}" data-story="${story.id}"><div class="card-top"><span class="badge win">${story.label}</span><span class="card-arrow" aria-hidden="true">↗</span></div><span class="industry">${story.industry}</span><h3>${story.name}</h3><p>${story.preview}</p><div class="deal-value"><strong>${story.metric}</strong><span>${story.metricLabel}</span></div><div class="card-bottom"><span>${story.scope}</span><span>Read story <span aria-hidden="true">→</span></span></div></a>`;
}
function storyRow(story) {
  return `<a class="story-row" href="#/stories/${story.id}" data-story="${story.id}"><div class="row-label"><span class="badge ${story.category}">${story.label}</span><span class="row-name">${story.name}</span></div><span class="row-preview">${story.preview}</span><span class="row-arrow" aria-hidden="true">↗</span></a>`;
}
main.innerHTML = `
  <section class="hero" id="top">
    ${constellation()}
    <div class="hero-glow" aria-hidden="true"></div>
    <div class="hero-content wrap">
      <p class="eyebrow">ENTERPRISE SALES · OPERATIONAL SAAS</p>
      <h1>Dave Alexander</h1>
      <p class="hero-tagline">From first conversation to close.</p>
      <p class="hero-copy">I build pipeline, bring buying teams together, and help customers make complex software decisions.</p>
      <div class="hero-actions"><a class="button primary" href="#deals">See the deals <span aria-hidden="true">↓</span></a><a class="button secondary" href="mailto:${email}">Get in touch ${arrow}</a></div>
    </div>
    <a class="scroll-cue" href="#experience" aria-label="Explore experience"><span aria-hidden="true">↓</span></a>
  </section>
  <section class="experience" id="experience" aria-labelledby="experience-title">
    <div class="wrap"><h2 id="experience-title" class="eyebrow">EXPERIENCE ACROSS OPERATIONAL SAAS & INSURANCE TECHNOLOGY</h2><div class="company-row">
      <div><img src="/images/samsara.png" alt="Samsara" width="150" height="40"><span>Operational SaaS</span></div>
      <div><img src="/images/applied.png" alt="Applied Systems" width="150" height="40"><span>Insurance technology</span></div>
      <div><img src="/images/ezlynx.png" alt="EZLynx" width="150" height="40"><span>Outbound & account sales</span></div>
    </div></div>
  </section>
  <section class="section wrap" id="deals">
    <div class="section-heading"><div><p class="eyebrow">THE WORK</p><h2>Selected deals.</h2></div><p>Wins, tradeoffs, and lessons.<br> Open a story for the short version.</p></div>
    <div class="deal-grid">${stories.filter(s=>s.category==='win').map(winCard).join('')}</div>
    <div class="more-stories">${stories.filter(s=>s.category!=='win').map(storyRow).join('')}</div>
  </section>
  <section class="approach section" id="how-i-sell"><div class="wrap">
    <div class="section-heading"><div><p class="eyebrow">THE APPROACH</p><h2>How I sell.</h2></div><p>Seven parts of the job.<br> Ownership all the way through.</p></div>
    <ol class="pillar-list">${pillars.map((p,i)=>`<li id="pillar-${p.id}"><span class="pillar-number" aria-hidden="true">0${i+1}</span><h3>${p.name}</h3><p>${p.line}</p></li>`).join('')}</ol>
  </div></section>
  <section class="section wrap about" id="about">
    <div class="about-photo"><img src="/images/family.jpg" alt="Dave Alexander with his family" width="1320" height="2229" loading="lazy"></div>
    <div class="about-copy"><p class="eyebrow">BEYOND THE PIPELINE</p><h2>A little about me.</h2><p>I like understanding how a business works and making a complicated purchase easier to navigate.</p><p>Outside work: family, aviation, military history, and experimenting with AI.</p><div class="contact-actions"><a class="button primary" href="mailto:${email}">Let’s talk ${arrow}</a><a class="text-link" href="${linkedin}" target="_blank" rel="noopener noreferrer">Connect on LinkedIn ${arrow}</a></div></div>
  </section>`;

function closeMenu() {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}
menuButton.addEventListener('click', () => {
  const open = mobileNav.hidden;
  mobileNav.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
document.querySelectorAll('header a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuButton.focus(); }
});
document.addEventListener('click', event => {
  if (!mobileNav.hidden && !event.target.closest('.site-header')) closeMenu();
});

function showStory(story) {
  const wasOpen = dialog.open;
  if (!wasOpen) pageScroll = window.scrollY;
  dialog.querySelector('.dialog-content').innerHTML = `
    <button class="close-dialog" aria-label="Close story">×</button>
    <div class="dialog-heading"><span class="badge ${story.category}">${story.label}</span><p class="eyebrow">${story.name} · ${story.industry}</p><h2 id="story-title" tabindex="-1">${story.headline}</h2></div>
    ${story.metric?`<div class="dialog-metric"><strong>${story.metric}</strong><span>${story.metricLabel}<br>${story.scope}</span></div>`:''}
    <div class="story-sections">${story.sections.map(([heading,text])=>`<section><h3>${heading}</h3><p>${text}</p></section>`).join('')}</div>
    <div class="takeaway"><h3>${story.category==='study'?'The takeaway':'My takeaway'}</h3><p>${story.takeaway}</p></div>
    <p class="story-note">${story.note}</p>
    <div class="dialog-footer"><button class="copy-link">Copy story link ${arrow}</button><button class="done-button">Back to the page <span aria-hidden="true">→</span></button></div>`;
  document.title = `${story.name} | Dave Alexander`;
  dialog.querySelector('.close-dialog').addEventListener('click', requestClose);
  dialog.querySelector('.done-button').addEventListener('click', requestClose);
  dialog.querySelector('.copy-link').addEventListener('click', async event => {
    const button = event.currentTarget;
    try {
      await navigator.clipboard.writeText(location.href);
      button.textContent = 'Link copied ✓';
      document.querySelector('#announcement').textContent = 'Story link copied.';
    } catch {
      button.textContent = 'Copy the address in your browser';
      document.querySelector('#announcement').textContent = 'Copy the story link from your browser address bar.';
    }
  });
  document.documentElement.classList.add('dialog-open');
  if (!wasOpen) dialog.showModal();
  dialog.scrollTop = 0;
  dialog.querySelector('#story-title').focus({ preventScroll: true });
}
function dismissStory() {
  if (!dialog.open) return;
  dialog.close();
  document.documentElement.classList.remove('dialog-open');
  document.title = 'Dave Alexander | Enterprise Sales';
  window.scrollTo({ top: pageScroll, behavior: 'instant' });
  if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
  dialogFromPage = false;
  returnFocus = null;
}
function requestClose() {
  if (dialogFromPage) history.back();
  else {
    dismissStory();
    history.replaceState(null, '', '#deals');
    document.querySelector('#deals').scrollIntoView({ behavior: 'instant' });
    const heading = document.querySelector('#deals h2');
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  }
}
dialog.addEventListener('cancel', event => { event.preventDefault(); requestClose(); });
dialog.addEventListener('click', event => { if (event.target === dialog) requestClose(); });
document.querySelectorAll('[data-story]').forEach(link => link.addEventListener('click', event => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  returnFocus = link;
  dialogFromPage = true;
}));
function syncRoute() {
  const hash = location.hash;
  const match = hash.match(/^#\/stories\/([^/?]+)/);
  if (match) {
    const id = storyAliases[match[1]] || match[1];
    const story = stories.find(s => s.id === id);
    if (story) { closeMenu(); showStory(story); return; }
  }
  const wasOpen = dialog.open;
  dismissStory();
  let target;
  if (hash.startsWith('#/pillars/')) target = document.getElementById(`pillar-${hash.split('/')[2].split('?')[0]}`) || document.querySelector('#how-i-sell');
  else if (hash === '#/pillars') target = document.querySelector('#how-i-sell');
  else if (hash.startsWith('#/stories')) target = document.querySelector('#deals');
  else if (hash === '#/about') target = document.querySelector('#about');
  else if (hash === '#/') target = document.querySelector('#top');
  else if (wasOpen && /^#[\w-]+$/.test(hash)) target = document.getElementById(hash.slice(1));
  if (target) target.scrollIntoView({ behavior: 'instant' });
}
window.addEventListener('hashchange', syncRoute);
syncRoute();
