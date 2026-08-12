import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the centered headline', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/A Luxury Stay/)
  })

  it('shows a full-bleed pool-resort background photo', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /pool resort/i })).toHaveAttribute(
      'src',
      expect.stringContaining('riviera-1'),
    )
  })
})
