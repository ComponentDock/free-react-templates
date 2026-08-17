import { describe, expect, it, afterEach } from 'vitest'
import { render, screen, within, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { BRAND, NAV_LINKS } from '../data'

describe('Header', () => {
  afterEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
  })

  it('renders the brand, inline search, nav links, Sign In, and Add Listing', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: BRAND })).toBeInTheDocument()
    expect(screen.getByRole('searchbox', { name: 'Search listings' })).toBeInTheDocument()
    for (const link of NAV_LINKS) {
      expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThanOrEqual(1)
    }
    expect(screen.getByRole('link', { name: 'Sign In' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Add Listing' })).toBeInTheDocument()
  })

  it('renders dropdown children for Listing and Blog', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Listing Details', hidden: true })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog Details', hidden: true })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Element', hidden: true })).toBeInTheDocument()
  })

  it('turns into the translucent navy bar and hides the action group when scrolled', () => {
    Object.defineProperty(window, 'scrollY', { value: 120, configurable: true })
    const { container } = render(<Header />)
    fireEvent.scroll(window)
    expect(container.querySelector('header')?.className).toContain('bg-[rgba(26,33,61,0.8)]')
    const actionGroup = screen.getByRole('link', { name: 'Sign In' }).closest('div')
    expect(actionGroup?.className).toContain('hidden')
  })

  it('stays transparent when not scrolled', () => {
    const { container } = render(<Header />)
    expect(container.querySelector('header')?.className).toContain('bg-transparent')
  })

  it('opens the mobile menu and closes it via the toggle', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('dialog', { name: 'Mobile navigation' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu via Escape only', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('dialog', { name: 'Mobile navigation' })).toBeInTheDocument()
    fireEvent.keyDown(window, { key: 'a' })
    expect(screen.getByRole('dialog', { name: 'Mobile navigation' })).toBeInTheDocument()
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the backdrop overlay is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('dialog', { name: 'Mobile navigation' })).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('mobile-overlay'))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    fireEvent.click(within(dialog).getByRole('link', { name: 'Home' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the brand, Sign In, or Add Listing is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    fireEvent.click(within(dialog).getByRole('link', { name: BRAND }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const dialogAgain = screen.getByRole('dialog', { name: 'Mobile navigation' })
    fireEvent.click(within(dialogAgain).getByRole('link', { name: 'Sign In' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const dialogThird = screen.getByRole('dialog', { name: 'Mobile navigation' })
    fireEvent.click(within(dialogThird).getByRole('link', { name: 'Add Listing' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('shows dropdown children inside the mobile menu and closes on a child click', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    expect(within(dialog).getByRole('link', { name: 'Listing Details' })).toBeInTheDocument()
    fireEvent.click(within(dialog).getByRole('link', { name: 'Element' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
