import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Clients } from './Clients'

describe('Clients', () => {
  it('shows the heading and seven client logos', () => {
    render(<Clients />)
    expect(screen.getByRole('heading', { level: 2, name: /Our Clients/ })).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(7)
    for (let i = 1; i <= 7; i++) {
      expect(screen.getByText(`Client Logo ${i}`)).toBeInTheDocument()
    }
  })
})
