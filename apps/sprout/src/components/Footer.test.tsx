import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name and about text', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /sprout/i })).toBeInTheDocument()
    expect(screen.getByText(/warm and welcoming community/i)).toBeInTheDocument()
  })

  it('renders the Connect column with nav links', () => {
    render(<Footer />)
    const connectHeading = screen.getByRole('heading', { name: /connect/i })
    expect(connectHeading).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Ministries', 'Sermons', 'Events', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders Service Hours', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /service hours/i })).toBeInTheDocument()
    expect(screen.getByText(/sunday: 9:00 am/i)).toBeInTheDocument()
    expect(screen.getByText(/wednesday: 6:00 pm/i)).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /youtube/i })).toBeInTheDocument()
  })
})
