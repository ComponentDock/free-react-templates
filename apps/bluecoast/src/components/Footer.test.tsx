import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site logo', () => {
    render(<Footer />)
    expect(screen.getByText('BlueCoast')).toBeInTheDocument()
  })

  it('renders "Latest Properties" heading', () => {
    render(<Footer />)
    expect(screen.getByText('Latest Properties')).toBeInTheDocument()
  })

  it('displays about text', () => {
    render(<Footer />)
    expect(screen.getByText(/BlueCoast helps you find/)).toBeInTheDocument()
  })

  it('shows 3 latest property listings', () => {
    render(<Footer />)
    expect(screen.getByText('Skyline Apartment')).toBeInTheDocument()
    expect(screen.getByText('Sunset Villa')).toBeInTheDocument()
    expect(screen.getByText('Lakeview Condo')).toBeInTheDocument()
  })

  it('shows property prices', () => {
    render(<Footer />)
    expect(screen.getByText('$2,500/mo')).toBeInTheDocument()
    expect(screen.getByText('$3,800/mo')).toBeInTheDocument()
    expect(screen.getByText('$1,900/mo')).toBeInTheDocument()
  })

  it('renders footer navigation links', () => {
    render(<Footer />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(screen.getByText('Properties')).toBeInTheDocument()
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('displays the phone number', () => {
    render(<Footer />)
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('displays copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(`${year} BlueCoast`))).toBeInTheDocument()
  })
})
