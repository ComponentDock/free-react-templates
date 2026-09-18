import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the initial slide heading and CTA', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('A new World is coming')
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument()
  })

  it('navigates to next slide on right arrow click', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Invest in the future')
  })

  it('navigates to previous slide on left arrow click', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: /previous slide/i }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Blockchain for everyone')
  })

  it('wraps around from last to first on next', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    // Go to last slide
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Blockchain for everyone')
    // Click next again — should wrap to first
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('A new World is coming')
  })

  it('wraps around from first to last on prev', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    // At first slide, click prev — should wrap to last
    await user.click(screen.getByRole('button', { name: /previous slide/i }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Blockchain for everyone')
    // Click prev again — should go to second
    await user.click(screen.getByRole('button', { name: /previous slide/i }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Invest in the future')
  })

  it('navigates to a specific slide via dot', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: /go to slide 3/i }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Blockchain for everyone')
  })

  it('displays hero background image', () => {
    render(<HeroSlider />)
    const bg = document.querySelector('img[src*="vestly-hero"]')
    expect(bg).toBeInTheDocument()
  })
})
