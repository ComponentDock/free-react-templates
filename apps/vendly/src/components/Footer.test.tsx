import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { BRAND, CONTACT, FOOTER_NAV, PROMO } from '../data'

describe('Footer', () => {
  it('renders the Navigations link columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Navigations' })).toBeInTheDocument()
    const links = FOOTER_NAV.flat()
    for (const item of links) {
      expect(screen.getByRole('link', { name: item })).toHaveAttribute('href', '#shop')
    }
  })

  it('renders the Promo card with image, heading and range', () => {
    render(<Footer />)
    const promoImage = screen.getByRole('img', { name: PROMO.heading })
    expect(promoImage).toHaveClass('rounded-lg')
    expect(screen.getByRole('heading', { name: PROMO.heading })).toBeInTheDocument()
    expect(screen.getByText(PROMO.range)).toBeInTheDocument()
  })

  it('renders the Contact Info block', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Contact Info' })).toBeInTheDocument()
    expect(screen.getByText(CONTACT.address)).toBeInTheDocument()
    expect(screen.getByText(CONTACT.phone)).toBeInTheDocument()
    expect(screen.getByText(CONTACT.email)).toBeInTheDocument()
  })

  it('shows an error for an invalid subscribe email and clears it while typing', () => {
    render(<Footer />)
    const input = screen.getByLabelText('Email address')

    fireEvent.click(screen.getByRole('button', { name: 'Send' }))
    expect(screen.getByText('Please enter your email')).toBeInTheDocument()
    expect(input).toHaveAttribute('aria-invalid', 'true')

    fireEvent.change(input, { target: { value: 'not-an-email' } })
    expect(screen.queryByText('Please enter your email')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Send' }))
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()

    fireEvent.change(input, { target: { value: 'valid@example.com' } })
    expect(screen.queryByText('Please enter a valid email')).not.toBeInTheDocument()
  })

  it('shows a success state on a valid subscribe submit', () => {
    render(<Footer />)
    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'valid@example.com' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Send' }))

    expect(screen.getByRole('status')).toHaveTextContent(/Thanks for subscribing/i)
    expect(screen.getByLabelText('Email address')).toHaveValue('')
    expect(screen.queryByText('Please enter a valid email')).not.toBeInTheDocument()
  })

  it('renders the copyright bar with the Component Dock credit', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    const credit = screen.getByRole('link', { name: /Component Dock/ })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(
      screen.getByText(new RegExp(`Copyright ©${year} All rights reserved`)),
    ).toBeInTheDocument()
    expect(screen.getByText(new RegExp(BRAND))).toBeInTheDocument()
  })
})
