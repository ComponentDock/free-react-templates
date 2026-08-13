import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the first slide headline, subtext, and white-outline CTA', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Investing for Success')
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: 'Get in touch' })
    expect(cta).toHaveAttribute('href', '#contact')
  })

  it('advances and wraps the slides with the arrows', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Investing for Success')

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Investment Consulting')

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Investing for Success')

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Investment Consulting')
  })
})
