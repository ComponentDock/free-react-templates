import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('shows the first slide with headline, venue and a pill CTA', () => {
    render(<HeroSlider />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Science Conference' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Shangri-La Hotel, Bangkok, Bangkok, Thailand')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /More Information/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /More Information/i })).toHaveAttribute(
      'href',
      '#about',
    )
  })

  it('advances to the second slide via the next arrow and cycles back', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 2, name: 'OSHA Compliance' })).toBeInTheDocument()
    expect(screen.getByText('The Event Consistently')).toBeInTheDocument()
    expect(screen.getByText('January 14, 2032')).toBeInTheDocument()
    expect(screen.getByText('Laura Green')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { level: 2, name: 'Science Conference' }),
    ).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { level: 2, name: 'OSHA Compliance' })).toBeInTheDocument()
  })

  it('jumps to a slide from the pagination dots', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByRole('heading', { level: 2, name: 'OSHA Compliance' })).toBeInTheDocument()
    const activeDot = screen.getByRole('button', { name: 'Go to slide 2' })
    expect(activeDot).toHaveAttribute('aria-current', 'true')
  })

  it('renders a scroll indicator that links to the about section', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('link', { name: 'Scroll to about section' })).toHaveAttribute(
      'href',
      '#about',
    )
  })
})
