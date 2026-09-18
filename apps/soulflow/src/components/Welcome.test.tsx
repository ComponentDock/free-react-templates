import { render, screen } from '@testing-library/react'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('renders welcome heading and description', () => {
    render(<Welcome />)
    expect(screen.getByText('Welcome To Soulflow')).toBeInTheDocument()
    expect(screen.getByText('Hello there!')).toBeInTheDocument()
    expect(screen.getByText(/Discover the transformative power/)).toBeInTheDocument()
  })

  it('has a pricing link', () => {
    render(<Welcome />)
    expect(screen.getByText('See The Yoga Pricing')).toHaveAttribute('href', '#pricing')
  })
})
