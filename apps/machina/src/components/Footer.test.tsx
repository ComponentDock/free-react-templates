import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import {
  BRAND_NAME,
  COMPANY_LINKS,
  CREDIT_BRAND,
  FOOTER_ADDRESS,
  FOOTER_EMAIL,
  FOOTER_PHONE,
  FOOTER_SOCIALS,
  NEWSLETTER_BUTTON,
  NEWSLETTER_PLACEHOLDER,
  PRODUCTION_LINKS,
} from '../data'

const socialLabels: Record<(typeof FOOTER_SOCIALS)[number], string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
}

describe('Footer', () => {
  it('renders the four footer columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Company' })).toBeInTheDocument()
    COMPANY_LINKS.forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    })
    expect(screen.getByRole('heading', { name: 'Production' })).toBeInTheDocument()
    PRODUCTION_LINKS.forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    })
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByText(FOOTER_ADDRESS)).toBeInTheDocument()
    expect(screen.getByText(FOOTER_PHONE)).toBeInTheDocument()
    expect(screen.getByText(FOOTER_EMAIL)).toBeInTheDocument()
  })

  it('renders the newsletter form with input and subscribe button', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    const input = screen.getByLabelText('Email address')
    expect(input).toHaveAttribute('placeholder', NEWSLETTER_PLACEHOLDER)
    expect(screen.getByRole('button', { name: NEWSLETTER_BUTTON })).toBeInTheDocument()
    fireEvent.submit(screen.getByRole('form', { name: 'Newsletter' }))
  })

  it('renders the credit bar with year, brand, credit link, and socials', () => {
    const year = new Date().getFullYear()
    render(<Footer />)
    expect(screen.getByText(new RegExp(`Copyright © ${year} ${BRAND_NAME}`))).toBeInTheDocument()
    expect(screen.getByRole('link', { name: CREDIT_BRAND })).toHaveAttribute(
      'href',
      'https://colorlib.com',
    )
    FOOTER_SOCIALS.forEach((social) => {
      expect(screen.getByRole('link', { name: socialLabels[social] })).toBeInTheDocument()
    })
  })
})
