import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand and link columns', () => {
    render(<Footer />)
    expect(screen.getByText('Statutory')).toBeInTheDocument()
    expect(screen.getByText('Explore')).toBeInTheDocument()
    expect(screen.getByText('Legal')).toBeInTheDocument()
    expect(screen.getByText('Have a Question?')).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('+00 1234 567')).toBeInTheDocument()
    expect(screen.getByText('info@statutory.com')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/Statutory\. All rights reserved/)).toBeInTheDocument()
  })
})
