import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import {
  BRAND,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  MENU_CLOSE_LABEL,
  MENU_ID,
  MENU_OPEN_LABEL,
  NAV,
  THEME_LABEL,
} from '../lib/site'

const panel = () => document.getElementById(MENU_ID)

describe('Navbar', () => {
  it('is the white bar with the contact strip above the wordmark and the five labels', () => {
    render(<Navbar />)

    expect(screen.getByRole('banner')).toHaveClass('sticky', 'bg-white')
    expect(screen.getByRole('link', { name: `${BRAND} — home` })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: CONTACT_PHONE })).toHaveAttribute('href', 'tel:+442079460188')
    expect(screen.getByRole('link', { name: CONTACT_EMAIL })).toHaveAttribute(
      'href',
      `mailto:${CONTACT_EMAIL}`,
    )

    const nav = screen.getByRole('navigation', { name: 'Primary' })

    expect(within(nav).getAllByRole('link').map((link) => link.textContent)).toEqual(
      NAV.map((item) => item.label),
    )
    expect(within(nav).getByRole('link', { name: 'Reservations' })).toHaveAttribute(
      'href',
      '#reservation',
    )
  })

  it('folds the labels into the panel the toggle controls', () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: MENU_OPEN_LABEL })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-controls', MENU_ID)
    expect(panel()).toBeNull()

    fireEvent.click(toggle)

    expect(screen.getByRole('button', { name: MENU_CLOSE_LABEL })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(within(panel() as HTMLElement).getAllByRole('link')).toHaveLength(NAV.length)
  })

  it('closes the panel on Escape and ignores every other key while it is open', () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: MENU_OPEN_LABEL }))
    fireEvent.keyDown(document, { key: 'Tab' })

    expect(panel()).not.toBeNull()

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(panel()).toBeNull()
  })

  it('closes the panel again when a label inside it is chosen', () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: MENU_OPEN_LABEL }))

    const link = within(panel() as HTMLElement).getByRole('link', { name: 'Gallery' })

    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    fireEvent.click(link)

    expect(panel()).toBeNull()
  })

  it('flips the theme class on the document root and reports its own state', () => {
    const { unmount } = render(<Navbar />)

    const toggle = screen.getByRole('button', { name: THEME_LABEL })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.documentElement).not.toHaveClass('dark')

    fireEvent.click(toggle)

    expect(screen.getByRole('button', { name: THEME_LABEL })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(document.documentElement).toHaveClass('dark')

    unmount()

    expect(document.documentElement).not.toHaveClass('dark')
  })
})
