import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the headline, subtext and a photo', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent?.replace(/\s+/g, ' ').trim()).toMatch(
      /Best cleaning services\s*helping customers\s*worldwide/i,
    )
    expect(screen.getByText(/With over 25 years of experience/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /professional cleaner/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('shows a navy Our Services pill linking to the services section', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: 'Our Services' })
    expect(cta).toHaveClass('btn-navy-pill')
    expect(cta).toHaveAttribute('href', '#services')
  })
})
