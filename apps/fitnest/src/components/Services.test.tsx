import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and all six service items', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'What We Offer' })).toBeInTheDocument()
    for (const title of ['Asana', 'Meditation', 'Mudra', 'Bandhas', 'Philosophy', 'Pranayama']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders descriptions for each service', () => {
    render(<Services />)
    expect(screen.getByText(/Foundational postures/i)).toBeInTheDocument()
    expect(screen.getByText(/guided meditation practices/i)).toBeInTheDocument()
    expect(screen.getByText(/sacred hand gestures/i)).toBeInTheDocument()
    expect(screen.getByText(/energy locks/i)).toBeInTheDocument()
    expect(screen.getByText(/ancient texts/i)).toBeInTheDocument()
    expect(screen.getByText(/breath control/i)).toBeInTheDocument()
  })
})
