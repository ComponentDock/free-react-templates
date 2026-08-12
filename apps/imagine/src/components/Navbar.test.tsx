import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the wordmark, nav links, and Pages dropdown toggle', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Imagine home' })).toHaveTextContent('Imagine')
    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    for (const link of ['Home', 'Service', 'Project', 'Blog', 'Team']) {
      expect(within(mainNav).getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(within(mainNav).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(within(mainNav).getByRole('button', { name: 'Pages menu' })).toBeInTheDocument()
  })

  it('is a light navbar', () => {
    render(<Navbar />)
    expect(document.querySelector('header')).toHaveClass('bg-white/95')
  })

  it('opens and closes the Pages dropdown', () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Pages menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const menu = screen.getByRole('menu', { name: 'Pages' })
    for (const item of ['Generic', 'Elements']) {
      expect(within(menu).getByRole('menuitem', { name: item })).toBeInTheDocument()
    }

    fireEvent.click(toggle)
    expect(screen.queryByRole('menu', { name: 'Pages' })).not.toBeInTheDocument()
  })

  it('closes the dropdown when a menu item is activated', () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: 'Pages menu' }))
    fireEvent.click(screen.getByRole('menuitem', { name: 'Generic' }))
    expect(screen.queryByRole('menu', { name: 'Pages' })).not.toBeInTheDocument()
  })

  it('opens and closes the mobile menu', () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobileNav).getByRole('link', { name: 'Service' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Elements' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Close mobile menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link or the backdrop is activated', () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    fireEvent.click(
      within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', {
        name: 'Project',
      }),
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    fireEvent.click(screen.getByRole('button', { name: 'Dismiss mobile menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a Pages item is activated', () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    fireEvent.click(
      within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', {
        name: 'Generic',
      }),
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu with the Escape key and stays open on other keys', () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Enter' })
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
