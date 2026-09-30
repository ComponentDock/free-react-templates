export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Club', href: '#club' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Results', href: '#results' },
] as const

export const sportDropdown = {
  label: 'Sport',
  items: [
    { label: 'Tennis', href: '#popular' },
    { label: 'Football', href: '#feed' },
  ],
} as const

export const pagesDropdown = {
  label: 'Pages',
  items: [
    { label: 'Blog', href: '#latest' },
    { label: 'Blog Details', href: '#latest' },
  ],
} as const

export const contactLink = { label: 'Contact Us', href: '#contact' }

export const hero = {
  date: '30 September 2019 / 9:00 GMT+0000',
  headline: 'Northgate VS Rivermill in London',
  cta: 'More Details',
  image: 'https://picsum.photos/seed/pitchside-hero/1920/1080',
} as const

export const trending = [
  'England edge past Argentina in a five-goal thriller',
  'Transfer window: the deals that could still happen',
  'Underdogs Cambodia stun the favourites in qualifiers',
  'Tennis majors: the names to watch this season',
  'World Cup venue inspection tour begins in London',
] as const

export const nextMatchRows = [
  {
    home: 'Cambodia',
    away: 'Qatar',
    homeFlag: 'https://picsum.photos/seed/pitchside-flag-1/50/30',
    awayFlag: 'https://picsum.photos/seed/pitchside-flag-2/50/30',
    label: 'Portugal vs France',
    date: '15 September 2019',
  },
  {
    home: 'Myanmar',
    away: 'Japan',
    homeFlag: 'https://picsum.photos/seed/pitchside-flag-3/50/30',
    awayFlag: 'https://picsum.photos/seed/pitchside-flag-4/50/30',
    label: 'Myanmar vs Japan',
    date: '16 September 2019',
  },
  {
    home: 'Argentina',
    away: 'France',
    homeFlag: 'https://picsum.photos/seed/pitchside-flag-5/50/30',
    awayFlag: 'https://picsum.photos/seed/pitchside-flag-6/50/30',
    label: 'Argentina vs France',
    date: '17 September 2019',
  },
] as const

export const recentResultsRows = [
  {
    home: 'Cambodia',
    away: 'Qatar',
    homeFlag: 'https://picsum.photos/seed/pitchside-flag-7/50/30',
    awayFlag: 'https://picsum.photos/seed/pitchside-flag-8/50/30',
    label: 'Cambodia vs Qatar',
    score: '1 : 2',
    date: '10 September 2019',
  },
  {
    home: 'Germany',
    away: 'Brazil',
    homeFlag: 'https://picsum.photos/seed/pitchside-flag-9/50/30',
    awayFlag: 'https://picsum.photos/seed/pitchside-flag-10/50/30',
    label: 'Germany vs Brazil',
    score: '3 : 3',
    date: '11 September 2019',
  },
  {
    home: 'England',
    away: 'Spain',
    homeFlag: 'https://picsum.photos/seed/pitchside-flag-11/50/30',
    awayFlag: 'https://picsum.photos/seed/pitchside-flag-12/50/30',
    label: 'England vs Spain',
    score: '2 : 0',
    date: '12 September 2019',
  },
] as const

export const soccerFeed = [
  {
    title: 'Counting Chickens Before the Final Whistle',
    tag: 'Sport',
    author: 'John Doe',
    date: 'Sept 28, 2019',
    image: 'https://picsum.photos/seed/pitchside-feed-1/600/810',
  },
  {
    title: 'Five Rising Stars of the Qualifiers',
    tag: 'Sport',
    author: 'Mellissa Allison',
    date: 'Sept 27, 2019',
    image: 'https://picsum.photos/seed/pitchside-feed-2/600/810',
  },
  {
    title: 'Inside the Camp: A Week in Pictures',
    tag: 'Sport',
    author: 'John Doe',
    date: 'Sept 26, 2019',
    image: 'https://picsum.photos/seed/pitchside-feed-3/600/810',
  },
  {
    title: 'The Tactics That Turned the Tie',
    tag: 'Sport',
    author: 'Clare Thompson',
    date: 'Sept 25, 2019',
    image: 'https://picsum.photos/seed/pitchside-feed-4/600/810',
  },
] as const

export const filterCategories = ['All', 'Football', 'Tennis'] as const

export const latestNews = [
  {
    title: 'Five Hard Lessons the Season Has Taught Us',
    tag: 'Football',
    author: 'John Doe',
    date: 'Sept 28, 2019',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/seed/pitchside-news-1/480/360',
  },
  {
    title: 'Inside the Academy: Where Stars Are Made',
    tag: 'Football',
    author: 'Mellissa Allison',
    date: 'Sept 27, 2019',
    excerpt:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    image: 'https://picsum.photos/seed/pitchside-news-2/480/360',
  },
  {
    title: 'Tennis Courts Find a New Generation',
    tag: 'Tennis',
    author: 'Clare Thompson',
    date: 'Sept 26, 2019',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    image: 'https://picsum.photos/seed/pitchside-news-3/480/360',
  },
  {
    title: 'The Comeback Nobody Saw Coming',
    tag: 'Football',
    author: 'John Doe',
    date: 'Sept 25, 2019',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    image: 'https://picsum.photos/seed/pitchside-news-4/480/360',
  },
  {
    title: 'Summer Fixtures: What to Watch',
    tag: 'Tennis',
    author: 'Mellissa Allison',
    date: 'Sept 24, 2019',
    excerpt:
      'The tour moves on to the coast next week, with grounds open to the public for the first time.',
    image: 'https://picsum.photos/seed/pitchside-news-5/480/360',
  },
] as const

export const ranking = [
  {
    pos: 1,
    team: 'Australia',
    flag: 'https://picsum.photos/seed/pitchside-flag-13/50/30',
    p: 6,
    w: 5,
    l: 1,
    pts: 15,
  },
  {
    pos: 2,
    team: 'Qatar',
    flag: 'https://picsum.photos/seed/pitchside-flag-14/50/30',
    p: 6,
    w: 4,
    l: 2,
    pts: 13,
  },
  {
    pos: 3,
    team: 'Cambodia',
    flag: 'https://picsum.photos/seed/pitchside-flag-15/50/30',
    p: 6,
    w: 4,
    l: 2,
    pts: 12,
  },
  {
    pos: 4,
    team: 'Myanmar',
    flag: 'https://picsum.photos/seed/pitchside-flag-16/50/30',
    p: 6,
    w: 3,
    l: 3,
    pts: 10,
  },
  {
    pos: 5,
    team: 'Japan',
    flag: 'https://picsum.photos/seed/pitchside-flag-17/50/30',
    p: 6,
    w: 2,
    l: 4,
    pts: 8,
  },
  {
    pos: 6,
    team: 'Argentina',
    flag: 'https://picsum.photos/seed/pitchside-flag-18/50/30',
    p: 6,
    w: 1,
    l: 5,
    pts: 5,
  },
] as const

export const videos = [
  {
    title: 'World Cup Highlights: Round One',
    duration: '10:30',
    thumb: 'https://picsum.photos/seed/pitchside-video-1/640/400',
  },
  {
    title: 'Training Ground: Inside the Session',
    duration: '08:12',
    thumb: 'https://picsum.photos/seed/pitchside-video-2/640/400',
  },
  {
    title: 'Fans React: The Winning Goal',
    duration: '12:45',
    thumb: 'https://picsum.photos/seed/pitchside-video-3/640/400',
  },
  {
    title: 'Tennis Finals: Full Replay',
    duration: '15:20',
    thumb: 'https://picsum.photos/seed/pitchside-video-4/640/400',
  },
  {
    title: 'Road to London: Episode 4',
    duration: '06:58',
    thumb: 'https://picsum.photos/seed/pitchside-video-5/640/400',
  },
] as const

export const popularPosts = [
  {
    title: 'England reach the last 16 after a hard-fought win',
    tag: 'Football',
    author: 'John Doe',
    date: 'Sept 28, 2019',
    image: 'https://picsum.photos/seed/pitchside-pop-1/640/400',
  },
  {
    title: 'Tennis: the serve that changed everything',
    tag: 'Tennis',
    author: 'Clare Thompson',
    date: 'Sept 27, 2019',
    image: 'https://picsum.photos/seed/pitchside-pop-2/640/400',
  },
  {
    title: 'Underdogs write a new chapter in the qualifiers',
    tag: 'Football',
    author: 'Mellissa Allison',
    date: 'Sept 26, 2019',
    image: 'https://picsum.photos/seed/pitchside-pop-3/640/400',
  },
  {
    title: 'Grand Slam season preview: contenders and dark horses',
    tag: 'Tennis',
    author: 'Clare Thompson',
    date: 'Sept 25, 2019',
    image: 'https://picsum.photos/seed/pitchside-pop-4/640/400',
  },
  {
    title: 'Weekend round-up: results from around the leagues',
    tag: 'Sport',
    author: 'John Doe',
    date: 'Sept 24, 2019',
    image: 'https://picsum.photos/seed/pitchside-pop-5/640/400',
  },
] as const

export const followLinks = [
  { label: 'Facebook', name: 'facebook', count: '1.2M', bg: '#506eaa' },
  { label: 'Twitter', name: 'twitter', count: '860K', bg: '#55acee' },
  { label: 'Google', name: 'google', count: '540K', bg: '#dd4b39' },
] as const

export const vote = {
  question: 'In your opinion, which country will win this year',
  options: ['Germany', 'Brazil', 'Myanmar', 'Argentina'],
  image: 'https://picsum.photos/seed/pitchside-vote/600/400',
} as const

export const footer = {
  description:
    'Pitchside brings you fixtures, results, news and videos from around the world of football — all in one place.',
  topClub: ['World Cup', 'Champions League', 'Copa League', 'Nations Cup', 'Youth Cup'],
  recentNews: [
    {
      title: 'England win shows they have the spark to go far at the World Cup',
      date: 'Sept 28, 2019',
    },
    { title: 'Cambodia stun the favourites with a late equaliser', date: 'Sept 27, 2019' },
    { title: 'Transfer roundup: who is signing where this week', date: 'Sept 26, 2019' },
  ],
  image: 'https://picsum.photos/seed/pitchside-footer/1600/600',
} as const

export const footerSocials = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'Youtube', name: 'youtube' },
  { label: 'Linkedin', name: 'linkedin' },
] as const
