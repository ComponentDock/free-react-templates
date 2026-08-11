import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand, Home link and icon buttons', () => {
    const { container } = render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Settle' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')

    for (const label of [
      'Toggle dark mode',
      'Search products',
      'Open wishlist',
      'Open shopping cart',
    ]) {
      expect(screen.getByRole('button', { name: label })).toBeInTheDocument()
    }

    // Dark mode is off by default: no .dark on <html>.
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(container.querySelectorAll('svg')).toHaveLength(4)
  })

  it('toggles the .dark class on the document root and reflects the mode', () => {
    const { unmount } = render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })
    fireEvent.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    fireEvent.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)

    // Cleanup removes the class.
    fireEvent.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    unmount()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
