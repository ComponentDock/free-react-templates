import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading, subtitle, and CTA button', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1, name: /Find Your Zen/ })).toBeInTheDocument()

    expect(screen.getByText(/Discover inner peace through guided yoga/)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /Explore Classes/ })).toBeInTheDocument()
  })

  it('renders the background image container', () => {
    const { container } = render(<Hero />)

    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('id', 'home')
    expect(section?.getAttribute('style')).toContain('picsum.photos/seed/pranayama-hero')
  })

  it('allows clicking the CTA button', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const button = screen.getByRole('button', { name: /Explore Classes/ })
    await user.click(button)

    expect(button).toBeInTheDocument()
  })
})
