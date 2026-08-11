/* All copy/content for Lodge, extracted from the ColorLib "Hotel" live
   preview (https://preview.colorlib.com/theme/hotel/) on 2026-08-11
   (HTTP 200, "Hotel | Template"; css/style.css parsed for tokens). Text is
   kept close to the original kind of content; brand name replaced with
   "Lodge". The original demo's "themfeel" typo in the quote is fixed. */

export const siteName = 'Lodge'
export const skipLabel = 'Skip to main content'
export const documentTitle = 'Lodge — Hotel'

/* Header — absolute charcoal (#353535) bar over the hero (padding 38px 0 in
   the original): white serif wordmark left, centered nav (20px Open Sans,
   hover gold #AE9548) with a Facilities dropdown (white panel, 20px
   #242424 links), a location-pin address widget right, and a mobile
   hamburger menu. Becomes fixed with a shadow once the page is scrolled. */
export const navLabel = 'Main'
export const mobileNavLabel = 'Mobile'
export const menuOpenLabel = 'Open menu'
export const menuCloseLabel = 'Close menu'
export const facilitiesLabel = 'Facilities'
export const dropdownLabel = 'Facilities menu'
export const addressText = '1525 Boring Lane, Los Angeles, CA'
export const addressLabel = 'Hotel address'
export const stickyThreshold = 300

export interface NavItem {
  label: string
  href: string
  active?: boolean
  children?: readonly string[]
}

export const navItems: readonly NavItem[] = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  {
    label: 'Facilities',
    href: '#facilities',
    children: ['Junior Suit', 'Double Room', 'Senior Suit', 'Single Room'],
  },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

/* Hero slider — 938px full-width photo slider (3 slides, auto-advance) with
   the left-aligned white serif headline "We hope you'll enjoy your stay."
   and three amenity cards (photo + uppercase label + gold arrow) that also
   switch the active slide (reference: .hero-slider / .single-slider-nav). */
export const heroHeadline = "We hope you'll enjoy your stay."
export const heroSectionLabel = 'Featured rooms'
export const heroAutoplayMs = 6000
export const amenityCardLabel = (name: string) => `Show the ${name} slide`

export interface HeroSlide {
  seed: string
}

export const heroSlides: readonly HeroSlide[] = [
  { seed: 'lodge-hero-1' },
  { seed: 'lodge-hero-2' },
  { seed: 'lodge-hero-3' },
]

export interface Amenity {
  name: string
  seed: string
}

export const amenities: readonly Amenity[] = [
  { name: 'Pool', seed: 'lodge-amenity-1' },
  { name: 'Sauna', seed: 'lodge-amenity-2' },
  { name: 'Restaurant', seed: 'lodge-amenity-3' },
]

/* Rooms showcase — one .room-item (Junior Suite) beside the check-form:
   a 3-photo carousel with charcoal prev/next buttons (52x69, gold arrows),
   the room title + "From $252" price, and five feature icons (Smart TV,
   High Wi-fii, AC, Parking, Pool). */
export const roomsSectionLabel = 'Rooms and availability'
export const roomName = 'Junior Suite'
export const roomPriceFrom = 'From'
export const roomPrice = '$252'
export const roomPrevLabel = 'Previous room photo'
export const roomNextLabel = 'Next room photo'

export interface RoomFeature {
  label: string
}

export const roomFeatures: readonly RoomFeature[] = [
  { label: 'Smart TV' },
  { label: 'High Wi-fii' },
  { label: 'AC' },
  { label: 'Parking' },
  { label: 'Pool' },
]

export const roomPhotoSeeds: readonly string[] = ['lodge-room-1', 'lodge-room-2', 'lodge-room-3']

/* Check availability widget — gold-bordered panel (.check-form, 2px solid
   #AE9548) with From/To date fields, Adults/Children/Rooms quantity
   steppers, a room-type select, and the gold-bordered CHECK AVAILABILITY
   button (.primary-btn). */
export const checkTitle = 'Check Availability'
export const dateFromLabel = 'From'
export const dateToLabel = 'To'
export const datePlaceholder = 'dd / mm / yyyy'
export const quantityLabel = (name: string) => `${name} count`
export const quantityDecreaseLabel = (name: string) => `Decrease ${name}`
export const quantityIncreaseLabel = (name: string) => `Increase ${name}`
export const quantityNames: readonly string[] = ['Adults', 'Children', 'Rooms']
export const roomSelectLabel = 'Room'
export const roomOptions: readonly string[] = [
  'Eg. Master suite',
  'Double Room',
  'Single Room',
  'Special Room',
]
export const checkButtonLabel = 'CHECK AVAILABILITY'

/* Quote + about — centered serif quote banner above two columns of hotel
   copy (reference: .about-room / .about-para). */
export const aboutSectionLabel = 'About the hotel'
export const aboutQuote =
  'Customers may forget what you said but they will never forget how you made them feel.'
export const aboutParagraphs: readonly string[] = [
  'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  'It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
]

/* Facilities — #F7F7F7 section, 72px "Facilities" title, two alternating
   photo/text blocks each with a heading, copy and a gold "Visit Center"
   link button (reference: .facilities-section / .facilities-img /
   .facilities-text). */
export const facilitiesSectionLabel = 'Facilities'
export const facilitiesTitle = 'Facilities'
export const visitCenterLabel = 'Visit Center'

export interface Facility {
  title: string
  text: string
  seed: string
}

export const facilities: readonly Facility[] = [
  {
    title: 'Wellness Center',
    text: 'Unwind in our spa, sauna and pool area — a calm retreat after a day in the city, with massage rooms, steam baths and a heated indoor pool open every day.',
    seed: 'lodge-facility-1',
  },
  {
    title: 'Wellness Center',
    text: 'Our fitness floor and relaxation lounges are staffed around the clock, offering personal training, yoga classes and a juice bar with seasonal menus.',
    seed: 'lodge-facility-2',
  },
]

/* Guestbook — tabbed testimonials (author photo tabs, date, five gold
   stars, title, text, author name/role) — reference: .testimonial-section /
   .testimonial-item / .single-testimonial-item. */
export const guestbookSectionLabel = 'Guestbook'
export const guestbookTitle = 'Guestbook'
export const tablistLabel = 'Testimonial authors'
export const ratingLabel = 'Rated 5 out of 5 stars'

export interface Testimonial {
  date: string
  title: string
  text: string
  author: string
  role: string
  seed: string
}

export const testimonials: readonly Testimonial[] = [
  {
    date: '02/02/2019',
    title: 'Loved It',
    text: 'A wonderful stay from check-in to check-out. The room was spotless, the staff anticipated every need, and the breakfast by the pool was unforgettable.',
    author: 'John Doe',
    role: 'Berlin',
    seed: 'lodge-author-1',
  },
  {
    date: '02/02/2019',
    title: 'Great Stay',
    text: 'Beautiful hotel with a great location. The shuttle service made exploring the city effortless and the wellness center was the perfect way to end the day.',
    author: 'Jane Smith',
    role: 'New York',
    seed: 'lodge-author-2',
  },
  {
    date: '02/02/2019',
    title: 'Wonderful Hotel',
    text: 'The restaurant exceeded our expectations and the staff remembered our names from the first morning. We are already planning our next visit.',
    author: 'Mike Johnson',
    role: 'London',
    seed: 'lodge-author-3',
  },
]

/* Instagram strip — centered "Follow us on Instagram @yourhotel" heading
   (48px/500) on #F7F7F7 + four square thumbnails. */
export const instagramSectionLabel = 'Instagram feed'
export const instagramTitle = 'Follow us on Instagram @yourhotel'
export const instagramTileLabel = (index: number) => `Instagram image ${index + 1}`

export const instagramSeeds: readonly string[] = [
  'lodge-insta-1',
  'lodge-insta-2',
  'lodge-insta-3',
  'lodge-insta-4',
]

/* Footer — #353535 with a full-width room-photo strip (.footer-room-pic),
   the serif logo, four widget columns (Location / Reception / Shuttle
   Service / Restaurant; the phone numbers become tel: links) and a
   copyright bar with the repo-standard credit. */
export const footerPhotoLabel = (index: number) => `Footer room photo ${index + 1}`

export const footerPhotoSeeds: readonly string[] = [
  'lodge-footer-1',
  'lodge-footer-2',
  'lodge-footer-3',
  'lodge-footer-4',
]

export interface FooterColumn {
  title: string
  icon: 'map' | 'phone'
  text: string
  href?: string
}

export const footerPhone = '+1 (603)535-4592'
export const footerPhoneHref = 'tel:+16035354592'

export const footerColumns: readonly FooterColumn[] = [
  {
    title: 'Location',
    icon: 'map',
    text: '1525 Boring Lane, Los Angeles, CA',
  },
  { title: 'Reception', icon: 'phone', text: footerPhone, href: footerPhoneHref },
  { title: 'Shuttle Service', icon: 'phone', text: footerPhone, href: footerPhoneHref },
  { title: 'Restaurant', icon: 'phone', text: footerPhone, href: footerPhoneHref },
]

export const copyright = `© ${new Date().getFullYear()} ${siteName}. All rights reserved.`
export const footerCredit = 'Recreated from the ColorLib Hotel design'
