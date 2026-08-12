import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import { Navbar } from './Navbar'
import { CLASSES_DROPDOWN, NAV_LINKS } from '../data'

describe('Navbar', () => {
  it('renders the uppercase wordmark and all site links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Sculpt' })).toHaveAttribute('href', '#home')
    for (const link of NAV_LINKS) {
      if (link.label === 'Classes') {
        expect(screen.getByRole('button', { name: /Classes/ })).toBeInTheDocument()
      } else {
        expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
      }
    }
  })

  it('reveals the Classes dropdown on click', () => {
    render(<Navbar />)
    const classesButton = screen.getByRole('button', { name: /Classes/ })
    expect(screen.queryByRole('link', { name: CLASSES_DROPDOWN[0]! })).not.toBeInTheDocument()
    fireEvent.click(classesButton)
    for (const item of CLASSES_DROPDOWN) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
    fireEvent.click(classesButton)
    expect(screen.queryByRole('link', { name: CLASSES_DROPDOWN[0]! })).not.toBeInTheDocument()
  })

  it('toggles the mobile burger menu with aria-expanded', () => {
    render(<Navbar />)
    const burger = screen.getByRole('button', { name: 'Toggle navigation menu' })
    expect(burger).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(burger)
    expect(burger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
    fireEvent.click(burger)
    expect(burger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is chosen', () => {
    render(<Navbar />)
    const burger = screen.getByRole('button', { name: 'Toggle navigation menu' })
    fireEvent.click(burger)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(mobileNav).toBeInTheDocument()
    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Schedule' }))
    expect(burger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
