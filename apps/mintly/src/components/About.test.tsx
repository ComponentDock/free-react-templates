import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { stats } from '../data'

describe('About', () => {
  it('renders the heading, paragraphs, and clinic image', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', { name: 'A Clinic Built Around Your Comfort' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /clinic interior/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('renders the quick stats in mint accent', () => {
    render(<About />)

    for (const stat of stats) {
      expect(screen.getByText(stat.value)).toHaveClass('text-mint')
      expect(screen.getByText(stat.label)).toBeInTheDocument()
    }
  })

  it('renders the mint pill CTA button', () => {
    render(<About />)

    const button = screen.getByRole('button', { name: 'Learn More' })
    expect(button).toHaveClass('rounded-full')
    expect(button).toHaveClass('bg-mint')
  })
})
