import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactCard } from './ContactCard'

describe('ContactCard', () => {
  it('renders the form and image', () => {
    render(<ContactCard />)
    expect(screen.getByText('Get in touch with us')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /contact us/i })).toBeInTheDocument()
  })

  it('renders the send message button', () => {
    render(<ContactCard />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })
})
