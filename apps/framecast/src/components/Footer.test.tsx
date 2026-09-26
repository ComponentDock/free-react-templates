import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the FRAMECAST brand name', () => {
    render(<Footer />)
    expect(screen.getByText('FRAMECAST')).toBeInTheDocument()
  })

  it('renders the brand description', () => {
    render(<Footer />)
    expect(screen.getByText(/Creative studio specializing/)).toBeInTheDocument()
  })

  it('renders the Services column', () => {
    render(<Footer />)
    expect(screen.getByText('3D Modeling')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Design')).toBeInTheDocument()
    expect(screen.getByText('Architectural Design')).toBeInTheDocument()
    expect(screen.getByText('Brand Identity')).toBeInTheDocument()
  })

  it('renders the Useful Links column', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Careers')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the Follow Us section with social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders the copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/Framecast. All rights reserved/)).toBeInTheDocument()
  })

  it('links to componentdock.com in the footer', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('displays "More templates at Component Dock" text', () => {
    render(<Footer />)
    expect(screen.getByText(/More templates at/)).toBeInTheDocument()
  })
})
