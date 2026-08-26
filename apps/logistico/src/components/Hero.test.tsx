import { render, screen, fireEvent } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/A Truly Global/i)
  })

  it('renders subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText(/We make your cargo transport simple/i)).toBeInTheDocument()
  })

  it('renders Explore Us CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Explore Us/i })).toBeInTheDocument()
  })

  it('renders quick offer form', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Get a Quick Offer/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/Truckload type/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Commodity type/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Distance/i)).toBeInTheDocument()
  })

  it('shows estimated cost', () => {
    render(<Hero />)
    expect(screen.getByText('$10,400.00')).toBeInTheDocument()
  })

  it('prevents form submission', () => {
    render(<Hero />)
    const form = screen.getByRole('form', { name: /Quick offer calculator/i })
    fireEvent.submit(form)
  })
})
