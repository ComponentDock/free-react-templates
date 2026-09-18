import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders About Agency column', () => {
    render(<Footer />)
    expect(screen.getByText('About Agency')).toBeInTheDocument()
    expect(screen.getByText('Managed Website')).toBeInTheDocument()
    expect(screen.getByText('Manage Reputation')).toBeInTheDocument()
  })

  it('renders Navigation Links columns', () => {
    render(<Footer />)
    const navHeaders = screen.getAllByText('Navigation Links')
    expect(navHeaders.length).toBe(2)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Works & Builders')).toBeInTheDocument()
  })

  it('renders Instafeed gallery', () => {
    render(<Footer />)
    expect(screen.getByText('Instafeed')).toBeInTheDocument()
    const images = screen.getAllByAltText(/Instagram/)
    expect(images.length).toBe(8)
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders Component Dock attribution', () => {
    render(<Footer />)
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
    const link = screen.getByText('Component Dock').closest('a')!
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('has dark footer background', () => {
    render(<Footer />)
    const footer = screen.getByText('About Agency').closest('footer')!
    expect(footer).toHaveClass('bg-footer')
  })
})
