import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    const logos = screen.getAllByText('Pixelate')
    expect(logos.length).toBeGreaterThanOrEqual(1)
  })

  it('renders Component Dock attribution', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it("renders Let's Talk and Download CV buttons", () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: "Let's Talk" })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Download CV' })).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Website')).toBeInTheDocument()
  })

  it('renders footer navigation links', () => {
    render(<Footer />)
    const footerNav = screen.getByLabelText('Footer navigation')
    expect(footerNav).toBeInTheDocument()
    expect(footerNav.querySelector('a[href="#home"]')).toBeInTheDocument()
    expect(footerNav.querySelector('a[href="#work"]')).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
