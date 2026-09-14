import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /what we do/i })).toBeInTheDocument()
  })

  it('renders all 6 service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /tattooing/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /tattoo design/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /tattoo removal/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /piercing/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /laser removal/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /henna design/i })).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/custom tattoos designed and executed/i)).toBeInTheDocument()
    expect(screen.getByText(/collaborative design sessions/i)).toBeInTheDocument()
  })
})
