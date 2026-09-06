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

  it('renders the brand logo', () => {
    render(<Footer />)

    const logo = screen.getByText('Baseplate')
    expect(logo).toBeInTheDocument()
    expect(logo.tagName).toBe('A')
    expect(logo).toHaveAttribute('href', '#')
  })

  it('renders six social media icon links', () => {
    render(<Footer />)

    const facebook = screen.getByRole('link', { name: 'Facebook' })
    expect(facebook).toHaveAttribute('href', '#')
    expect(facebook).toHaveAttribute('target', '_blank')
    expect(facebook).toHaveAttribute('rel', 'noreferrer')

    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Behance' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Dribbble' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'YouTube' })).toBeInTheDocument()
  })

  it('renders left navigation links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Privacy' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Policy' })).toHaveAttribute('href', '#')
  })

  it('renders right navigation links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Our works' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '#')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#')
  })

  it('renders the copyright notice', () => {
    render(<Footer />)

    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('renders Component Dock attribution link', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noreferrer')
  })

  it('applies white background to footer', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.className).toContain('bg-white')
  })

  it('renders social icons with brand colors', () => {
    render(<Footer />)

    const facebook = screen.getByRole('link', { name: 'Facebook' })
    expect(facebook.className).toContain('bg-[#3b579b]')

    const twitter = screen.getByRole('link', { name: 'Twitter' })
    expect(twitter.className).toContain('bg-[#00a0fb]')

    const instagram = screen.getByRole('link', { name: 'Instagram' })
    expect(instagram.className).toContain('bg-[#c31574]')
  })
})
