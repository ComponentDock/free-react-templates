import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('renders the logo, nav links, Pages dropdown, and Say Hi link', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Axiom home' })).toHaveTextContent('Axiom')
    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    for (const link of ['Home', 'About', 'Work', 'Services', 'Blog', 'Contact']) {
      expect(within(mainNav).getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(within(mainNav).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(within(mainNav).getByRole('link', { name: 'Home' })).toHaveClass('after:scale-x-100')
    expect(within(mainNav).getByRole('button', { name: 'Pages menu' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Say Hi' })).toHaveClass('after:bg-yellow')
  })

  it('is transparent over the white hero', () => {
    render(<Header />)
    expect(document.querySelector('header')).toHaveClass('bg-transparent')
  })

  it('opens and closes the Pages dropdown', () => {
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Pages menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const menu = screen.getByRole('menu', { name: 'Pages' })
    for (const item of ['Work Details', 'Elements']) {
      expect(within(menu).getByRole('menuitem', { name: item })).toBeInTheDocument()
    }

    fireEvent.click(toggle)
    expect(screen.queryByRole('menu', { name: 'Pages' })).not.toBeInTheDocument()
  })

  it('closes the dropdown when a menu item is activated', () => {
    render(<Header />)

    fireEvent.click(screen.getByRole('button', { name: 'Pages menu' }))
    fireEvent.click(screen.getByRole('menuitem', { name: 'Work Details' }))
    expect(screen.queryByRole('menu', { name: 'Pages' })).not.toBeInTheDocument()
  })

  it('opens and closes the mobile menu', () => {
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobileNav).getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Say Hi' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Close mobile menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link, backdrop, or Pages item is activated', () => {
    render(<Header />)

    fireEvent.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    fireEvent.click(
      within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', {
        name: 'Work',
      }),
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    fireEvent.click(screen.getByRole('button', { name: 'Dismiss mobile menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    fireEvent.click(
      within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', {
        name: 'Elements',
      }),
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    fireEvent.click(
      within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', {
        name: 'Say Hi',
      }),
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu with the Escape key and stays open on other keys', () => {
    render(<Header />)

    fireEvent.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Enter' })
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
