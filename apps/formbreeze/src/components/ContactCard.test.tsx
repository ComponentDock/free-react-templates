import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactCard } from './ContactCard'

describe('ContactCard', () => {
  it('renders the card container with white background', () => {
    const { container } = render(<ContactCard />)
    const card = container.querySelector('.bg-bg-card')
    expect(card).toBeInTheDocument()
  })

  it('renders the form title', () => {
    render(<ContactCard />)
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument()
  })

  it('renders the illustration', () => {
    render(<ContactCard />)
    expect(screen.getByText(/we'd love to hear from you/i)).toBeInTheDocument()
  })
})
