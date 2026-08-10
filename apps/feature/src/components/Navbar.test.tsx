import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the script logo and the uppercase menu with Home active', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Feature.' })).toBeInTheDocument()
    for (const label of ['Home', 'Lifestyle', 'Travels', 'Gallery', 'About Me']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
  })

  it('opens and closes the Blog dropdown via hover and focus', () => {
    render(<Navbar />)
    const blog = screen.getByRole('button', { name: 'Blog' })
    const dropdown = blog.closest('div')!

    expect(screen.queryByRole('link', { name: 'Commercial' })).not.toBeInTheDocument()
    expect(blog).toHaveAttribute('aria-expanded', 'false')

    fireEvent.mouseEnter(dropdown)
    expect(screen.getByRole('link', { name: 'Commercial' })).toBeInTheDocument()
    expect(blog).toHaveAttribute('aria-expanded', 'true')

    fireEvent.focus(blog)
    expect(screen.getByRole('link', { name: 'Apartment' })).toBeInTheDocument()

    // Blurring to a target INSIDE the dropdown keeps it open.
    fireEvent.blur(blog, { relatedTarget: screen.getByRole('link', { name: 'House' }) })
    expect(screen.getByRole('link', { name: 'Building' })).toBeInTheDocument()

    fireEvent.mouseLeave(dropdown)
    expect(screen.queryByRole('link', { name: 'Commercial' })).not.toBeInTheDocument()

    // Focus opens it again; blurring to an outside target closes it.
    fireEvent.focus(blog)
    expect(screen.getByRole('link', { name: 'Commercial' })).toBeInTheDocument()
    fireEvent.blur(blog, { relatedTarget: document.body })
    expect(screen.queryByRole('link', { name: 'Commercial' })).not.toBeInTheDocument()
  })

  it('toggles the dark class on <html> and cleans up on unmount', () => {
    const { unmount } = render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })

    fireEvent.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    fireEvent.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)

    unmount()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
