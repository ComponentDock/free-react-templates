import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { value, writable: true, configurable: true })
}

describe('Navbar', () => {
  it('renders the white bar with the wordmark and a closed hamburger toggle', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('bg-white')
    expect(header).not.toHaveClass('shadow-[0_10px_30px_0_rgba(158,158,158,0.3)]')
    expect(screen.getByRole('link', { name: 'voyara' })).toHaveAttribute('href', '#home')

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle.querySelector('svg')?.classList).toContain('lucide-menu')
    expect(screen.queryByRole('link', { name: 'Facilities' })).not.toBeInTheDocument()
  })

  it('opens the four-link panel on toggle and swaps the icon', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    const toggle = screen.getByRole('button', { name: 'Close menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle.querySelector('svg')?.classList).toContain('lucide-x')
    expect(screen.getByRole('link', { name: 'Facilities' })).toHaveAttribute('href', '#facilities')
    expect(screen.getByRole('link', { name: 'Service' })).toHaveAttribute('href', '#service')
    expect(screen.getByRole('link', { name: 'Book' })).toHaveAttribute('href', '#book')
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
  })

  it('closes the panel from the wordmark link as well', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    fireEvent.click(screen.getByRole('link', { name: 'voyara' }))
    expect(screen.queryByRole('link', { name: 'Facilities' })).not.toBeInTheDocument()
  })

  it('closes the panel when a section link is clicked', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    fireEvent.click(screen.getByRole('link', { name: 'Book' }))
    expect(screen.queryByRole('link', { name: 'Book' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('adds the soft drop shadow once the page is scrolled and drops it back at the top', () => {
    render(<Navbar />)
    setScrollY(120)
    fireEvent.scroll(window)
    expect(screen.getByRole('banner')).toHaveClass('shadow-[0_10px_30px_0_rgba(158,158,158,0.3)]')

    setScrollY(0)
    fireEvent.scroll(window)
    expect(screen.getByRole('banner')).not.toHaveClass(
      'shadow-[0_10px_30px_0_rgba(158,158,158,0.3)]',
    )
  })
})
