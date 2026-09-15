import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders navigation links', () => {
    render(<Footer />)
    const links = ['Home', 'About', 'Services', 'Portfolio', 'Team', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument()
    })
  })

  it('renders newsletter section', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument()
  })

  it('renders About section', () => {
    render(<Footer />)
    expect(screen.getByText('About Agency')).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    expect(
      screen.getByText(new RegExp(`${new Date().getFullYear()} Warmheart`)),
    ).toBeInTheDocument()
  })
})
