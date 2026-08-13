import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the brand name and main navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Uplink/ })).toHaveAttribute('href', '#home')
    const nav = screen.getByRole('navigation', { name: 'Main' })
    for (const label of ['Home', 'About', 'Services', 'Features', 'Pricing', 'Blog', 'Contact']) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('reveals the Pages dropdown with secondary links', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Main' })
    const pages = within(nav).getByRole('button', { name: 'Pages' })
    await user.click(pages)
    const menu = await screen.findByRole('menu')
    expect(within(menu).getByRole('menuitem', { name: 'Blog' })).toBeInTheDocument()
    expect(within(menu).getByRole('menuitem', { name: 'Blog Details' })).toBeInTheDocument()
    expect(within(menu).getByRole('menuitem', { name: 'Elements' })).toBeInTheDocument()
  })

  it('closes the Pages dropdown when a secondary link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Pages' }))
    await user.click(await screen.findByRole('menuitem', { name: 'Elements' }))
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('toggles the mobile menu and closes it when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobileNav).getByRole('link', { name: 'Services' })).toBeInTheDocument()
    await user.click(within(mobileNav).getByRole('link', { name: 'Services' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu with the Escape key', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()
    await user.keyboard('{a}')
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the mobile Pages link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(within(mobileNav).getByText('Pages'))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('adds a shadow once the page is scrolled', () => {
    const setScrollY = (y: number) =>
      Object.defineProperty(window, 'scrollY', { value: y, writable: true, configurable: true })
    render(<Navbar />)
    const header = document.querySelector('header') as HTMLElement
    expect(header.className).not.toContain('shadow-md')
    setScrollY(120)
    fireEvent.scroll(window)
    expect(header.className).toContain('shadow-md')
  })
})
