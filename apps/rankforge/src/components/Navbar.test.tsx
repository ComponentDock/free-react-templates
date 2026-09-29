import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name, section links, and a Contact Us button', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'RankForge' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    for (const label of ['Home', 'About Us', 'Services', 'Contact', 'Blog']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
  })
})
