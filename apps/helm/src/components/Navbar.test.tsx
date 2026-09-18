import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Helm logo', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Helm' })).toBeInTheDocument()
  })

  it('renders the left navigation links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'Technology' })).toHaveAttribute('href', '#features')
    expect(screen.getByRole('link', { name: 'Careers' })).toHaveAttribute('href', '#blog')
  })

  it('renders the right navigation links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '#blog')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })
})
