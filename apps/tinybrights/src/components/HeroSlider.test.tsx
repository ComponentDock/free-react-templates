import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the first slide heading', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Where Kids Learn & Grow Together',
    )
  })

  it('renders a CTA button', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
  })

  it('renders pagination dots', () => {
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /go to slide/i })
    expect(dots).toHaveLength(2)
  })

  it('switches slide when pagination dot is clicked', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const secondDot = screen.getAllByRole('button', { name: /go to slide/i })[1]!
    await user.click(secondDot)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Fun Education for Bright Futures',
    )
  })
})
