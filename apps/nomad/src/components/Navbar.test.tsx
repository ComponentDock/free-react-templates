import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and all five menu items', () => {
    render(<Navbar />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Nomad' })).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Main' })
    for (const label of ['Home', 'Post', 'Archives', 'Pages']) {
      expect(within(nav).getByRole('button', { name: new RegExp(label) })).toBeInTheDocument()
    }
    expect(within(nav).getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('marks Home as the current page', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(within(nav).getByRole('button', { name: /^Home/ })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  it('opens and closes dropdowns on demand', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const nav = screen.getByRole('navigation', { name: 'Main' })
    const home = within(nav).getByRole('button', { name: /^Home/ })
    expect(home).toHaveAttribute('aria-expanded', 'false')
    await user.click(home)
    expect(home).toHaveAttribute('aria-expanded', 'true')
    expect(within(nav).getByRole('link', { name: 'Home with slider' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Home with full slider' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Home with parallax' })).toBeInTheDocument()

    await user.click(home)
    expect(home).toHaveAttribute('aria-expanded', 'false')
    expect(within(nav).queryByRole('link', { name: 'Home with slider' })).not.toBeInTheDocument()
  })

  it('renders the other dropdowns with their items', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const nav = screen.getByRole('navigation', { name: 'Main' })

    await user.click(within(nav).getByRole('button', { name: /^Post/ }))
    for (const label of ['Post with right sidebar', 'Post with left sidebar', 'Post no sidebar']) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }

    await user.click(within(nav).getByRole('button', { name: /^Archives/ }))
    for (const label of ['Destination', 'Tag', 'Authors Post']) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }

    await user.click(within(nav).getByRole('button', { name: /^Pages/ }))
    for (const label of ['Right Sidebar', 'Left Sidebar', 'Authors Page']) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('turns solid with dark links after scrolling', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const header = screen.getByRole('banner')
    expect(header).toHaveAttribute('data-variant', 'transparent')

    Object.defineProperty(window, 'scrollY', { value: 240, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveAttribute('data-variant', 'solid')

    const nav = screen.getByRole('navigation', { name: 'Main' })
    const home = within(nav).getByRole('button', { name: /^Home/ })
    await user.click(home)
    expect(home).toHaveAttribute('aria-expanded', 'true')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveAttribute('data-variant', 'transparent')
  })

  it('toggles the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const mobileMenu = document.getElementById('mobile-menu')!
    expect(within(mobileMenu).getByRole('link', { name: 'Contact' })).toBeInTheDocument()

    await user.click(within(mobileMenu).getByRole('link', { name: 'Contact' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })

  it('opens a dropdown inside the mobile menu and closes it on selection', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Menu' }))
    const mobileMenu = document.getElementById('mobile-menu')!
    const mobileHome = within(mobileMenu).getByRole('button', { name: /^Home/ })
    await user.click(mobileHome)
    expect(mobileHome).toHaveAttribute('aria-expanded', 'true')

    const childLink = within(mobileMenu).getByRole('link', { name: 'Home with slider' })
    await user.click(childLink)
    expect(screen.getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-expanded', 'false')
  })

  it('removes the scroll listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
