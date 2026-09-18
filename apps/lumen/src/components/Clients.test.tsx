import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Clients } from './Clients'

describe('Clients', () => {
  it('renders the section heading', () => {
    render(<Clients />)
    expect(screen.getByText('Our Clients')).toBeInTheDocument()
  })

  it('renders all client names', () => {
    render(<Clients />)
    const clients = [
      'Acme Corp',
      'Globex',
      'Initech',
      'Hooli',
      'Stark Industries',
      'Wayne Enterprises',
    ]
    for (const client of clients) {
      expect(screen.getByText(client)).toBeInTheDocument()
    }
  })
})
