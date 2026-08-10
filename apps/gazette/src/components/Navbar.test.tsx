import { afterEach, describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Navbar } from './Navbar'
import { categoryMenu, travelMenu } from '../data'

afterEach(() => {
  document.documentElement.classList.remove('dark')
})

describe('Navbar', () => {
  it('renders the centered wordmark logo', () => {
    render(<Navbar />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Gazette')
  })

  it('renders centered uppercase nav links with Home active', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(nav).toHaveTextContent('Home')
    expect(nav).toHaveTextContent('About')
    expect(nav).toHaveTextContent('Contact')
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
  })

  it('opens and closes the Travel dropdown', () => {
    render(<Navbar />)
    const travel = screen.getByRole('button', { name: 'Travel' })
    fireEvent.click(travel)
    for (const item of travelMenu) {
      expect(screen.getAllByText(item).length).toBeGreaterThan(0)
    }
    fireEvent.click(travel)
    expect(screen.queryByText('Asia')).not.toBeInTheDocument()
  })

  it('switches between the Travel and Categories dropdowns', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Travel' }))
    fireEvent.click(screen.getByRole('button', { name: 'Categories' }))
    expect(screen.queryByText('Asia')).not.toBeInTheDocument()
    for (const item of categoryMenu) {
      expect(screen.getAllByText(item).length).toBeGreaterThan(0)
    }
  })

  it('opens and closes the mobile menu with the burger toggle', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobile).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('expands every mobile dropdown and closes the menu from any link', () => {
    render(<Navbar />)
    const openMenu = () => fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    openMenu()
    let mobile = screen.getByRole('navigation', { name: 'Mobile' })
    fireEvent.click(within(mobile).getByRole('button', { name: 'Travel' }))
    for (const item of travelMenu) {
      expect(within(mobile).getAllByText(item).length).toBeGreaterThan(0)
    }
    fireEvent.click(within(mobile).getByRole('link', { name: 'Asia' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    openMenu()
    mobile = screen.getByRole('navigation', { name: 'Mobile' })
    fireEvent.click(within(mobile).getByRole('button', { name: 'Categories' }))
    for (const item of categoryMenu) {
      expect(within(mobile).getAllByText(item).length).toBeGreaterThan(0)
    }
    fireEvent.click(within(mobile).getByRole('link', { name: 'Lifestyle' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    openMenu()
    fireEvent.click(
      within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', {
        name: 'Home',
      }),
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    openMenu()
    fireEvent.click(
      within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', {
        name: 'About',
      }),
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    openMenu()
    fireEvent.click(
      within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', {
        name: 'Contact',
      }),
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('toggles dark mode on the document element', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })
    fireEvent.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    fireEvent.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
