import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTA } from './CTA'

describe('CTA', () => {
  it('renders the heading', () => {
    render(<CTA />)
    expect(screen.getByRole('heading', { name: /get your tickets now/i })).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<CTA />)
    expect(screen.getByText(/secure your spot/i)).toBeInTheDocument()
  })

  it('renders the Get Tickets button', () => {
    render(<CTA />)
    expect(screen.getByText('Get Tickets')).toBeInTheDocument()
  })
})
