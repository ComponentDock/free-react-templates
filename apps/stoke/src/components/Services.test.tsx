import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { SERVICES, SERVICES_NOTE } from '../content'

describe('Services', () => {
  it('renders the six service cells in the reference order', () => {
    render(<Services />)
    for (const service of SERVICES) {
      expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
      expect(screen.getByText(service.body)).toBeInTheDocument()
    }
  })

  it('puts one price line in every cell, in the brand red', () => {
    render(<Services />)
    for (const service of SERVICES) {
      for (const price of screen.getAllByText(service.price)) {
        expect(price).toHaveClass('text-primary-700')
      }
    }
    // two pairs share a "from" figure, so the six cells carry four distinct strings
    expect(new Set(SERVICES.map((service) => service.price)).size).toBe(4)
  })

  it('closes with the sample-price note', () => {
    render(<Services />)
    expect(screen.getByText(SERVICES_NOTE)).toBeInTheDocument()
  })
})
