import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactInfo } from './ContactInfo'

describe('ContactInfo', () => {
  it('renders the lavender band with four centred contact columns', () => {
    render(<ContactInfo />)
    const band = screen.getByTestId('contact-info')
    expect(band).toHaveClass('bg-lavender')

    expect(screen.getByRole('heading', { level: 4, name: 'Visit Our Office' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: "Let's call us" })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: "Let's Email Us" })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Customer Support' })).toBeInTheDocument()

    expect(screen.getByText(/Harbour Road/)).toBeInTheDocument()
    expect(screen.getByText(/Phone: 01/)).toBeInTheDocument()
    expect(screen.getByText('stay@voyara.com')).toBeInTheDocument()
    expect(screen.getByText('support@voyara.com')).toBeInTheDocument()
  })
})
