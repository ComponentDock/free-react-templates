import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site name and social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Homeward/i })).toHaveAttribute('href', '#home')
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
  })

  it('renders information contact details', () => {
    render(<Footer />)
    expect(screen.getByText('+10 367 267 2678')).toBeInTheDocument()
    expect(screen.getByText('info@homeward.com')).toBeInTheDocument()
    expect(screen.getByText(/200, A-block, Green road, USA/)).toBeInTheDocument()
  })

  it('renders useful links and property types', () => {
    render(<Footer />)
    expect(screen.getByText('Useful Links')).toBeInTheDocument()
    expect(screen.getByText('Property Types')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'About' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('link', { name: 'Houses' })).toBeInTheDocument()
  })

  it('includes a link to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the submit listing button', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Submit Listing/i })).toBeInTheDocument()
  })

  it('renders bottom navigation links', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
