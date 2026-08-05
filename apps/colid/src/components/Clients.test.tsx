import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Clients } from './Clients'

describe('Clients', () => {
  it('renders the client logo strip', () => {
    render(<Clients />)

    for (const client of ['Acme Corp', 'Globex', 'Initech', 'Umbrella', 'Wayne Enterprises']) {
      expect(screen.getByText(client)).toBeInTheDocument()
    }
  })
})
