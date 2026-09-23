import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders about section with social icons', () => {
    render(<Footer />)

    expect(screen.getByText('About PageTurn')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders footer link columns', () => {
    render(<Footer />)

    expect(screen.getByText('Links', { selector: 'h4' })).toBeInTheDocument()
    expect(screen.getByText('Services', { selector: 'h4' })).toBeInTheDocument()
    expect(screen.getByText('Have a Questions?')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
  })

  it('renders copyright with Component Dock link', () => {
    render(<Footer />)

    expect(screen.getByText(/PageTurn\. All rights reserved/)).toBeInTheDocument()
    const cdLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(cdLink).toHaveAttribute('target', '_blank')
  })

  it('renders contact details', () => {
    render(<Footer />)

    expect(screen.getByText('2820 Maple Avenue, Portland, OR 97201')).toBeInTheDocument()
    expect(screen.getByText('+1 (503) 555-0142')).toBeInTheDocument()
    expect(screen.getByText('franklin@example.com')).toBeInTheDocument()
  })
})
