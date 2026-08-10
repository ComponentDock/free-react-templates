import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Header } from './Header'
import { brandName, darkModeLabel, menuToggleLabel, navLinks, searchLabel, tagline } from '../data'

describe('Header', () => {
  afterEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('renders the pink top bar with social icons and register/login links', () => {
    render(<Header />)

    for (const name of ['Pinterest', 'Facebook', 'Twitter', 'Dribbble', 'Behance', 'LinkedIn']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Register' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Login' })).toBeInTheDocument()
  })

  it('renders the site name, tagline, nav links and search button', () => {
    render(<Header />)

    expect(screen.getByText(brandName)).toBeInTheDocument()
    expect(screen.getByText(tagline)).toBeInTheDocument()
    // Desktop + mobile navs both render their links (mobile is hidden on lg+)
    for (const label of navLinks) {
      expect(screen.getAllByRole('link', { name: label })).toHaveLength(2)
    }
    expect(screen.getByRole('button', { name: searchLabel })).toBeInTheDocument()
  })

  it('toggles dark mode on the document root and persists the choice', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: darkModeLabel })

    expect(document.documentElement).not.toHaveClass('dark')
    fireEvent.click(toggle)
    expect(document.documentElement).toHaveClass('dark')
    expect(window.localStorage.getItem('feast-theme')).toBe('dark')

    fireEvent.click(toggle)
    expect(document.documentElement).not.toHaveClass('dark')
    expect(window.localStorage.getItem('feast-theme')).toBe('light')
  })

  it('starts in dark mode when the stored theme is dark', () => {
    window.localStorage.setItem('feast-theme', 'dark')
    render(<Header />)
    expect(document.documentElement).toHaveClass('dark')
  })

  it('removes the dark class on unmount', () => {
    const { unmount } = render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: darkModeLabel }))
    expect(document.documentElement).toHaveClass('dark')
    unmount()
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('opens and closes the mobile menu', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: menuToggleLabel })
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(mobileNav).not.toHaveClass('hidden')

    fireEvent.click(screen.getAllByRole('link', { name: 'Recipes' })[1]!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(mobileNav).toHaveClass('hidden')
  })
})
