import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the services heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument()
  })

  it('displays all four service items', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /100% without detergents/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /surface drying machines/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /have an application/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /lacquer protection/i })).toBeInTheDocument()
  })

  it('has descriptive text for each service', () => {
    render(<Services />)
    expect(screen.getByText(/eco-friendly car wash/i)).toBeInTheDocument()
    expect(screen.getByText(/spotless, streak-free/i)).toBeInTheDocument()
    expect(screen.getByText(/mobile app/i)).toBeInTheDocument()
    expect(screen.getByText(/UV damage/i)).toBeInTheDocument()
  })
})
