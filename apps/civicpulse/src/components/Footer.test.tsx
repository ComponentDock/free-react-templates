import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    for (const link of ['Home', 'About', 'Services', 'Gallery', 'Team']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Your Email Address')).toBeInTheDocument()
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Behance')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Component Dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/CivicPulse\. All rights reserved/)).toBeInTheDocument()
  })

  it('shows validation error on invalid email', () => {
    render(<Footer />)
    const input = screen.getByLabelText('Your Email Address')
    const submit = screen.getByRole('button', { name: 'Subscribe' })
    fireEvent.change(input, { target: { value: 'not-an-email' } })
    fireEvent.click(submit)
    expect(screen.getByRole('alert')).toHaveTextContent('A valid email address is required.')
  })

  it('subscribes successfully with valid email', () => {
    render(<Footer />)
    const input = screen.getByLabelText('Your Email Address')
    const submit = screen.getByRole('button', { name: 'Subscribe' })
    fireEvent.change(input, { target: { value: 'test@example.com' } })
    fireEvent.click(submit)
    expect(screen.getByText('Thanks for subscribing!')).toBeInTheDocument()
  })

  it('handles email input change', () => {
    render(<Footer />)
    const input = screen.getByLabelText('Your Email Address') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'new@email.com' } })
    expect(input.value).toBe('new@email.com')
  })
})
