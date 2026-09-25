import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Clients } from './Clients'

describe('Clients', () => {
  it('renders section heading', () => {
    render(<Clients />)
    expect(screen.getByText(/trusted by/i)).toBeInTheDocument()
    expect(screen.getByText(/leading brands/i)).toBeInTheDocument()
  })

  it('renders all client names', () => {
    render(<Clients />)
    const clients = ['Google', 'Microsoft', 'Apple', 'Amazon', 'Netflix', 'Spotify']
    clients.forEach((c) => {
      expect(screen.getByText(c)).toBeInTheDocument()
    })
  })
})
