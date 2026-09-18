import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name and description', () => {
    render(<Footer />)
    expect(screen.getByText('Greenplate')).toBeInTheDocument()
    expect(screen.getByText(/freshest organic vegetables and fruits/)).toBeInTheDocument()
  })

  it('renders Customer Service and Delivery link columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Customer Service' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Delivery' })).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('123 Organic Lane, Green City')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('info@free-template.com')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument()
  })
})
