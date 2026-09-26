import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ContactInfo } from './ContactInfo'

describe('ContactInfo', () => {
  it('renders the section title', () => {
    render(<ContactInfo />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('renders the address', () => {
    render(<ContactInfo />)
    expect(screen.getByText(/Green lane, Kings street/)).toBeInTheDocument()
  })

  it('renders the phone number', () => {
    render(<ContactInfo />)
    expect(screen.getByText('+10 787 367 2567')).toBeInTheDocument()
  })

  it('renders the email link', () => {
    render(<ContactInfo />)
    const email = screen.getByText('contact08@captura.com')
    expect(email).toHaveAttribute('href', 'mailto:contact08@captura.com')
  })

  it('renders social media icons', () => {
    render(<ContactInfo />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders the map placeholder', () => {
    render(<ContactInfo />)
    expect(screen.getByText('New York, United States')).toBeInTheDocument()
  })
})
