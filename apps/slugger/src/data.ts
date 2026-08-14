export const countdownTarget = '2027-06-07T18:00:00'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Games', href: '#games' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export const teams = {
  home: 'Sluggers',
  away: 'Jacksonville',
}

export const heroCopy =
  'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country where roasted parts of sentences fly into your mouth.'

export const league = {
  name: 'Baseball Champions League',
  round: 'Semi-Final',
}

export const latestResult = {
  home: { name: 'Sluggers', score: 12 },
  away: { name: 'Mighty Falcons', score: 8 },
}

export const scheduleGames = [
  { home: 'Sluggers', away: 'Jacksonville', venue: 'Home @ Arena', date: 'June 7, 2018' },
  { home: 'Sluggers', away: 'Mighty Falcons', venue: 'Home @ Arena', date: 'June 14, 2018' },
  { home: 'Sluggers', away: 'Green Bay Rays', venue: 'Home @ Arena', date: 'June 21, 2018' },
  { home: 'Sluggers', away: 'Denver Diggers', venue: 'Home @ Arena', date: 'June 28, 2018' },
  { home: 'Sluggers', away: 'Texas Twisters', venue: 'Home @ Arena', date: 'July 5, 2018' },
  { home: 'Sluggers', away: 'Austin Aces', venue: 'Home @ Arena', date: 'July 12, 2018' },
]

export const nextMatchGames = [
  { home: 'Sluggers', away: 'Jacksonville', venue: 'Home @ Arena', date: 'June 7, 2018' },
  { home: 'Sluggers', away: 'Jacksonville', venue: 'Home @ Arena', date: 'June 14, 2018' },
  { home: 'Sluggers', away: 'Jacksonville', venue: 'Home @ Arena', date: 'June 21, 2018' },
  { home: 'Sluggers', away: 'Jacksonville', venue: 'Home @ Arena', date: 'June 28, 2018' },
]

export const squadPlayers = [
  { name: 'David Scott', position: 'Catcher' },
  { name: 'James Carter', position: 'Tight End' },
  { name: 'Michael Reed', position: 'Pitcher' },
  { name: 'Daniel Ortiz', position: 'First Baseman' },
  { name: 'Chris Nolan', position: 'Second Baseman' },
  { name: 'Ryan Bennett', position: 'Third Baseman' },
  { name: 'Kevin Foster', position: 'Right Fielder' },
  { name: 'Tyler Brooks', position: 'Center Fielder' },
  { name: 'Marcus Lee', position: 'Left Fielder' },
]

export const squadIntro =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

export type ServiceIcon = 'target' | 'dumbbell' | 'shield' | 'swords'

export interface Service {
  title: string
  icon: ServiceIcon
  text: string
}

export const services: Service[] = [
  {
    title: 'Baseball Training',
    icon: 'target',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia, there live the blind texts.',
  },
  {
    title: 'Softball Training',
    icon: 'dumbbell',
    text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    title: 'Basic Defense',
    icon: 'shield',
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    title: 'Basic Tactics',
    icon: 'swords',
    text: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
]

export const testimonials = [
  {
    name: 'Jason Smith',
    role: 'Viewer',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
  },
  {
    name: 'Emily Davis',
    role: 'Viewer',
    quote:
      'The games are electric — every inning keeps you on the edge of your seat. Best club in the league, hands down.',
  },
  {
    name: 'Carlos Mendez',
    role: 'Viewer',
    quote:
      'I have been following the Sluggers since day one. The match-day experience is simply unbeatable.',
  },
  {
    name: 'Sarah Kim',
    role: 'Viewer',
    quote:
      'A fantastic family day out. Great atmosphere, great seats, and the countdown to the final is thrilling.',
  },
  {
    name: 'Andre Wilson',
    role: 'Viewer',
    quote:
      'From the training camps to the semi-final, everything about this club screams professionalism.',
  },
]

export const newsPosts = [
  {
    day: '29',
    month: 'May',
    year: '2019',
    title: 'Why Lead Generation is Key for Business Growth',
    snippet:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
  {
    day: '12',
    month: 'Jun',
    year: '2019',
    title: '5 Drills to Improve Your Batting Average',
    snippet:
      'One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
  },
  {
    day: '18',
    month: 'Jun',
    year: '2019',
    title: 'Inside the Sluggers Coaching Staff',
    snippet:
      'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks.',
  },
  {
    day: '25',
    month: 'Jun',
    year: '2019',
    title: 'Season Ticket Packages Now Available',
    snippet:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
]

export const stats = [
  { value: 458, suffix: '+', label: 'Game Played' },
  { value: 42, suffix: '+', label: 'Coaches' },
  { value: 87, suffix: '+', label: 'Trophies' },
  { value: 5200, suffix: '+', label: 'Members' },
]

export const subscribeCopy =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

export const aboutParagraphs = [
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
  'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave.',
]

export const footerAbout =
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'

export const footerColumns = [
  {
    title: 'Services',
    links: ['Senior Team', 'For Kids', 'Reviews', 'FAQs'],
  },
  {
    title: 'About Us',
    links: ['Our Story', 'Meet the team', 'Coach'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Press', 'Contact', 'Careers'],
  },
]

export const contact = {
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+2 392 3929 210',
  phoneHref: 'tel:+23923929210',
  email: 'info@yourdomain.com',
}
