import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the first slide by default', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Discover Your Perfect Stay')).toBeInTheDocument()
  })

  it('has CTA buttons on each slide', () => {
    render(<HeroSlider />)
    expect(screen.getAllByText('View Detail').length).toBe(4)
    expect(screen.getAllByText('Know More').length).toBe(4)
  })

  it('renders slide indicators', () => {
    render(<HeroSlider />)
    const indicators = screen.getAllByLabelText(/Go to slide/)
    expect(indicators).toHaveLength(4)
  })

  it('switches slide on indicator click', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByLabelText('Go to slide 2'))
    expect(screen.getByText('Experience World-Class Cuisine')).toBeInTheDocument()
  })
})
