import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { navLinks } from '../data'

describe('Navbar', () => {
  it('renders the logo, nav links, and appointment button', () => {
    render(<Navbar onOpenAppointment={vi.fn()} />)

    expect(screen.getByRole('link', { name: 'Salus' })).toBeInTheDocument()

    for (const link of navLinks) {
      // Desktop links are hidden below the lg breakpoint (css: true) —
      // include hidden elements.
      expect(
        screen.getAllByRole('link', { name: link.label, hidden: true }).length,
      ).toBeGreaterThanOrEqual(1)
    }

    const button = screen.getByRole('button', {
      name: 'Make an Appointment',
      hidden: true,
    })
    expect(button).toBeInTheDocument()
  })

  it('marks Home as the current page', () => {
    render(<Navbar onOpenAppointment={vi.fn()} />)

    const home = screen.getAllByRole('link', { name: 'Home', hidden: true })[0]
    if (!home) throw new Error('Home link not found')
    expect(home).toHaveAttribute('aria-current', 'true')
  })

  it('shows dropdown children on hover', async () => {
    const user = userEvent.setup()
    render(<Navbar onOpenAppointment={vi.fn()} />)

    const pages = screen.getAllByRole('link', { name: 'Pages', hidden: true })[0]
    if (!pages) throw new Error('Pages link not found')
    await user.hover(pages)

    expect(screen.queryByRole('link', { name: 'Single Blog' })).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Elements' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
  })

  it('closes the dropdown when the pointer leaves it', async () => {
    const user = userEvent.setup()
    render(<Navbar onOpenAppointment={vi.fn()} />)

    const pages = screen.getAllByRole('link', { name: 'Pages', hidden: true })[0]
    if (!pages) throw new Error('Pages link not found')
    await user.hover(pages)
    expect(screen.getByRole('link', { name: 'Elements' })).toBeInTheDocument()

    const dropdown = screen.getByRole('link', { name: 'Elements' }).parentElement
    if (!dropdown) throw new Error('Dropdown not found')
    fireEvent.mouseEnter(dropdown)
    fireEvent.mouseLeave(dropdown)
    expect(screen.queryByRole('link', { name: 'Elements' })).not.toBeInTheDocument()
  })

  it('closes the dropdown when the pointer leaves the nav link', async () => {
    const user = userEvent.setup()
    render(<Navbar onOpenAppointment={vi.fn()} />)

    const pages = screen.getAllByRole('link', { name: 'Pages', hidden: true })[0]
    if (!pages) throw new Error('Pages link not found')
    await user.hover(pages)
    expect(screen.getByRole('link', { name: 'Elements' })).toBeInTheDocument()

    await user.unhover(pages)
    expect(screen.queryByRole('link', { name: 'Elements' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu from a dropdown child link', async () => {
    const user = userEvent.setup()
    render(<Navbar onOpenAppointment={vi.fn()} />)

    await user.click(screen.getByRole('button', { name: 'Toggle menu' }))
    const child = within(screen.getByLabelText('Mobile')).getByRole('link', {
      name: 'Single Blog',
    })
    child.addEventListener('click', (event: Event) => event.preventDefault(), {
      once: true,
    })
    await user.click(child)

    expect(screen.queryByLabelText('Mobile')).not.toBeInTheDocument()
  })

  it('opens the mobile menu and closes it again', async () => {
    const user = userEvent.setup()
    render(<Navbar onOpenAppointment={vi.fn()} />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    await user.click(toggle)

    const mobileNav = screen.getByLabelText('Mobile')
    expect(mobileNav).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Contact' })).toBeInTheDocument()

    await user.click(toggle)
    expect(screen.queryByLabelText('Mobile')).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar onOpenAppointment={vi.fn()} />)

    await user.click(screen.getByRole('button', { name: 'Toggle menu' }))
    const contact = within(screen.getByLabelText('Mobile')).getByRole('link', {
      name: 'Contact',
    })
    contact.addEventListener('click', (event: Event) => event.preventDefault(), {
      once: true,
    })
    await user.click(contact)

    expect(screen.queryByLabelText('Mobile')).not.toBeInTheDocument()
  })

  it('calls onOpenAppointment from the desktop button', async () => {
    const user = userEvent.setup()
    const onOpenAppointment = vi.fn()
    render(<Navbar onOpenAppointment={onOpenAppointment} />)

    const button = screen.getByRole('button', {
      name: 'Make an Appointment',
      hidden: true,
    })
    await user.click(button)

    expect(onOpenAppointment).toHaveBeenCalledTimes(1)
  })

  it('calls onOpenAppointment from the mobile menu button', async () => {
    const user = userEvent.setup()
    const onOpenAppointment = vi.fn()
    render(<Navbar onOpenAppointment={onOpenAppointment} />)

    await user.click(screen.getByRole('button', { name: 'Toggle menu' }))
    await user.click(
      within(screen.getByLabelText('Mobile')).getByRole('button', {
        name: 'Make an Appointment',
      }),
    )

    expect(onOpenAppointment).toHaveBeenCalledTimes(1)
    expect(screen.queryByLabelText('Mobile')).not.toBeInTheDocument()
  })
})
