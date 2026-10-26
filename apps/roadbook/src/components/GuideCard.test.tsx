import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import type { Guide } from '../data/guides'
import { GuideCard } from './GuideCard'

const guide: Guide = {
  id: '1',
  tag: 'Hiking',
  place: 'Dolomites, Italy',
  title: 'Lakes and larches',
  blurb: 'Five day hikes between mountain huts, timed for the golden larch weeks in mid October.',
  facts: ['5 routes', '6 min read'],
  image: 'https://picsum.photos/seed/roadbook-1/560/720',
  alt: 'Turquoise alpine lake with a wooden boat below steep mountains',
}

describe('GuideCard', () => {
  it('renders the pill, the destination, the title, the blurb and both chips', () => {
    render(<GuideCard guide={guide} />)

    expect(screen.getByText('Hiking')).toBeInTheDocument()
    expect(screen.getByText('Dolomites, Italy')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Lakes and larches' })).toBeInTheDocument()
    expect(screen.getByText(guide.blurb)).toBeInTheDocument()
    expect(screen.getByText('5 routes')).toBeInTheDocument()
    expect(screen.getByText('6 min read')).toBeInTheDocument()
  })

  it('is one card with exactly one link, and the link text is the title alone', () => {
    render(<GuideCard guide={guide} />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(1)
    expect(links[0]).toHaveTextContent('Lakes and larches')
    expect(links[0]).toHaveAttribute('href', '#')
    expect(links[0]!.querySelectorAll('img, span')).toHaveLength(0)
  })

  it('stacks the photo and the scrim behind the copy inside their own context', () => {
    const { container } = render(<GuideCard guide={guide} />)

    const article = container.querySelector('article')!
    expect(article.className).toContain('[isolation:isolate]')
    expect(article.className).toContain('min-h-[440px]')
    expect(article.className).toContain('items-end')
    expect(article.className).toContain('rounded-[22px]')

    const image = screen.getByRole('img')
    expect(image.className).toContain('-z-20')
    expect(image.className).toContain('object-cover')
    expect(image.parentElement!.querySelector('[aria-hidden="true"]')!.className).toContain('-z-10')
  })

  it('keeps the four-stop scrim and adds the hover wash instead of replacing it', () => {
    const { container } = render(<GuideCard guide={guide} />)

    const scrim = container.querySelector('[aria-hidden="true"]')!
    expect(scrim.className).toContain('linear-gradient')
    expect(scrim.className).toContain('rgba(0,0,0,.55)_55%')
    expect(scrim.className).toContain('rgba(0,0,0,.92)_100%')
    expect(scrim.className).toContain('group-hover:bg-black/25')
  })

  it('loads the photograph lazily with a scene description and its source size', () => {
    render(<GuideCard guide={guide} />)

    const image = screen.getByRole('img', { name: guide.alt })
    expect(image).toHaveAttribute('loading', 'lazy')
    expect(image).toHaveAttribute('decoding', 'async')
    expect(image).toHaveAttribute('width', '560')
    expect(image).toHaveAttribute('height', '720')
    expect(image.getAttribute('fetchpriority')).toBeNull()
  })

  it('zooms the photograph and darkens the scrim on hover or focus', () => {
    render(<GuideCard guide={guide} />)

    const image = screen.getByRole('img')
    expect(image.className).toContain('group-hover:[transform:scale(1.07)]')
    expect(image.className).toContain('group-focus-within:[transform:scale(1.07)]')
    expect(image.className).toContain('duration-[800ms]')
  })

  it('keeps the reveal panel in the DOM, collapsed to 0fr, so the card cannot grow', () => {
    const { container } = render(<GuideCard guide={guide} />)

    const panel = container.querySelector('.guide-card__more')!
    expect(panel.className).toContain('grid-rows-[0fr]')
    expect(panel.className).toContain('opacity-0')
    expect(panel.className).toContain('group-hover:grid-rows-[1fr]')
    expect(panel.className).toContain('group-focus-within:opacity-100')

    const inner = panel.firstElementChild as HTMLElement
    expect(inner.className).toContain('min-h-0')
    expect(inner.className).toContain('overflow-hidden')
  })

  it('styles the chips at 12.5px on lime with lime-black ink', () => {
    render(<GuideCard guide={guide} />)

    const chip = screen.getByText('5 routes')
    expect(chip.className).toContain('bg-accent')
    expect(chip.className).toContain('text-accent-ink')
    expect(chip.className).toContain('text-[12.5px]')
    expect(chip.className).toContain('rounded-full')
  })

  it('draws the reveal from a stretched link overlay, not from extra controls', () => {
    const { container } = render(<GuideCard guide={guide} />)

    expect(screen.getByRole('link').className).toContain('guide-card__link')
    expect(container.querySelectorAll('button, form, input')).toHaveLength(0)
  })
})
