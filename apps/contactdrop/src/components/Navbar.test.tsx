import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('Co.')).toBeInTheDocument()
  })

  it('renders the contact us link', () => {
    render(<Navbar />)
    const link = screen.getByRole('link', { name: /contact us/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#contact')
  })
})
