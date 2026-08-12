import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('shows the heading, subtitle, and three feature cards', () => {
    render(<WhyChooseUs />)

    expect(screen.getByRole('heading', { level: 2, name: /Why Choose us\?/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Server Protection' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'CloudFlare Integration' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: '30 Day Money-back' })).toBeInTheDocument()
  })

  it('describes each feature', () => {
    render(<WhyChooseUs />)
    expect(screen.getAllByText(/Mauris velit arcu/)).toHaveLength(3)
  })
})
