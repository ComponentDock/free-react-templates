import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Boostly wordmark and the desktop menu with Join Us', () => {
    render(<Navbar />)
    expect(screen.getAllByRole('link', { name: 'Boostly' }).length).toBeGreaterThan(0)
    for (const label of ['Home', 'About', 'Services', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: /Blog/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Join Us' })).toHaveAttribute('href', '#contact')
  })

  it('marks Home as the active link', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
  })

  it('opens the Blog dropdown on click and shows all three items', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const blog = screen.getByRole('button', { name: /Blog/ })
    expect(blog).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()

    await user.click(blog)
    expect(blog).toHaveAttribute('aria-expanded', 'true')
    for (const item of ['Blog', 'Blog Details', 'Element']) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
  })

  it('closes the Blog dropdown on a second activation', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const blog = screen.getByRole('button', { name: /Blog/ })
    await user.click(blog)
    expect(screen.getByRole('link', { name: 'Element' })).toBeInTheDocument()
    await user.click(blog)
    expect(blog).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Element' })).not.toBeInTheDocument()
  })

  it('adds the sticky shadow after scrolling and removes it back at the top', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header.className).not.toContain('shadow-')

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 120, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).toContain('shadow-')

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).not.toContain('shadow-')
  })

  it('opens the off-canvas mobile menu with wordmark and close button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByText('Boostly').length).toBeGreaterThan(1)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    for (const label of ['Home', 'About', 'Services', 'Contact']) {
      expect(within(mobileNav).getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(within(mobileNav).getByRole('link', { name: 'Join Us' })).toBeInTheDocument()
  })

  it('collapses the Blog sub-items inside the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const mobileBlog = within(mobileNav).getByRole('button', { name: /Blog/ })
    expect(mobileBlog).toHaveAttribute('aria-expanded', 'false')
    expect(within(mobileNav).queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()

    await user.click(mobileBlog)
    expect(mobileBlog).toHaveAttribute('aria-expanded', 'true')
    expect(within(mobileNav).getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()
  })

  it('closes the mobile menu via the close button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a nav link is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })

    const clickMobileLink = async (name: string) => {
      await user.click(toggle)
      const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
      const link = within(mobileNav).getByRole('link', { name })
      link.addEventListener('click', (event) => event.preventDefault(), { once: true })
      await user.click(link)
      expect(toggle).toHaveAttribute('aria-expanded', 'false')
      expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
    }

    await clickMobileLink('Home')
    await clickMobileLink('About')
    await clickMobileLink('Services')
    await clickMobileLink('Contact')
    await clickMobileLink('Join Us')

    // Sub-menu item inside the collapsible Blog group.
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(within(mobileNav).getByRole('button', { name: /Blog/ }))
    const subLink = within(mobileNav).getByRole('link', { name: 'Element' })
    subLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(subLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
