import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders call center info with phone number', () => {
    render(<Footer />)

    expect(screen.getByText(/For any question contact our 24\/7 call center/)).toBeInTheDocument()
    expect(screen.getByText('+001 345 6889')).toBeInTheDocument()
  })

  it('highlights phone number in brand color', () => {
    render(<Footer />)

    const phone = screen.getByText('+001 345 6889')
    expect(phone).toHaveClass('text-brand')
  })
})
