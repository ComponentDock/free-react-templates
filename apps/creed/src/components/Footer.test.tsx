import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the church name', () => {
    render(<Footer />)
    expect(screen.getByText('Creed')).toBeInTheDocument()
  })

  it('shows contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/1481 Creekside Lane/i)).toBeInTheDocument()
    expect(screen.getByText(/\+53 345 7953 32453/)).toBeInTheDocument()
    expect(screen.getByText(/info@creedchurch\.org/)).toBeInTheDocument()
  })

  it('has useful links', () => {
    render(<Footer />)
    expect(screen.getByText('Useful Links')).toBeInTheDocument()
    for (const link of ['Home', 'About Us', 'Sermons', 'Ministries', 'Contact']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('shows the why choose us section', () => {
    render(<Footer />)
    expect(screen.getByText('Why Choose Us?')).toBeInTheDocument()
  })
})
