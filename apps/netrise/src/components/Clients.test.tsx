import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Clients } from './Clients'
import { clients } from '../data'

describe('Clients', () => {
  it('renders the heading and all five client wordmarks', () => {
    render(<Clients />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Clients' })).toBeInTheDocument()
    for (const client of clients) {
      expect(screen.getByText(client)).toBeInTheDocument()
    }
  })
})
