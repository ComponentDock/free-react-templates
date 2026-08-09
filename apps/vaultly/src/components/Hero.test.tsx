import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, and both call-to-action buttons', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: /Your Personal AI Financial Advisor/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Get expert-level financial guidance 24\/7/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Start Free Trial' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'See How It Works' })).toBeInTheDocument()
  })

  it('renders the three stats with numbers and labels', () => {
    render(<Hero />)

    expect(screen.getByText('Assets Advised')).toBeInTheDocument()
    expect(screen.getByText('Happy Users')).toBeInTheDocument()
    expect(screen.getByText('App Rating')).toBeInTheDocument()
    expect(screen.getByText('$2.5B+')).toBeInTheDocument()
    expect(screen.getByText('150K+')).toBeInTheDocument()
    expect(screen.getByText('4.9/5')).toBeInTheDocument()
  })

  it('renders the AI chat mockup with online status, bubbles, and input placeholder', () => {
    render(<Hero />)

    expect(screen.getByText('Finley')).toBeInTheDocument()
    expect(screen.getByText('Online • Ready to help')).toBeInTheDocument()
    expect(screen.getByText(/I want to save \$50,000 for a house down payment/)).toBeInTheDocument()
    expect(screen.getByText(/Based on your current income of \$85,000/)).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText(/Message Finley anything about your finances/),
    ).toBeInTheDocument()
  })
})
