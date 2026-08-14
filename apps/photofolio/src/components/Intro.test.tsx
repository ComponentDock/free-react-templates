import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the headline, paragraph and underlined CTA', () => {
    render(<Intro />)

    expect(
      screen.getByRole('heading', { name: /My name is Sam\. I.m a photographer/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(/freelance photographer based in New York/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Take a look @my portfolio' })).toHaveAttribute(
      'href',
      '#portfolio',
    )
  })

  it('renders three progress bars with fills and percentage tags', () => {
    render(<Intro />)

    for (const [label, value] of [
      ['Nature', '75%'],
      ['Passion', '100%'],
      ['Portraits', '90%'],
    ] as const) {
      expect(screen.getByText(label)).toBeInTheDocument()
      const tag = screen.getByText(value)
      expect(tag).toBeInTheDocument()
      expect(tag).toHaveClass('bg-ink')
    }

    const fills = screen.getAllByText(/%$/).map((tag) => tag.parentElement)
    expect(fills[0]).toHaveStyle({ width: '75%' })
    expect(fills[1]).toHaveStyle({ width: '100%' })
    expect(fills[2]).toHaveStyle({ width: '90%' })
  })
})
