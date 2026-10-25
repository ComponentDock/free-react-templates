import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { NAV_LINKS, PROGRAMS } from '../content'
import { Header } from './Header'

describe('Header', () => {
  it('is an in-flow white bar with the tracked wordmark and six labels', () => {
    render(<Header />)
    const header = document.querySelector('header') as HTMLElement
    expect(header.className).toContain('relative')
    expect(header.className).not.toContain('absolute')
    expect(header.querySelector('div')?.className).toContain('h-[62px]')
    expect(header.querySelector('div')?.className).toContain('lg:h-[85px]')

    const brand = screen.getByRole('link', { name: 'Brawn home' })
    expect(brand).toHaveTextContent('Brawn')
    expect(brand.className).toContain('tracking-[4px]')
    expect(brand.className).toContain('text-brand')

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(
      within(nav)
        .getAllByRole('link')
        .map((link) => link.textContent?.trim()),
    ).toEqual(['Home', 'About', 'Services', 'Gallery', 'Coaches', 'Contact'])
  })

  it('marks Home as the current item in brand blue', () => {
    render(<Header />)
    const home = screen.getByRole('link', { name: 'Home' })
    expect(home).toHaveAttribute('aria-current', 'true')
    expect(home.className).toContain('text-brand')
    const about = screen.getByRole('link', { name: 'About' })
    expect(about).not.toHaveAttribute('aria-current')
  })

  it('opens the program dropdown on hover and closes it on leave', () => {
    render(<Header />)
    const toggle = screen.getByRole('link', { name: /Services/ })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByLabelText('Programs')).not.toBeInTheDocument()

    fireEvent.mouseEnter(toggle.parentElement as HTMLElement)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const menu = screen.getByLabelText('Programs')
    expect(
      within(menu)
        .getAllByRole('link')
        .map((item) => item.textContent),
    ).toEqual(PROGRAMS.map((program) => program.name))

    fireEvent.mouseLeave(toggle.parentElement as HTMLElement)
    expect(screen.queryByLabelText('Programs')).not.toBeInTheDocument()
  })

  it('opens on click and closes on Escape with focus back on the toggle', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('link', { name: /Services/ })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    toggle.focus()
    fireEvent.keyDown(toggle, { key: 'Escape' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveFocus()
  })

  it('ignores unrelated keys on the toggle', () => {
    render(<Header />)
    const toggle = screen.getByRole('link', { name: /Services/ })
    fireEvent.mouseEnter(toggle.parentElement as HTMLElement)
    fireEvent.keyDown(toggle, { key: 'ArrowDown' })
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('validates the empty search and answers a real query without a request', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const input = screen.getByLabelText('Search')
    expect(input).toHaveAttribute('placeholder', 'Search…')

    await user.click(screen.getByRole('button', { name: 'Go' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Type a program or a class to search for.')
    expect(input).toHaveAttribute('aria-invalid', 'true')

    await user.type(input, 'powerlifting')
    await user.click(screen.getByRole('button', { name: 'Go' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'No matches for “powerlifting” on this page.',
    )
    expect(input).toHaveValue('')
    expect(input).toHaveAttribute('aria-invalid', 'false')
  })

  it('opens the mobile drawer with the six labels, the programs and search', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const burger = screen.getByRole('button', { name: 'Open menu' })
    expect(burger).toHaveAttribute('aria-expanded', 'false')

    await user.click(burger)
    const drawer = document.getElementById('mobile-drawer') as HTMLElement
    expect(drawer).toBeInTheDocument()
    const mobileNav = within(drawer).getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobileNav).getAllByRole('link')).toHaveLength(NAV_LINKS.length + PROGRAMS.length)
    expect(within(drawer).getByLabelText('Search')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(document.getElementById('mobile-drawer')).not.toBeInTheDocument()
  })

  it('closes the drawer on Escape and returns focus to the toggler', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const burger = screen.getByRole('button', { name: 'Open menu' })
    await user.click(burger)

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(document.getElementById('mobile-drawer')).not.toBeInTheDocument()
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Open menu' }))
  })

  it('ignores other keys while the drawer is open', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    fireEvent.keyDown(document, { key: 'ArrowRight' })
    expect(document.getElementById('mobile-drawer')).toBeInTheDocument()
  })

  it('traps Tab inside the drawer in both directions', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const drawer = document.getElementById('mobile-drawer') as HTMLElement
    const focusable = Array.from(drawer.querySelectorAll<HTMLElement>('a[href], button, input'))
    const first = focusable[0]!
    const last = focusable[focusable.length - 1]!

    last.focus()
    fireEvent.keyDown(document, { key: 'Tab' })
    expect(document.activeElement).toBe(first)

    first.focus()
    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true })
    expect(document.activeElement).toBe(last)

    const middle = focusable[1]!
    middle.focus()
    fireEvent.keyDown(document, { key: 'Tab' })
    expect(document.activeElement).toBe(middle)

    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true })
    expect(document.activeElement).toBe(middle)
  })
})
