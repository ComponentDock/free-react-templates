import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ARTICLES } from '../content'
import { CardMeta } from './CardMeta'

const [first] = ARTICLES

describe('CardMeta', () => {
  it('draws the hairline strip below the body', () => {
    const { container } = render(<CardMeta article={first!} />)
    const meta = container.firstElementChild!

    expect(meta.tagName).toBe('FOOTER')
    expect(meta).toHaveClass(
      'mt-[18px]',
      'flex',
      'items-center',
      'gap-3',
      'border-t',
      'border-line',
      'pt-4',
      'text-[13.5px]',
    )
  })

  it('hides the initials disc from assistive tech but paints it in the card hue', () => {
    render(<CardMeta article={first!} />)

    const avatar = screen.getByText('HN')
    expect(avatar).toHaveAttribute('aria-hidden', 'true')
    expect(avatar).toHaveClass(
      'grid',
      'h-[38px]',
      'w-[38px]',
      'flex-none',
      'place-items-center',
      'rounded-full',
      'bg-[var(--chip)]',
      'text-[13px]',
      'font-semibold',
      'text-white',
    )
  })

  it('stacks author over a machine-readable date in the flex-1 column', () => {
    render(<CardMeta article={first!} />)

    const author = screen.getByText('Hana Novak')
    expect(author).toHaveClass('font-semibold')

    const who = author.parentElement!
    expect(who).toHaveClass('flex', 'flex-1', 'flex-col', 'leading-[1.35]')

    const time = screen.getByText('18 Sep 2026')
    expect(time.tagName).toBe('TIME')
    expect(time).toHaveAttribute('datetime', '2026-09-18')
    expect(time.parentElement).toHaveClass('text-muted')
  })

  it('puts the read-time pill last, so its right edge is flush with the card', () => {
    const { container } = render(<CardMeta article={first!} />)
    const meta = container.firstElementChild!

    expect(meta.lastElementChild).toHaveTextContent('6 min read')
    expect(meta.children).toHaveLength(3)
  })

  it('keeps the un-padded day in the visible date', () => {
    render(<CardMeta article={ARTICLES[2]!} />)

    expect(screen.getByText('2 Sep 2026')).toHaveAttribute('datetime', '2026-09-02')
  })
})
