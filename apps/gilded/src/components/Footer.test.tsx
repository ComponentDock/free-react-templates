import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site name, opening times, contact details, and social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /gilded/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /opening times/i })).toBeInTheDocument()
    expect(screen.getByText(/10\.00 - 23\.00/)).toBeInTheDocument()
    expect(screen.getByText(/10\.00 - 19\.00/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument()
    expect(screen.getByText('(+12) 345 678 910')).toBeInTheDocument()
    expect(screen.getByText('Hello.colorlib@gmail.com')).toBeInTheDocument()
    for (const social of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })
})
