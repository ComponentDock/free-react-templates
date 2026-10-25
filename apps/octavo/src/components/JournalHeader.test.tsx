import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { JournalHeader } from './JournalHeader'

describe('JournalHeader', () => {
  it('renders the h1 and the "All articles" link on one baseline row', () => {
    render(<JournalHeader />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('From the journal')
    expect(heading).toHaveClass(
      'font-serif',
      'text-[clamp(30px,4vw,44px)]',
      'font-semibold',
      'leading-[1.1]',
      'tracking-[-0.02em]',
    )

    const header = heading.parentElement!
    expect(header.tagName).toBe('HEADER')
    expect(header).toHaveClass(
      'flex',
      'flex-wrap',
      'items-baseline',
      'justify-between',
      'gap-3',
      'border-b-2',
      'border-ink',
      'mb-7',
    )
    expect(header.className).toContain('pb-[18px]')
  })

  it('links to the row itself and hides the arrow from assistive tech', () => {
    render(<JournalHeader />)

    const link = screen.getByRole('link', { name: 'All articles' })
    expect(link).toHaveAttribute('href', '#journal')
    expect(link).toHaveTextContent('All articles →')

    const arrow = link.querySelector('span')!
    expect(arrow).toHaveAttribute('aria-hidden', 'true')
    expect(arrow.textContent).toBe('→')
  })

  it('styles the link with the fixed blue focus ring and an offset underline on hover', () => {
    render(<JournalHeader />)

    const link = screen.getByRole('link', { name: 'All articles' })
    expect(link).toHaveClass(
      'text-[15px]',
      'font-semibold',
      'text-ink',
      'rounded-[4px]',
      'hover:underline',
      'hover:underline-offset-4',
      'focus-visible:outline-offset-4',
    )
    expect(link.className).toContain('focus-visible:outline-[2px_solid_var(--color-chip-blue)]')
  })
})
