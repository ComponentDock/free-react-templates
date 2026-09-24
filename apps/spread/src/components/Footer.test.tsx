import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Spread logo', () => {
    render(<Footer />)
    const logos = screen.getAllByText('Spread')
    expect(logos.length).toBeGreaterThanOrEqual(1)
  })

  it('renders Quick Links', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Sitemaps')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
  })

  it('renders Categories heading and items', () => {
    render(<Footer />)
    // "Categories" appears as a heading — use getAllByText since nav also has it
    const cats = screen.getAllByText('Categories')
    expect(cats.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Travel', { selector: 'a' })).toBeInTheDocument()
    expect(screen.getByText('Music')).toBeInTheDocument()
  })

  it('renders Newsletter section', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Email for newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Subscribe')).toBeInTheDocument()
  })

  it('allows email input', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email for newsletter')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('submits newsletter form and clears email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email for newsletter')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByLabelText('Subscribe'))
    expect(input).toHaveValue('')
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders social icons in footer', () => {
    render(<Footer />)
    const facebookLinks = screen.getAllByLabelText('Facebook')
    expect(facebookLinks.length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByLabelText('Twitter').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByLabelText('Instagram').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByLabelText('YouTube').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByLabelText('RSS').length).toBeGreaterThanOrEqual(1)
  })

  it('renders current year in copyright', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('renders about description', () => {
    render(<Footer />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })
})
