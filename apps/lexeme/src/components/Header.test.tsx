import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('stacks an eyebrow, one display title and one line of instructions', () => {
    render(<Header />)

    expect(screen.getByText('Everyday Spanish \u00b7 Deck 3')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Words worth knowing')
    expect(
      screen.getByText(
        'Hover a card, or tap it (Enter or Space on a keyboard), to see the meaning.',
      ),
    ).toBeInTheDocument()
  })

  it('keeps the head to a single h1 and no other heading', () => {
    render(<Header />)

    expect(screen.getAllByRole('heading')).toHaveLength(1)
  })

  it('clamps the title and caps the head at 620px, with nothing on the right', () => {
    render(<Header />)

    const head = screen.getByRole('banner')
    expect(head.className).toContain('max-w-[620px]')
    expect(head.className).toContain('mb-8')

    const title = screen.getByRole('heading', { level: 1 })
    expect(title.className).toContain('text-[clamp(30px,4vw,46px)]')
    expect(title.className).toContain('font-extrabold')
    expect(title.className).toContain('leading-[1.05]')
    expect(title.className).toContain('tracking-[-0.035em]')
  })

  it('inks the eyebrow violet and the sub-line muted', () => {
    render(<Header />)

    expect(screen.getByText('Everyday Spanish \u00b7 Deck 3').className).toContain('text-accent')
    expect(
      screen.getByText(
        'Hover a card, or tap it (Enter or Space on a keyboard), to see the meaning.',
      ).className,
    ).toContain('text-muted')
  })
})
