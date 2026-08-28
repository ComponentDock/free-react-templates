import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Tillman')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders the phone CTA button', () => {
    render(<Navbar />)
    expect(screen.getByText('(10) 892-293 2678')).toBeInTheDocument()
  })

  it('renders the mobile menu button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
