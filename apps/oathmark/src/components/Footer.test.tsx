import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders About Us heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3, name: 'About Us' })).toBeInTheDocument()
  })

  it('renders 4 link columns', () => {
    render(<Footer />)
    const columns = ['Quick Links', 'Resources', 'Support', 'Company']
    for (const col of columns) {
      expect(screen.getByRole('heading', { level: 4, name: col })).toBeInTheDocument()
    }
  })

  it('has social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('contains link to componentdock.com', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('copyright text present', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(`${year}.*Oathmark.*All rights reserved`)),
    ).toBeInTheDocument()
  })
})
