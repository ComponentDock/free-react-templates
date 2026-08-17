import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the brand and the five desktop navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByText('Fiscale')).toBeInTheDocument()
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(within(nav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(nav).getByRole('button', { name: /Dropdown/ })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
  })

  it('opens and closes the Dropdown submenu via click and Escape', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const dropdown = screen.getByRole('button', { name: /Dropdown/ })
    fireEvent.click(dropdown)
    expect(screen.getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Menu Two' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Menu Three' })).toBeInTheDocument()
    await user.keyboard('{a}') // non-Escape keys leave the submenu open
    expect(screen.getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('link', { name: 'Menu One' })).not.toBeInTheDocument()
  })

  it('closes the submenu when clicking outside the header', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: /Dropdown/ }))
    expect(screen.getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
    fireEvent.mouseDown(document.body)
    expect(screen.queryByRole('link', { name: 'Menu One' })).not.toBeInTheDocument()
  })

  it('opens the mobile offcanvas menu with the navigation links', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    expect(dialog).toBeInTheDocument()
    expect(within(dialog).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(dialog).getByRole('link', { name: 'Dropdown' })).toBeInTheDocument()
    expect(within(dialog).getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(within(dialog).getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(within(dialog).getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
  })

  it('closes the mobile menu via the close button, Escape, overlay click, and link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByTestId('mobile-overlay'))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    fireEvent.click(within(dialog).getByRole('link', { name: 'Services' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    fireEvent.mouseDown(document.body)
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('opens the submenu on hover and closes it on mouse leave', () => {
    render(<Navbar />)
    const wrapper = screen.getByRole('button', { name: /Dropdown/ }).parentElement!
    fireEvent.mouseEnter(wrapper)
    expect(screen.getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
    fireEvent.mouseLeave(wrapper)
    expect(screen.queryByRole('link', { name: 'Menu One' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu via the brand link and submenu links', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const dialog = screen.getByRole('dialog', { name: 'Mobile navigation' })
    fireEvent.click(within(dialog).getByRole('link', { name: 'Fiscale.' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const dialog2 = screen.getByRole('dialog', { name: 'Mobile navigation' })
    fireEvent.click(within(dialog2).getByRole('link', { name: 'Menu One' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('focuses the close control when the mobile menu opens', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveFocus()
  })
})
