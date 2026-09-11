import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the About section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders navigation columns', () => {
    render(<Footer />)
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Resources' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Legal' })).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
