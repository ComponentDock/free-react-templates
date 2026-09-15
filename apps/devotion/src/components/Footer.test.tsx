import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Devotion')).toBeInTheDocument()
  })

  it('shows quick menu links', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Menu')).toBeInTheDocument()
    for (const link of ['About', 'Services', 'Approach', 'News', 'Careers']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('shows ministries links', () => {
    render(<Footer />)
    expect(screen.getByText('Ministries')).toBeInTheDocument()
    for (const link of ['Children', 'Women', 'Bible Study', 'Church', 'Missionaries']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('shows copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('has social icon links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })
})
