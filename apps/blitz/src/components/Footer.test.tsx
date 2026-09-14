import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders logo', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /blitz/i })).toBeInTheDocument()
  })

  it('renders service links', () => {
    render(<Footer />)
    const socialMediaLinks = screen.getAllByText('Social media')
    expect(socialMediaLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('renders menu links', () => {
    render(<Footer />)
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('About us').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Services').length).toBeGreaterThanOrEqual(1)
  })

  it('renders about links', () => {
    render(<Footer />)
    expect(screen.getByText('The team')).toBeInTheDocument()
    expect(screen.getByText('History')).toBeInTheDocument()
  })

  it('renders componentdock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Pinterest')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    const matches = screen.getAllByText(
      (_, element) => element?.textContent?.includes(year) ?? false,
    )
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })
})
