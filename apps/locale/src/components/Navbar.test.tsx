import { fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import {
  ADD_LISTING_LABEL,
  BRAND,
  CLOSE_LABEL,
  MENU_DIALOG_LABEL,
  MENU_LABEL,
  NAV_LINKS,
  SEARCH_LABEL,
  SIGN_IN_LABEL,
} from '../lib/site'

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { value, writable: true, configurable: true })
  fireEvent.scroll(window)
}

function openPanel() {
  fireEvent.click(screen.getByRole('button', { name: MENU_LABEL }))
  return screen.getByRole('dialog', { name: MENU_DIALOG_LABEL })
}

afterEach(() => {
  setScrollY(0)
})

describe('Navbar', () => {
  it('renders the brand, the inline search field and the five primary links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: BRAND })).toBeInTheDocument()
    expect(screen.getByRole('searchbox', { name: SEARCH_LABEL })).toBeInTheDocument()
    for (const link of NAV_LINKS) {
      expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThan(0)
    }
  })

  it('renders the dropdown children of the Listing and Blog rows', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Listing Details' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Element' })).toBeInTheDocument()
  })

  it('shows the Sign In link and the Add Listing call to action in the wide bar', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: SIGN_IN_LABEL })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: ADD_LISTING_LABEL })).toBeInTheDocument()
    expect(screen.getByTestId('account-actions')).not.toHaveClass('hidden')
  })

  it('starts transparent and turns into a translucent navy bar past 50px', () => {
    render(<Navbar />)
    const bar = screen.getByRole('banner')

    expect(bar).toHaveClass('bg-transparent')

    setScrollY(120)

    expect(bar).toHaveClass('bg-[rgba(26,33,61,0.8)]')
    expect(screen.getByTestId('account-actions')).toHaveClass('hidden')
  })

  it('opens the folded panel with the same rows and closes it from the close control', () => {
    render(<Navbar />)

    const panel = openPanel()
    expect(within(panel).getByRole('link', { name: BRAND })).toBeInTheDocument()
    expect(within(panel).getByRole('link', { name: 'Element' })).toBeInTheDocument()

    fireEvent.click(within(panel).getByRole('button', { name: CLOSE_LABEL }))

    expect(screen.queryByRole('dialog', { name: MENU_DIALOG_LABEL })).not.toBeInTheDocument()
  })

  it('keeps the folded panel open for non-Escape keys and closes it on Escape', () => {
    render(<Navbar />)
    openPanel()

    fireEvent.keyDown(window, { key: 'ArrowDown' })
    expect(screen.getByRole('dialog', { name: MENU_DIALOG_LABEL })).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('dialog', { name: MENU_DIALOG_LABEL })).not.toBeInTheDocument()
  })

  it('closes the folded panel from the backdrop but not from its own body', () => {
    render(<Navbar />)

    const first = openPanel()
    fireEvent.click(first)
    expect(screen.getByRole('dialog', { name: MENU_DIALOG_LABEL })).toBeInTheDocument()

    fireEvent.click(screen.getByTestId('menu-backdrop'))
    expect(screen.queryByRole('dialog', { name: MENU_DIALOG_LABEL })).not.toBeInTheDocument()
  })

  it('closes the folded panel when one of its rows is followed', () => {
    render(<Navbar />)
    const panel = openPanel()

    fireEvent.click(within(panel).getAllByRole('link', { name: 'Home' })[0] as HTMLElement)

    expect(screen.queryByRole('dialog', { name: MENU_DIALOG_LABEL })).not.toBeInTheDocument()
  })
})
