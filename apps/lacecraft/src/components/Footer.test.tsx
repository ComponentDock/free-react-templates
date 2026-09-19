import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Lacecraft')).toBeInTheDocument()
  })

  it('renders the contentinfo landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders shop, help, and about link columns', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Running' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Size Guide' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Our Story' })).toBeInTheDocument()
  })

  it('renders the Component Dock link with correct href', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders copyright and social icons', () => {
    render(<Footer />)
    expect(screen.getByText(/Lacecraft\. All rights reserved/)).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
  })
})
