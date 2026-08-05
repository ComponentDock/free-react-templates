import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Clients } from './Clients'

describe('Clients', () => {
  it('renders at least four client logo tiles', () => {
    render(<Clients />)

    for (const client of ['Hexlab', 'Vantage', 'Northwind', 'Pixelcraft', 'Orbital']) {
      expect(screen.getByText(client)).toBeInTheDocument()
    }
  })
})
