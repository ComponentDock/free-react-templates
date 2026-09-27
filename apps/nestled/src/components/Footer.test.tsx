import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { describe, expect, it } from 'vitest'

describe('Footer', () => {
  it('renders the about section', () => {
    render(<Footer />)
    expect(screen.getByText('About Nestled')).toBeInTheDocument()
  })

  it('renders the pages section', () => {
    render(<Footer />)
    expect(screen.getByText('Pages')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    const termsLinks = screen.getAllByText('Terms')
    expect(termsLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the resources section', () => {
    render(<Footer />)
    expect(screen.getByText('Resources')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
  })

  it('renders the contact section', () => {
    render(<Footer />)
    expect(screen.getAllByText('Contact').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('info@nestled.com')).toBeInTheDocument()
    expect(screen.getByText('+1 222 212 3819')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dock).toHaveAttribute('target', '_blank')
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
  })
})
