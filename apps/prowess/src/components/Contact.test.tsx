import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the Contact Us heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument()
  })

  it('renders the Get in Touch subtitle', () => {
    render(<Contact />)
    expect(screen.getByText('Get in Touch')).toBeInTheDocument()
  })

  it('renders the Phone section', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: 'Phone' })).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 987-6543')).toBeInTheDocument()
  })

  it('renders the Email section', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: 'Email' })).toBeInTheDocument()
    expect(screen.getByText('info@prowess.com')).toBeInTheDocument()
    expect(screen.getByText('support@prowess.com')).toBeInTheDocument()
  })

  it('renders the Location section', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: 'Location' })).toBeInTheDocument()
    expect(screen.getByText('123 Fitness Avenue')).toBeInTheDocument()
    expect(screen.getByText('New York, NY 10001')).toBeInTheDocument()
  })

  it('has a section with id="contact"', () => {
    render(<Contact />)
    expect(document.getElementById('contact')).toBeInTheDocument()
  })

  it('renders three contact cards', () => {
    render(<Contact />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(3)
  })
})
