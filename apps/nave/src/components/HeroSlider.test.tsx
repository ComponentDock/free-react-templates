import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the first slide heading', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Arise, Shine')).toBeInTheDocument()
  })

  it('renders a CTA button', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Watch Now')).toBeInTheDocument()
  })

  it('navigates to second slide on dot click', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const dot = screen.getByRole('button', { name: /go to slide 2/i })
    await user.click(dot)
    expect(screen.getByText('Explore Our Weekend Services')).toBeInTheDocument()
    expect(screen.getByText('Explore Now')).toBeInTheDocument()
  })

  it('navigates back to first slide', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const dot2 = screen.getByRole('button', { name: /go to slide 2/i })
    await user.click(dot2)
    const dot1 = screen.getByRole('button', { name: /go to slide 1/i })
    await user.click(dot1)
    expect(screen.getByText('Arise, Shine')).toBeInTheDocument()
  })
})
