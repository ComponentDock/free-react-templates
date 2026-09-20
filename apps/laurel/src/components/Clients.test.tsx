import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Clients } from './Clients'

describe('Clients', () => {
  it('renders the section heading', () => {
    render(<Clients />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Our Trusted Clients/i)
  })

  it('renders 6 client placeholder boxes', () => {
    render(<Clients />)
    for (let i = 1; i <= 6; i++) {
      expect(screen.getByText(`Client ${i}`)).toBeInTheDocument()
    }
  })
})
