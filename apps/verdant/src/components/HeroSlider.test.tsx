import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('shows the first slide headline centered over a background image', () => {
    render(<HeroSlider />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Welcome to Verdant')
    expect(heading.className).toMatch(/text-white/)
    expect(heading.className).toMatch(/uppercase/)
    expect(heading.className).toMatch(/text-center/)
    const slide = heading.closest('section')!
    expect(slide.style.backgroundImage).toMatch(/picsum/)
  })

  it('advances to the second slide via the next arrow', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Free Website Templates')
  })

  it('wraps back to the first slide from the last', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Welcome to Verdant')
  })

  it('moves to the previous slide', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Free Website Templates')
  })

  it('jumps to a slide via the dots', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: 'Show slide 2' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Free Website Templates')
    expect(screen.getByRole('button', { name: 'Show slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('renders the hero at least 600px tall with an overlay', () => {
    render(<HeroSlider />)
    const section = screen.getByLabelText('Hero slides')
    expect(section.className).toMatch(/min-h-\[600px\]/)
    expect(section.querySelector('.overlay')).not.toBeNull()
  })
})
