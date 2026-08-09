import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Experts } from './Experts'

describe('Experts', () => {
  it('renders the heading, four expert cards, and the certificate band', () => {
    render(<Experts />)
    expect(screen.getByRole('heading', { name: /our experts/i })).toBeInTheDocument()
    for (const expert of ['Mila Hartley', 'Teigan Duran', 'Tanya Ramsay', 'Donna Carr']) {
      expect(screen.getByRole('heading', { name: expert })).toBeInTheDocument()
    }
    expect(screen.getByText('Hairdresser')).toBeInTheDocument()
    expect(screen.getByText('Barber')).toBeInTheDocument()
    expect(
      screen.getByText(/certified by the national hairdressing association/i),
    ).toBeInTheDocument()
  })
})
