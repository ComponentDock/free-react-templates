import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Reign logo', () => {
    render(<Footer />)
    expect(screen.getByText('Reign')).toBeInTheDocument()
  })

  it('renders contact links', () => {
    render(<Footer />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText('hello@mydomain.com')).toBeInTheDocument()
    expect(screen.getByText('+1 829 2293 382')).toBeInTheDocument()
    expect(screen.getByText('Support')).toBeInTheDocument()
  })

  it('renders nav link columns', () => {
    render(<Footer />)
    const homeLinks = screen.getAllByText('Home')
    expect(homeLinks.length).toBeGreaterThanOrEqual(2)
    const blogLinks = screen.getAllByText('Blog')
    expect(blogLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
