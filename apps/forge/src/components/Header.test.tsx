import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('renders the wordmark, nav links, dropdown, and search field', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Forge home' })).toHaveTextContent('Forge')
    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    for (const link of ['Home', 'About', 'Portfolio', 'Contact']) {
      expect(within(mainNav).getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(within(mainNav).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(within(mainNav).getByRole('textbox', { name: 'Search' })).toHaveAttribute(
      'placeholder',
      'Search...',
    )
  })

  it('opens and closes the Services dropdown', () => {
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Services menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const menu = screen.getByRole('menu', { name: 'Services' })
    for (const item of ['Branding', 'Web Design', 'App Design', 'Start Up']) {
      expect(within(menu).getByRole('menuitem', { name: item })).toBeInTheDocument()
    }

    fireEvent.click(toggle)
    expect(screen.queryByRole('menu', { name: 'Services' })).not.toBeInTheDocument()
  })

  it('closes the dropdown when a menu item is activated', () => {
    render(<Header />)

    fireEvent.click(screen.getByRole('button', { name: 'Services menu' }))
    fireEvent.click(screen.getByRole('menuitem', { name: 'Web Design' }))
    expect(screen.queryByRole('menu', { name: 'Services' })).not.toBeInTheDocument()
  })

  it('is transparent over the hero at desktop width', () => {
    render(<Header />)
    expect(document.querySelector('header')).toHaveClass('bg-transparent')
  })

  it('opens and closes the mobile menu', () => {
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobileNav).getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Start Up' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Close mobile menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link or the backdrop is activated', () => {
    render(<Header />)

    fireEvent.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    fireEvent.click(
      within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', {
        name: 'Portfolio',
      }),
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    fireEvent.click(screen.getByRole('button', { name: 'Dismiss mobile menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a service link is activated', () => {
    render(<Header />)

    fireEvent.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    fireEvent.click(
      within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', {
        name: 'App Design',
      }),
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu with the Escape key', () => {
    render(<Header />)

    fireEvent.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('keeps the mobile menu open on other keys', () => {
    render(<Header />)

    fireEvent.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    fireEvent.keyDown(window, { key: 'Enter' })
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()
  })
})
