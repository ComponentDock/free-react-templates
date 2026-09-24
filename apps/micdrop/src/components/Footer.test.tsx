import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the MicDrop brand', () => {
    render(<Footer />)
    expect(screen.getByText('MicDrop')).toBeInTheDocument()
  })

  it('renders the brand description', () => {
    render(<Footer />)
    expect(screen.getByText(/Your go-to podcast/)).toBeInTheDocument()
  })

  it('renders all footer link categories', () => {
    render(<Footer />)
    expect(screen.getByText('Podcast')).toBeInTheDocument()
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByText('Resources')).toBeInTheDocument()
    expect(screen.getByText('Legal')).toBeInTheDocument()
  })

  it('renders footer navigation links', () => {
    render(<Footer />)
    expect(screen.getByText('Episodes')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
  })

  it('renders social media icons with labels', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('has contentinfo role', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the "More templates at" text', () => {
    render(<Footer />)
    expect(screen.getByText(/More templates at/)).toBeInTheDocument()
  })
})
