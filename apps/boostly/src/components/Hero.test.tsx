import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the peach split hero with tagline, headline and copy', () => {
    render(<Hero />)
    const section = screen.getByRole('heading', { level: 1 }).closest('section')
    expect(section).toHaveClass('bg-hero')
    expect(screen.getByText('We are new but doing great')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'We give the power back to the user' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Content marketing is nothing but offering users value/),
    ).toBeInTheDocument()
  })

  it('renders the Explore Us CTA pointing at the services section', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: 'Explore Us' })
    expect(cta).toHaveAttribute('href', '#services')
    expect(cta.className).toContain('bg-brand')
  })

  it('renders the hero photo with descriptive alt text', () => {
    render(<Hero />)
    expect(
      screen.getByRole('img', { name: /Team members planning a product launch/ }),
    ).toBeInTheDocument()
  })

  it('keeps the CTA inert for jsdom hash navigation when clicked', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const cta = screen.getByRole('link', { name: 'Explore Us' })
    cta.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(cta)
    expect(cta).toBeInTheDocument()
  })
})
