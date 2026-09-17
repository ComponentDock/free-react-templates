import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ContactCard } from './ContactCard'

describe('ContactCard', () => {
  it('renders the card container', () => {
    render(<ContactCard />)

    expect(screen.getByTestId('contact-card')).toBeInTheDocument()
  })

  it('renders the envelope icon', () => {
    render(<ContactCard />)

    expect(screen.getByTestId('envelope-icon')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<ContactCard />)

    expect(screen.getByRole('heading', { name: /drop us a message/i })).toBeInTheDocument()
  })

  it('renders the contact form', () => {
    render(<ContactCard />)

    expect(screen.getByTestId('contact-form')).toBeInTheDocument()
  })
})
