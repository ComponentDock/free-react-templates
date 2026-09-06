import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the footer element with semantic role', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    expect(footer.tagName).toBe('FOOTER')
  })

  it('renders the CTA banner', () => {
    render(<Footer />)

    expect(screen.getByText('Ready for a next project?')).toBeInTheDocument()
    expect(screen.getByText("Let's get started!")).toBeInTheDocument()
  })

  it('renders the Contact us CTA button', () => {
    render(<Footer />)

    const btns = screen.getAllByRole('link', { name: 'Contact us' })
    expect(btns.length).toBeGreaterThanOrEqual(1)
    expect(btns[0]).toHaveAttribute('href', '#')
  })

  it('renders the brand logo', () => {
    render(<Footer />)

    const logo = screen.getByText('Footwell')
    expect(logo).toBeInTheDocument()
    expect(logo.tagName).toBe('A')
    expect(logo).toHaveAttribute('href', '#')
  })

  it('renders the copyright notice with current year', () => {
    render(<Footer />)

    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('renders the Customers column', () => {
    render(<Footer />)

    expect(screen.getByText('Customers')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Buyer' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Supplier' })).toHaveAttribute('href', '#')
  })

  it('renders the Company column', () => {
    render(<Footer />)

    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About us' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Careers' })).toHaveAttribute('href', '#')
    expect(screen.getAllByRole('link', { name: 'Contact us' }).length).toBeGreaterThanOrEqual(2)
  })

  it('renders the Further Information column', () => {
    render(<Footer />)

    expect(screen.getByText('Further Information')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms & Conditions' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute('href', '#')
  })

  it('renders social media icons with accessible labels', () => {
    render(<Footer />)

    const facebook = screen.getByRole('link', { name: 'Facebook' })
    expect(facebook).toHaveAttribute('href', '#')
    expect(facebook).toHaveAttribute('target', '_blank')
    expect(facebook).toHaveAttribute('rel', 'noreferrer')

    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Send' })).toBeInTheDocument()
  })

  it('renders Component Dock attribution link', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('applies dark navy background to footer', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-footer-bg')
  })

  it('applies accent color to social icons', () => {
    render(<Footer />)

    const facebook = screen.getByRole('link', { name: 'Facebook' })
    expect(facebook.className).toContain('bg-cta-accent')
  })
})
