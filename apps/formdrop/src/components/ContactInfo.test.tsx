import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactInfo } from './ContactInfo'

describe('ContactInfo', () => {
  it('renders the Contact us heading', () => {
    render(<ContactInfo />)
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument()
  })

  it('renders the heading underline decoration', () => {
    const { container } = render(<ContactInfo />)
    const underline = container.querySelector('.bg-brand-pink')
    expect(underline).toBeInTheDocument()
  })

  it('renders the subtext', () => {
    render(<ContactInfo />)
    expect(screen.getByText(/we're open for any suggestion/i)).toBeInTheDocument()
  })

  it('renders four info items', () => {
    render(<ContactInfo />)
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Website')).toBeInTheDocument()
  })

  it('displays the address value', () => {
    render(<ContactInfo />)
    expect(
      screen.getByText('198 West 21th Street, Suite 721 New York NY 10016'),
    ).toBeInTheDocument()
  })

  it('displays the phone value as a link', () => {
    render(<ContactInfo />)
    const phoneLink = screen.getByText('+ 1235 2355 98')
    expect(phoneLink).toHaveAttribute('href', 'tel:+123****5598')
  })

  it('displays the email value as a link', () => {
    render(<ContactInfo />)
    const emailLink = screen.getByText('info@yoursite.com')
    expect(emailLink).toHaveAttribute('href', 'mailto:info@yoursite.com')
  })

  it('displays the website value as a link', () => {
    render(<ContactInfo />)
    const websiteLink = screen.getByText('yoursite.com')
    expect(websiteLink).toHaveAttribute('href', 'https://yoursite.com')
  })

  it('renders circular gray icon containers', () => {
    const { container } = render(<ContactInfo />)
    const iconContainers = container.querySelectorAll('.rounded-full.bg-icon-bg')
    expect(iconContainers.length).toBe(4)
  })
})
