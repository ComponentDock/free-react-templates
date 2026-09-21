import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer columns', () => {
    render(<Footer />)
    expect(screen.getAllByText('Fragstorm').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Categories')).toBeInTheDocument()
    expect(screen.getByText('Helpful Links')).toBeInTheDocument()
    expect(screen.getByText('Community')).toBeInTheDocument()
  })

  it('renders column links', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('PlayStation')).toBeInTheDocument()
    expect(screen.getByText('Forums')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('displays copyright year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument()
  })

  it('has role contentinfo', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
