import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { NAV_LINKS } from '../content'
import { Header } from './Header'

describe('Header', () => {
  it('is the absolute bar with the wash, wordmark and five items', () => {
    render(<Header />)
    const header = document.querySelector('header') as HTMLElement
    expect(header.className).toContain('absolute')
    expect(header.querySelector('[aria-hidden="true"]')?.className).toContain('opacity-75')

    const brand = screen.getByRole('link', { name: 'Keynoter home' })
    expect(brand).toHaveAttribute('href', '#top')

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    const links = within(nav).getAllByRole('link')
    expect(links.map((link) => link.textContent)).toEqual(NAV_LINKS.map((link) => link.label))
    for (const [index, link] of links.entries()) {
      expect(link).toHaveAttribute('href', NAV_LINKS[index]!.href)
    }
  })

  it('paints the activated item indigo and moves the pill', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const home = screen.getByRole('link', { name: 'Home' })
    const speakers = screen.getByRole('link', { name: 'Speakers' })
    expect(home).toHaveAttribute('aria-current', 'true')
    expect(home.className).toContain('bg-brand')

    await user.click(speakers)
    expect(speakers).toHaveAttribute('aria-current', 'true')
    expect(home).not.toHaveAttribute('aria-current')
  })

  it('opens and closes the mobile drawer, closing on a link', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const burger = screen.getByRole('button', { name: 'Open menu' })
    expect(burger).toHaveAttribute('aria-expanded', 'false')

    await user.click(burger)
    const drawer = document.getElementById('mobile-drawer') as HTMLElement
    const mobileNav = within(drawer).getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobileNav).getAllByRole('link')).toHaveLength(NAV_LINKS.length)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    await user.click(within(mobileNav).getByRole('link', { name: 'Tickets' }))
    expect(document.getElementById('mobile-drawer')).not.toBeInTheDocument()
  })

  it('closes the drawer on Escape and returns focus to the toggler', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(document.getElementById('mobile-drawer')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveFocus()
  })

  it('ignores other keys and a closed drawer', async () => {
    const user = userEvent.setup()
    render(<Header />)
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    fireEvent.keyDown(document, { key: 'ArrowRight' })
    expect(document.getElementById('mobile-drawer')).toBeInTheDocument()
  })

  it('opens the search overlay from the 55px square and closes it', async () => {
    const user = userEvent.setup()
    render(<Header />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    const trigger = screen.getByRole('button', { name: 'Open search' })
    expect(trigger.className).toContain('h-[55px]')

    await user.click(trigger)
    expect(screen.getByRole('dialog', { name: 'Search Keynoter' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close search' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
