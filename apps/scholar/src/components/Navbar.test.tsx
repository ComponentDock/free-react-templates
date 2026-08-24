import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Scholar logo, search input, nav links, cart, and sign-in button', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Scholar' })).toBeInTheDocument()
    expect(screen.getByLabelText('Search courses')).toBeInTheDocument()

    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    for (const label of ['Home', 'Browse Courses', 'About', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByRole('button', { name: /Shopping cart/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument()
  })
})
