import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders logo and brand name', () => {
    render(<Footer />)
    expect(screen.getByText('the manor')).toBeInTheDocument()
  })

  it('renders useful links section', () => {
    render(<Footer />)
    expect(screen.getByText('useful links')).toBeInTheDocument()
    expect(screen.getByText('Listings')).toBeInTheDocument()
    expect(screen.getByText('Favorite Cities')).toBeInTheDocument()
    expect(screen.getByText('Our Agents')).toBeInTheDocument()
  })

  it('renders contact form with name, email, message fields', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('E-mail')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('4127 Raoul Wallenberg 45b-c Gibraltar')).toBeInTheDocument()
    expect(screen.getByText('2556-808-8613')).toBeInTheDocument()
    expect(screen.getByText('contactme@gmail.com')).toBeInTheDocument()
  })

  it('renders Component Dock link in footer brand', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders social icons with aria labels', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Pinterest')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
  })

  it('renders website link to componentdock', () => {
    render(<Footer />)
    const link = screen.getByText('www.componentdock.com')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com')
  })

  it('submits contact form without error', () => {
    render(<Footer />)
    const form = document.querySelectorAll('form')[0]
    if (form) fireEvent.submit(form)
  })
})
