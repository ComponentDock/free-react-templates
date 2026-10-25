import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProfileCard } from './ProfileCard'
import { ROSTER } from '../content'

/** The roster is a fixed four, so every index is present. */
const profileAt = (index: number) => ROSTER[index]!

const CARD_SHADOW = 'shadow-[0_1px_2px_rgba(28,25,23,0.04),0_12px_32px_-20px_rgba(28,25,23,0.25)]'

describe('ProfileCard', () => {
  it('renders the profile plate with the reference surface, radius and shadow', () => {
    const { container } = render(<ProfileCard profile={profileAt(0)} />)
    const article = container.querySelector('article')

    expect(article).toHaveClass('rounded-card', 'bg-white', 'p-2.5', 'border', 'border-line')
    expect(article?.className).toContain(CARD_SHADOW)
    expect(article).toHaveClass('hover:-translate-y-1')
    expect(article).toHaveClass('motion-reduce:transition-none')
  })

  it('renders the 5:5.4 media window with a face-forward crop', () => {
    const { container } = render(<ProfileCard profile={profileAt(0)} />)
    const media = container.querySelector('[class*="aspect-[5/5.4]"]')
    const photo = screen.getByAltText('Portrait of Ava Lindqvist')

    expect(media).toHaveClass('relative', 'overflow-hidden', 'rounded-media', 'bg-media')
    expect(photo).toHaveAttribute('src', 'https://picsum.photos/seed/nameplate-1/600/720')
    expect(photo).toHaveAttribute('width', '600')
    expect(photo).toHaveAttribute('height', '720')
    expect(photo).toHaveClass('object-cover', 'object-[center_25%]')
    expect(photo).toHaveClass('group-hover:scale-105')
  })

  it('floats the team tag inside the photograph, 12px from the left and bottom', () => {
    render(<ProfileCard profile={profileAt(1)} />)
    const tag = screen.getByText('Engineering')

    expect(tag).toHaveClass('absolute', 'left-3', 'bottom-3', 'rounded-full', 'bg-white/[0.92]')
    expect(tag).toHaveClass('text-xs', 'font-bold', 'tracking-[0.02em]', 'text-ink')
  })

  it('renders name, role and bio in the reference order and colours', () => {
    render(<ProfileCard profile={profileAt(2)} />)

    expect(screen.getByRole('heading', { level: 2, name: 'Sofia Marin' })).toHaveClass(
      'text-[19px]',
      'font-bold',
    )
    expect(screen.getByText('UX Researcher')).toHaveClass('text-sm', 'font-semibold', 'text-accent')
    expect(
      screen.getByText(
        'Plans interviews and usability tests, then turns what people say into clear product decisions.',
      ),
    ).toHaveClass('text-sm', 'text-muted')
  })

  it('separates the footer with the single dashed hairline on the page', () => {
    const { container } = render(<ProfileCard profile={profileAt(3)} />)
    const footer = container.querySelector('footer')

    expect(footer).toHaveClass(
      'border-t',
      'border-dashed',
      'border-line',
      'justify-between',
      'pt-3.5',
    )
    expect(screen.getByText('Since 2021')).toHaveClass(
      'text-[12.5px]',
      'font-medium',
      'text-muted',
      'whitespace-nowrap',
    )
  })

  it('renders three 36px icon discs per card, each named and guarded from double announcement', () => {
    const { container } = render(<ProfileCard profile={profileAt(0)} />)
    const list = screen.getByRole('list', { name: 'Ava Lindqvist online' })
    const discs = list.querySelectorAll('a')
    const glyphs = container.querySelectorAll('svg')

    expect(discs).toHaveLength(3)
    expect(glyphs).toHaveLength(3)
    discs.forEach((disc) => {
      expect(disc).toHaveClass('h-9', 'w-9', 'rounded-full', 'bg-chip', 'text-ink')
      expect(disc).toHaveClass('hover:bg-accent', 'hover:text-white', 'hover:-translate-y-0.5')
      expect(disc).toHaveClass('motion-reduce:transition-none')
    })
    glyphs.forEach((glyph) => expect(glyph).toHaveAttribute('aria-hidden', 'true'))
  })

  it('gives each person the reference second disc and a mail disc naming them', () => {
    render(<ProfileCard profile={profileAt(1)} />)

    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/daniel-okoro',
    )
    expect(screen.getByRole('link', { name: 'Code repositories' })).toHaveAttribute(
      'href',
      'https://github.com/daniel-okoro',
    )
    expect(screen.getByRole('link', { name: 'Email Daniel' })).toHaveAttribute(
      'href',
      'mailto:daniel@nameplate.example',
    )
  })

  it('uses a booking mailto for the calendar disc instead of a dead anchor', () => {
    render(<ProfileCard profile={profileAt(3)} />)

    const book = screen.getByRole('link', { name: 'Book a call' })

    expect(book).toHaveAttribute('href', 'mailto:marcus@nameplate.example?subject=Book%20a%20call')
    expect(book.getAttribute('href')).not.toBe('#')
  })
})
