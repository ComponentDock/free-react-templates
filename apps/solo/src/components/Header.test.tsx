import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'
import { navDropdowns, navLinks } from '../data'

describe('Header', () => {
  it('renders the Solo wordmark and the flat navigation links', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /solo/i })).toBeInTheDocument()
    for (const link of navLinks) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
  })

  it('gains a drop shadow once the page is scrolled', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header.className).not.toContain('shadow-[0_4px_14px_rgba(0,0,0,0.12)]')

    Object.defineProperty(window, 'scrollY', { value: 120, configurable: true })
    fireEvent.scroll(window)

    expect(header.className).toContain('shadow-[0_4px_14px_rgba(0,0,0,0.12)]')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(header.className).not.toContain('shadow-[0_4px_14px_rgba(0,0,0,0.12)]')
  })

  it('opens the Blog and Pages dropdowns to reveal their sub-links', async () => {
    const user = userEvent.setup()
    render(<Header />)
    for (const group of navDropdowns) {
      expect(screen.queryByText(group.links[0]!.label)).not.toBeInTheDocument()
      await user.click(screen.getByRole('button', { name: group.label }))
      for (const link of group.links) {
        expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
      }
      await user.click(screen.getByRole('button', { name: group.label }))
      expect(screen.queryByText(group.links[0]!.label)).not.toBeInTheDocument()
    }
  })

  it('toggles the mobile menu from the hamburger button', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows nav links in the mobile menu and opens a dropdown there', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: /toggle menu/i }))

    for (const link of navLinks) {
      expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThan(0)
    }
    const mobileBlog = screen.getAllByRole('button', { name: 'Blog' })[1]!
    await user.click(mobileBlog)
    expect(screen.getAllByRole('link', { name: 'Blog Home' }).length).toBeGreaterThan(0)
    expect(mobileBlog).toHaveAttribute('aria-expanded', 'true')
    await user.click(mobileBlog)
    expect(mobileBlog).toHaveAttribute('aria-expanded', 'false')

    // Clicking a mobile nav link closes the menu (hash navigation is
    // neutralized with a native preventDefault so the click handler runs).
    const homeLink = screen.getAllByRole('link', { name: 'Home' })[1]!
    homeLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(homeLink)
    expect(screen.getByRole('button', { name: /toggle menu/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    // Reopening: a dropdown link in the mobile menu closes it too.
    await user.click(screen.getByRole('button', { name: /toggle menu/i }))
    await user.click(screen.getAllByRole('button', { name: 'Pages' })[1]!)
    const elementsLink = screen.getAllByRole('link', { name: 'Elements' })[1]!
    elementsLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(elementsLink)
    expect(screen.getByRole('button', { name: /toggle menu/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
