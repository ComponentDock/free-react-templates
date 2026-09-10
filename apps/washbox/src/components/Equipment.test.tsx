import { render, screen } from '@testing-library/react'
import { Equipment } from './Equipment'

describe('Equipment', () => {
  it('renders heading', () => {
    render(<Equipment />)
    expect(screen.getByText('We have the latest equipment')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<Equipment />)
    expect(screen.getByText(/advanced car wash/)).toBeInTheDocument()
  })

  it('renders About Us CTA button', () => {
    render(<Equipment />)
    const btn = screen.getByText('About Us')
    expect(btn).toBeInTheDocument()
    expect(btn.closest('a')).toHaveAttribute('href', '#about')
  })
})
