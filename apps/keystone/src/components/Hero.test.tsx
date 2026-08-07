import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the kicker, headline, and blurb', () => {
    render(<Hero />)

    expect(screen.getByText(/Architecture Studio in United State/i)).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(/Focus on Design Quality/)
    expect(screen.getByText(/lasting impressions through architecture design/i)).toBeInTheDocument()
  })

  it('shows the Contact Us button and slide indicator', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByText('01')).toBeInTheDocument()
  })

  it('renders the hero background image', () => {
    render(<Hero />)

    const img = screen.getByRole('img', { name: /modern building facade/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
