import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { CALL_US } from '../data'

describe('Navbar', () => {
  it('renders the brand, nav links, gold top line and call button', () => {
    render(<Navbar />)

    const header = screen.getByRole('banner')
    expect(header).toHaveClass('border-t-[6px]', 'border-gold', 'bg-white')

    expect(screen.getByRole('link', { name: 'Domily home' })).toBeInTheDocument()
    expect(screen.getByText('DOMILY')).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(within(nav).getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(within(nav).getByRole('link', { name: 'Properties' })).toHaveAttribute(
      'href',
      '#properties',
    )
    expect(within(nav).getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
    expect(within(nav).getByRole('button', { name: /Blog/ })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: CALL_US })).toBeInTheDocument()
  })

  it('opens the Blog dropdown listing Blog, Blog Details and Elements', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    const blogButton = within(nav).getByRole('button', { name: /Blog/ })
    await user.click(blogButton)

    for (const child of ['Blog', 'Blog Details', 'Elements']) {
      expect(within(nav).getByRole('link', { name: child })).toBeInTheDocument()
    }
  })

  it('sticks with a soft shadow after the page scrolls', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header).not.toHaveClass('shadow-[0_10px_15px_rgba(25,25,25,0.1)]')

    Object.defineProperty(window, 'scrollY', { value: 120, configurable: true })
    fireEvent.scroll(window)

    expect(header).toHaveClass('sticky', 'top-0', 'shadow-[0_10px_15px_rgba(25,25,25,0.1)]')
  })

  it('opens a search overlay and closes it on submit', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open search' }))
    const dialog = screen.getByRole('dialog', { name: 'Search' })
    const input = within(dialog).getByRole('textbox', { name: 'Search Here' })
    expect(input).toHaveAttribute('placeholder', 'Search Here')

    await user.type(input, 'modular homes')
    await user.click(within(dialog).getByRole('button', { name: 'Submit' }))

    expect(screen.queryByRole('dialog', { name: 'Search' })).not.toBeInTheDocument()
  })

  it('closes the search overlay via the close button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open search' }))
    await user.click(screen.getByRole('button', { name: 'Close search' }))

    expect(screen.queryByRole('dialog', { name: 'Search' })).not.toBeInTheDocument()
  })

  it('keeps the search overlay open for an empty query submit', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open search' }))
    await user.click(screen.getByRole('button', { name: 'Submit' }))

    expect(screen.getByRole('dialog', { name: 'Search' })).toBeInTheDocument()
  })

  it('toggles the mobile menu with its own navigation landmark', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(toggle)

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const homeLink = within(mobileNav).getAllByRole('link', { name: 'Home' }).pop()
    expect(homeLink).toBeInTheDocument()

    // clicking a mobile link closes the menu (neutralize jsdom hash navigation)
    const native = (event: Event) => event.preventDefault()
    homeLink?.addEventListener('click', native, { once: true })
    await user.click(homeLink!)
    homeLink?.removeEventListener('click', native)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    await user.click(toggle)
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
    await user.click(toggle)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
