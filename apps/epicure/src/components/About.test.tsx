import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { about } from '../data'

describe('About', () => {
  it('shows the eyebrow, heading, paragraph, checks and CTA', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About Epicure' })).toBeInTheDocument()
    expect(screen.getByText(about.paragraph)).toBeInTheDocument()
    for (const check of about.checks) {
      expect(screen.getByText(check)).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'See Our Menu' })).toHaveAttribute('href', '#offers')
  })

  it('renders both slider images', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: 'Inside the restaurant dining room' })).toHaveAttribute(
      'src',
      about.sliderImages[0],
    )
    expect(screen.getByRole('img', { name: 'Dish from the chef kitchen' })).toHaveAttribute(
      'src',
      about.sliderImages[1],
    )
  })

  it('advances the slider with the next control', async () => {
    const user = userEvent.setup()
    render(<About />)
    const slider = screen.getByLabelText('Image slider')
    expect(slider.firstElementChild).toHaveStyle('transform: translateX(-0%)')
    await user.click(screen.getByRole('button', { name: 'Next image' }))
    expect(slider.firstElementChild).toHaveStyle('transform: translateX(-100%)')
  })

  it('moves back with the previous control and wraps', async () => {
    const user = userEvent.setup()
    render(<About />)
    const slider = screen.getByLabelText('Image slider')
    // from slide 1 -> 0
    await user.click(screen.getByRole('button', { name: 'Next image' }))
    await user.click(screen.getByRole('button', { name: 'Previous image' }))
    expect(slider.firstElementChild).toHaveStyle('transform: translateX(-0%)')
  })

  it('jumps to a slide via the dots', async () => {
    const user = userEvent.setup()
    render(<About />)
    const slider = screen.getByLabelText('Image slider')
    await user.click(screen.getByRole('button', { name: 'Go to image 2' }))
    expect(slider.firstElementChild).toHaveStyle('transform: translateX(-100%)')
    // back
    await user.click(screen.getByRole('button', { name: 'Go to image 1' }))
    expect(slider.firstElementChild).toHaveStyle('transform: translateX(-0%)')
  })
})
