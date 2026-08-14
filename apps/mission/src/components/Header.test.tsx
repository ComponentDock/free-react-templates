import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { navLinks } from '../data'
import { Header } from './Header'

describe('Header', () => {
  it('renders the logo, nav links with dropdowns, and the ghost Donate Now button', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: /Mission/ })).toBeInTheDocument()
    for (const link of navLinks) {
      // Blog/Pages also have a same-named dropdown child — take the top-level link.
      const topLink =
        link.children.length > 0
          ? screen.getAllByRole('link', { name: link.label })[0]
          : screen.getByRole('link', { name: link.label })
      expect(topLink).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')

    // Dropdown items for Blog and Pages render inside the submenus.
    expect(screen.getByRole('link', { name: 'Single Blog', hidden: true })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Causes Details', hidden: true })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Elements', hidden: true })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Donate Now' })).toHaveClass('border-white')
  })

  it('toggles the mobile menu with aria-expanded and closes it on link click', () => {
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu', hidden: true })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(screen.getAllByRole('link', { name: 'Blog' })[0]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('calls onDonate when the Donate Now button is clicked', () => {
    const onDonate = vi.fn()
    render(<Header onDonate={onDonate} />)

    fireEvent.click(screen.getByRole('link', { name: 'Donate Now' }))

    expect(onDonate).toHaveBeenCalledTimes(1)
  })

  it('closes the mobile menu when a dropdown child is clicked', () => {
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu', hidden: true })
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(screen.getByRole('link', { name: 'Single Blog', hidden: true }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
