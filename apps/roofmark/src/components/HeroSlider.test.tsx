import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the first slide address and price by default', () => {
    render(<HeroSlider />)
    expect(screen.getByText('123 Street, New York, USA')).toBeInTheDocument()
    expect(screen.getByText('$1,200')).toBeInTheDocument()
  })

  it('renders all 3 slide images', () => {
    render(<HeroSlider />)
    expect(screen.getByAltText('123 Street, New York, USA')).toBeInTheDocument()
    expect(screen.getByAltText('456 Avenue, Los Angeles, USA')).toBeInTheDocument()
    expect(screen.getByAltText('789 Boulevard, Chicago, USA')).toBeInTheDocument()
  })

  it('navigates to next slide', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const nextBtn = screen
      .getAllByRole('button')
      .find((btn) => btn.querySelector('svg') && btn.className.includes('right-4'))!
    await user.click(nextBtn)
    expect(screen.getByText('456 Avenue, Los Angeles, USA')).toBeInTheDocument()
    expect(screen.getByText('$2,500')).toBeInTheDocument()
  })

  it('navigates to previous slide', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    // From slide 0, prev goes to slide 2
    const prevBtn = screen
      .getAllByRole('button')
      .find((btn) => btn.querySelector('svg') && btn.className.includes('left-4'))!
    await user.click(prevBtn)
    expect(screen.getByText('789 Boulevard, Chicago, USA')).toBeInTheDocument()
    expect(screen.getByText('$980')).toBeInTheDocument()
  })

  it('navigates with dot buttons', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    // The dot buttons are the small rounded-full ones at the bottom
    const allButtons = screen.getAllByRole('button')
    const dotButtons = allButtons.filter(
      (btn) => btn.className.includes('w-3') && btn.className.includes('h-3'),
    )
    // Click dot for slide 2
    await user.click(dotButtons[2]!)
    expect(screen.getByText('789 Boulevard, Chicago, USA')).toBeInTheDocument()
    expect(screen.getByText('$980')).toBeInTheDocument()
  })

  it('navigates forward through all slides and wraps', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const allButtons = screen.getAllByRole('button')
    const nextBtn = allButtons.find(
      (btn) => btn.querySelector('svg') && btn.className.includes('right-4'),
    )!
    // Go 0 -> 1 -> 2 -> 0
    await user.click(nextBtn)
    expect(screen.getByText('456 Avenue, Los Angeles, USA')).toBeInTheDocument()
    await user.click(nextBtn)
    expect(screen.getByText('789 Boulevard, Chicago, USA')).toBeInTheDocument()
    await user.click(nextBtn)
    expect(screen.getByText('123 Street, New York, USA')).toBeInTheDocument()
  })
})
