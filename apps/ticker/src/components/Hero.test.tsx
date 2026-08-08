import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the headline with the gold gradient span, sub-paragraph and CTAs', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain('Learn to Trade from Millionaire Mentors')

    const gradientSpan = screen.getByText('Millionaire Mentors')
    expect(gradientSpan).toHaveClass('bg-clip-text')
    expect(gradientSpan).toHaveClass('text-transparent')
    expect(gradientSpan).toHaveClass('from-primary-500')
    expect(gradientSpan).toHaveClass('to-primary-700')

    expect(
      screen.getByText(
        /Learn to trade stocks, crypto, forex, and options from professional traders/,
      ),
    ).toBeInTheDocument()

    const start = screen.getByRole('link', { name: /Start Trading/ })
    expect(start).toHaveClass('from-primary-500')
    expect(start).toHaveClass('to-primary-600')

    expect(screen.getByRole('link', { name: 'Meet Our Mentors' })).toBeInTheDocument()
  })

  it('shows the live badge and the social proof row', () => {
    render(<Hero />)

    expect(screen.getByText('1,247 traders online now')).toBeInTheDocument()
    expect(screen.getByText('4.9/5')).toBeInTheDocument()
    expect(screen.getByText('from 2,847 traders')).toBeInTheDocument()

    const avatars = screen.getAllByAltText('Trader portrait')
    expect(avatars).toHaveLength(4)
    for (const avatar of avatars) {
      expect(avatar).toHaveAttribute('src', expect.stringContaining('picsum.photos/seed/ticker-'))
    }
  })

  it('renders the Live Portfolio card with balance, chart, notification and stats', () => {
    render(<Hero />)

    expect(screen.getByText('Live Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Total Balance')).toBeInTheDocument()
    expect(screen.getByText('$124,723.45')).toBeInTheDocument()

    expect(screen.getByText('BTC Long +12.4% just now')).toBeInTheDocument()

    expect(screen.getByText('156')).toBeInTheDocument()
    expect(screen.getByText('Traders')).toBeInTheDocument()
    expect(screen.getByText('73%')).toBeInTheDocument()
    expect(screen.getByText('Win Rate')).toBeInTheDocument()
    expect(screen.getByText('2.4')).toBeInTheDocument()
    expect(screen.getByText('Profit Factor')).toBeInTheDocument()
  })
})
