import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    const logo = screen.getByRole('link', { name: /Ledgerly/ })
    expect(logo).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toHaveAttribute('href', '#')
    expect(screen.getByLabelText('Twitter')).toHaveAttribute('href', '#')
    expect(screen.getByLabelText('Instagram')).toHaveAttribute('href', '#')
    expect(screen.getByLabelText('Dribbble')).toHaveAttribute('href', '#')
  })

  it('renders recent posts', () => {
    render(<Footer />)
    expect(screen.getByText('Recent Posts')).toBeInTheDocument()
    expect(screen.getAllByText('Aliquam ac eleifend metus')).toHaveLength(2)
    expect(screen.getByText('Donec in libero sit amet mi')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'FAQ' })).toBeInTheDocument()
  })

  it('links to Component Dock in the bottom bar', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
