import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutTressly } from './AboutTressly'

describe('AboutTressly', () => {
  it('renders the heading and a lead paragraph', () => {
    render(<AboutTressly />)
    expect(screen.getByRole('heading', { name: 'About Tressly' })).toBeInTheDocument()
    expect(screen.getByText(/passion for hair/i)).toBeInTheDocument()
  })

  it('renders the stats row', () => {
    render(<AboutTressly />)
    expect(screen.getByText('15+')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('4,800+')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('25+')).toBeInTheDocument()
    expect(screen.getByText('Expert Stylists')).toBeInTheDocument()
  })
})
