import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the spread our works heading', () => {
    render(<Footer />)
    expect(screen.getByText('Help Us Spread Our Works')).toBeInTheDocument()
  })

  it('renders the share button', () => {
    render(<Footer />)
    const btn = screen.getByRole('link', { name: /share them to social media/i })
    expect(btn).toBeInTheDocument()
  })

  it('renders Contact column with phone and email', () => {
    render(<Footer />)
    // "Contact" appears as a heading AND as a nav link — use getAllByText
    expect(screen.getAllByText('Contact').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('hello@luminary.com')).toBeInTheDocument()
  })

  it('renders Sources column', () => {
    render(<Footer />)
    expect(screen.getByText('Sources')).toBeInTheDocument()
    const sources = ['Home', 'About', 'Services', 'Portfolio', 'Blog']
    sources.forEach((s) => {
      expect(screen.getAllByRole('link', { name: s }).length).toBeGreaterThanOrEqual(1)
    })
  })

  it('renders Links column', () => {
    render(<Footer />)
    expect(screen.getByText('Links')).toBeInTheDocument()
    const links = ['FAQ', 'Terms', 'Privacy', 'Sitemap']
    links.forEach((l) => {
      expect(screen.getAllByRole('link', { name: l }).length).toBeGreaterThanOrEqual(1)
    })
  })

  it('renders social icons', () => {
    render(<Footer />)
    const socials = ['Instagram', 'Twitter', 'Facebook', 'LinkedIn', 'Pinterest', 'Dribbble']
    socials.forEach((s) => {
      expect(screen.getByLabelText(s)).toBeInTheDocument()
    })
  })

  it('renders copyright with year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument()
  })

  it('renders the footer as contentinfo', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
