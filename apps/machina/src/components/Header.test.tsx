import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Header } from './Header'
import { BRAND_NAME, NAV_LINKS, PAGES_DROPDOWN, SEARCH_PLACEHOLDER } from '../data'

describe('Header', () => {
  it('renders the logo and all nav links', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: BRAND_NAME })).toBeInTheDocument()
    NAV_LINKS.forEach((link) => {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    })
  })

  it('opens and closes the Pages dropdown on hover and focus', () => {
    render(<Header />)
    const pagesLink = screen.getByRole('link', { name: /pages/i })
    expect(screen.queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()

    fireEvent.mouseEnter(pagesLink)
    PAGES_DROPDOWN.forEach((subLink) => {
      expect(screen.getByRole('link', { name: subLink })).toBeInTheDocument()
    })
    fireEvent.mouseLeave(pagesLink)
    expect(screen.queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()

    fireEvent.focus(pagesLink)
    expect(screen.getByRole('link', { name: 'Element' })).toBeInTheDocument()
    fireEvent.blur(pagesLink)
    expect(screen.queryByRole('link', { name: 'Element' })).not.toBeInTheDocument()
  })

  it('opens the search overlay from the search icon', () => {
    render(<Header />)
    expect(screen.queryByRole('searchbox')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Open search' }))
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(SEARCH_PLACEHOLDER)).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('searchbox')).not.toBeInTheDocument()
  })

  it('toggles the mobile menu with the hamburger', () => {
    render(<Header />)
    const hamburger = screen.getByRole('button', { name: 'Open menu' })
    expect(hamburger).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(hamburger)
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const mobileContact = within(mobileNav).getByRole('link', { name: 'Contact' })
    mobileContact.addEventListener('click', (event) => event.preventDefault(), { once: true })
    fireEvent.click(mobileContact)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
