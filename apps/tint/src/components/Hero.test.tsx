import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Interior Design Conference/i,
    )
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Learn more about this/i })).toHaveAttribute(
      'href',
      '#about',
    )
  })

  it('has a link with the arrow icon', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /Learn more about this/i })
    expect(cta.querySelector('svg')).toBeInTheDocument()
  })
})
