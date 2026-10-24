import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { callLabel, navLinks, siteName } from '../data'

describe('Navbar', () => {
  it('renders the wordmark, desktop links and the call button', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(within(header).getByText(siteName)).toBeInTheDocument()
    const primary = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(primary).getAllByRole('link', { name: 'Home' })[0]).toHaveAttribute('href', '#top')
    expect(within(primary).getByRole('link', { name: navLinks[3].label })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(within(primary).getByRole('link', { name: callLabel })).toHaveAttribute(
      'href',
      'tel:+34586778892',
    )
  })

  it('opens and closes the Pages dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Pages' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Services' })).not.toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const primary = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(primary).getByRole('link', { name: 'Services' })).toHaveAttribute('href', '#services')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Services' })).not.toBeInTheDocument()
  })

  it('switches to the solid variant once the page is scrolled', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header).toHaveAttribute('data-variant', 'transparent')

    Object.defineProperty(window, 'scrollY', { value: 200, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveAttribute('data-variant', 'solid')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveAttribute('data-variant', 'transparent')
  })

  it('toggles the mobile menu panel', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const burger = screen.getByRole('button', { name: 'Toggle menu' })
    expect(burger).toHaveAttribute('aria-expanded', 'false')
    expect(document.querySelector('#mobile-menu')).toBeNull()

    await user.click(burger)
    expect(burger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('banner')).toHaveAttribute('data-variant', 'solid')
    const panel = document.querySelector('#mobile-menu')
    expect(panel).not.toBeNull()
    expect(panel?.textContent).toContain('Mega Menu')

    await user.click(burger)
    expect(burger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByRole('banner')).toHaveAttribute('data-variant', 'transparent')
    expect(document.querySelector('#mobile-menu')).toBeNull()
  })
})
