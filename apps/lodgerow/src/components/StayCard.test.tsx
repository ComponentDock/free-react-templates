import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { StayCard } from './StayCard'
import { STAYS } from '../data/stays'

const first = STAYS[0]!
const second = STAYS[1]!
const third = STAYS[2]!

describe('StayCard', () => {
  it('renders the location, title, rating and review count in reading order', () => {
    const { container } = render(<StayCard stay={first} />)

    expect(screen.getByText('Hvar, Croatia')).toBeVisible()
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(
      'Cedar House with Pool and Sea View',
    )
    const body = container.querySelector('article')!
    const text = body.textContent ?? ''
    expect(text.indexOf('Hvar, Croatia')).toBeLessThan(
      text.indexOf('Cedar House with Pool and Sea View'),
    )
    expect(text.indexOf('Cedar House with Pool and Sea View')).toBeLessThan(text.indexOf('4.92'))
    expect(screen.getByText('(128 reviews)')).toBeVisible()
  })

  it('renders exactly one anchor per card and no button, form or input', () => {
    const { container } = render(<StayCard stay={first} />)

    expect(container.querySelectorAll('a')).toHaveLength(1)
    expect(screen.getByRole('link', { name: 'Cedar House with Pool and Sea View' })).toBeVisible()
    expect(container.querySelectorAll('button, form, input, select, textarea')).toHaveLength(0)
  })

  it('wraps the title link in an h2 and stretches it over the whole card', () => {
    const { container } = render(<StayCard stay={first} />)

    const heading = screen.getByRole('heading', { level: 2 })
    const link = heading.querySelector('a')!
    expect(link.className).toContain('after:absolute')
    expect(link.className).toContain('after:inset-0')
    expect(container.querySelector('article')!.className).toContain('relative')
  })

  it('renders the CTA as a decorative span outside the tab order', () => {
    const { container } = render(<StayCard stay={first} />)

    const cta = screen.getByText('View stay')
    expect(cta.tagName).toBe('SPAN')
    expect(cta).toHaveAttribute('aria-hidden', 'true')
    expect(container.querySelector('article')!.querySelectorAll('a, button')).toHaveLength(1)
  })

  it('renders three amenity chips in one labelled list with 16px glyphs', () => {
    render(<StayCard stay={first} />)

    const list = screen.getByRole('list', { name: 'Amenities' })
    const chips = within(list).getAllByRole('listitem')
    expect(chips.map((chip) => chip.textContent)).toEqual([
      'Private pool',
      'Fast wifi',
      '3 bedrooms',
    ])
    for (const chip of chips) {
      const svg = chip.querySelector('svg')!
      expect(svg).toHaveAttribute('width', '16')
      expect(svg).toHaveAttribute('stroke-width', '1.8')
      expect(svg).toHaveAttribute('aria-hidden', 'true')
    }
  })

  it('draws the location pin at 16px with a 2px stroke and the star filled', () => {
    const { container } = render(<StayCard stay={first} />)

    const place = container.querySelector('p')!
    const pin = place.querySelector('svg')!
    expect(pin).toHaveAttribute('width', '16')
    expect(pin).toHaveAttribute('fill', 'none')
    expect(pin).toHaveAttribute('stroke-width', '2')

    const rating = screen.getByText('4.92').closest('p')!
    const star = rating.querySelector('svg')!
    expect(star).toHaveAttribute('width', '16')
    expect(star).toHaveAttribute('fill', 'currentColor')
    expect(star.getAttribute('class')).toContain('text-ink')
  })

  it('renders the price block with the rate, the word night and the total copy', () => {
    const { container } = render(<StayCard stay={first} />)

    const price = container.querySelector('p.text-muted')!
    expect(price.querySelector('strong')!.textContent).toBe('\u20ac214')
    expect(price.textContent).toContain('night')
    expect(price.querySelector('span')!.textContent).toBe('\u20ac1,180 total for 5 nights')
    expect(price.querySelector('del')).toBeNull()
  })

  it('shows the favourite badge as a white pill on the photo', () => {
    render(<StayCard stay={first} />)

    const badge = screen.getByText('Guest favourite')
    expect(badge.tagName).toBe('SPAN')
    expect(badge.className).toContain('bg-white')
    expect(badge.className).toContain('text-ink')
    expect(badge.className).toContain('absolute')
  })

  it('renders no badge element at all when the listing has none', () => {
    const { container } = render(<StayCard stay={second} />)

    expect(screen.queryByText('Guest favourite')).toBeNull()
    expect(screen.queryByText('15% off this week')).toBeNull()
    const media = container.querySelector('div.bg-media-ground')!
    expect(media.querySelectorAll('span')).toHaveLength(0)
    expect(media.querySelectorAll('img')).toHaveLength(1)
  })

  it('renders the deal badge in rose with white ink', () => {
    render(<StayCard stay={third} />)

    const badge = screen.getByText('15% off this week')
    expect(badge.className).toContain('bg-deal')
    expect(badge.className).toContain('text-white')
  })

  it('strikes the original total inline on the discounted listing only', () => {
    const { container } = render(<StayCard stay={third} />)

    const total = container.querySelector('p.text-muted span')!
    const del = total.querySelector('del')!
    expect(del.textContent).toBe('\u20ac990')
    expect(total.textContent).toBe('was \u20ac990 \u20ac840 total for 5 nights')
    expect(container.querySelector('.sr-only')!.textContent).toBe('was ')
  })

  it('renders the totals as copy, never rate times nights', () => {
    const { container } = render(<StayCard stay={first} />)

    expect(container.textContent).toContain('\u20ac1,180')
    expect(container.textContent).not.toContain('\u20ac1,070')
  })

  it('loads every photo lazily with a scene description as its alt', () => {
    const { container } = render(<StayCard stay={first} />)

    const img = container.querySelector('img')!
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/lodgerow-1/700/560')
    expect(img.getAttribute('alt')).toBe('Timber lodge with a pool and sun loungers at dusk')
    expect(img).toHaveAttribute('loading', 'lazy')
    expect(img).toHaveAttribute('decoding', 'async')
    expect(img.className).toContain('object-cover')
  })

  it('declares the card a size container and a 5/7 split that stacks at 640', () => {
    const { container } = render(<StayCard stay={first} />)

    const card = container.querySelector('article')!
    expect(card.className).toContain('@container')
    expect(card.className).toContain('grid-cols-[minmax(0,5fr)_minmax(0,7fr)]')
    // inclusive at 640: the reference stacks AT 640 and splits at 641
    expect(card.className).toContain('[@media(width<=640px)]:grid-cols-1')
    expect(card.className).toContain('rounded-card')
    expect(card.className).toContain('border-card-line')
  })

  it('shrinks the body padding from the card container, not the viewport', () => {
    const { container } = render(<StayCard stay={first} />)

    const body = container.querySelector('article > div:nth-of-type(2)')!
    expect(body.className).toContain('px-[26px]')
    expect(body.className).toContain('[@container(width<=600px)]:px-[18px]')
    expect(body.className).toContain('[@container(width<=600px)]:pb-[20px]')
    expect(body.className).not.toContain('media(width<=')
  })

  it('removes the zoom and the transitions under reduced motion', () => {
    const { container } = render(<StayCard stay={first} />)

    const card = container.querySelector('article')!
    const img = container.querySelector('img')!
    const cta = screen.getByText('View stay')
    expect(card.className).toContain('motion-reduce:transition-none')
    expect(img.className).toContain('motion-reduce:transition-none')
    expect(img.className).toContain('motion-reduce:group-hover:scale-100')
    expect(cta.className).toContain('motion-reduce:transition-none')
  })
})
