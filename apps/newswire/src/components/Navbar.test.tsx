import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'
import { navLinks } from '../data'

describe('Navbar', () => {
  it('renders all section links with Home active', () => {
    render(<Navbar />)

    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(nav).toHaveClass('font-mono')

    for (const link of navLinks) {
      const element = screen.getByRole('link', { name: link })
      expect(element).toHaveClass('uppercase')
      if (link === 'Home') {
        expect(element).toHaveAttribute('aria-current', 'page')
        expect(element).toHaveClass('border-accent')
      } else {
        expect(element).not.toHaveAttribute('aria-current')
      }
    }
  })
})
