import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { heroCtaLabels } from '../data'

describe('Navbar', () => {
  it('shows the wordmark, nav links, and CTA buttons', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Upnode' })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: new RegExp(label) }).length).toBeGreaterThan(0)
    }
    for (const label of ['Hosting', 'Pages']) {
      expect(screen.getByRole('button', { name: new RegExp(label) })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: heroCtaLabels.chat })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: heroCtaLabels.start })).toBeInTheDocument()
  })

  it('marks Home as active', () => {
    render(<Navbar />)
    const home = screen.getAllByRole('link', { name: 'Home' })[0]!
    expect(home).toHaveAttribute('aria-current', 'page')
  })

  it('opens and closes the Hosting dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const hosting = screen.getAllByRole('button', { name: /Hosting/ })[0]!
    await user.click(hosting)
    const menu = screen.getByRole('menu')
    expect(within(menu).getByRole('menuitem', { name: 'Blog Details' })).toBeInTheDocument()
    await user.click(hosting)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('opens and closes the Pages dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const pages = screen.getAllByRole('button', { name: /Pages/ })[0]!
    await user.click(pages)
    const menu = screen.getByRole('menu')
    expect(within(menu).getByRole('menuitem', { name: 'Dropdown Item 2' })).toBeInTheDocument()
    await user.click(pages)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('opens and closes the mobile menu with all links reachable', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobile).getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    expect(within(mobile).getByRole('link', { name: heroCtaLabels.start })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const contact = within(mobile).getByRole('link', { name: 'Contact' })
    contact.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(contact)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a dropdown item is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const child = within(mobile).getByRole('link', { name: 'Blog Details' })
    child.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(child)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a CTA button is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const chat = within(mobile).getByRole('link', { name: heroCtaLabels.chat })
    chat.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(chat)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobile2 = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const start = within(mobile2).getByRole('link', { name: heroCtaLabels.start })
    start.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(start)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('turns white with dark links on scroll and back', () => {
    const { container } = render(<Navbar />)
    Object.defineProperty(window, 'scrollY', { value: 120, configurable: true })
    fireEvent.scroll(window)
    expect(container.querySelector('header')).toHaveClass('bg-white')
    expect(screen.getByRole('link', { name: 'Upnode' })).toHaveClass('text-ink')
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(container.querySelector('header')).not.toHaveClass('bg-white')
  })

  it('removes the scroll listener on unmount', () => {
    const spy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)
    unmount()
    expect(spy).toHaveBeenCalledWith('scroll', expect.any(Function))
    spy.mockRestore()
  })
})
