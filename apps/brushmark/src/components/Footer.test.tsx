import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByText('Brush')).toBeInTheDocument()
    expect(screen.getByText('mark')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    const links = ['Home', 'About', 'Portfolio', 'Blog', 'Services']
    for (const link of links) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Skype')).toBeInTheDocument()
    expect(screen.getByLabelText('Pinterest')).toBeInTheDocument()
  })

  it('links Component Dock in copyright', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/Made with/)).toBeInTheDocument()
  })
})
