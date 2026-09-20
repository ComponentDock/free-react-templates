import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders logo, about text, and Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText(/huddle/)).toBeInTheDocument()
    expect(screen.getByText(/premier conference/)).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('renders quick menu links', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Menu')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Speakers')).toBeInTheDocument()
    expect(screen.getByText('Sponsors')).toBeInTheDocument()
    expect(screen.getByText('Get Ticket')).toBeInTheDocument()
    expect(screen.getByText('Events')).toBeInTheDocument()
  })

  it('renders social icon links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('links to componentdock.com', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
