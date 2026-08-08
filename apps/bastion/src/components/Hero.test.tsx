import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

const heading = () => screen.getByRole('heading', { level: 1 }).textContent ?? ''

describe('Hero', () => {
  it('shows the first slide with its numbered label', () => {
    render(<Hero />)
    expect(heading()).toMatch(/Exterior Building/)
    expect(heading()).toMatch(/#01/)
    expect(screen.getByText('Featured Projects')).toBeInTheDocument()
  })

  it('advances and wraps through all slides with the next button', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const next = screen.getByRole('button', { name: 'Next slide' })
    await user.click(next)
    expect(heading()).toMatch(/American Building/)
    await user.click(next)
    expect(heading()).toMatch(/Louie's Residences/)
    await user.click(next)
    expect(heading()).toMatch(/Business Building/)
    await user.click(next)
    expect(heading()).toMatch(/Exterior Building/)
  })

  it('wraps backwards with the previous button', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(heading()).toMatch(/Business Building/)
  })

  it('jumps to a slide via the dot controls', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const dot = screen.getByRole('button', { name: 'Go to slide 3' })
    await user.click(dot)
    expect(heading()).toMatch(/Louie's Residences/)
    expect(dot).toHaveAttribute('aria-current', 'true')
  })

  it('renders the hero call-to-action links', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Request a quote' })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByRole('link', { name: 'View our work' })).toHaveAttribute(
      'href',
      '#portfolio',
    )
  })
})
