import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the white bar with the brand lockup and no links until toggled', () => {
    render(<Navbar />)

    const wordmark = screen.getByText('wanderport')
    expect(wordmark).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'wanderport' })).toHaveAttribute('href', '#home')

    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Main navigation' })).toBeNull()
  })

  it('reveals the four anchor links and closes them again', () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    fireEvent.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(nav).toHaveAttribute('id', 'primary-navigation')

    const links = [
      ['Home', '#home'],
      ['Booking', '#booking'],
      ['Packages', '#package'],
      ['Contact', '#contact'],
    ] as const

    for (const [label, href] of links) {
      const link = within(nav).getByRole('link', { name: label })
      expect(link).toHaveAttribute('href', href)
      expect(link.className).toContain('uppercase')
    }

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Main navigation' })).toBeNull()
  })
})
