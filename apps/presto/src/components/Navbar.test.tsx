import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { value, writable: true, configurable: true })
}

/** Neutralise an in-page hash anchor so jsdom's navigation cannot drop the test. */
function neutralizeAnchor(element: HTMLElement) {
  element.addEventListener('click', (event) => event.preventDefault(), { once: true })
}

describe('Navbar', () => {
  it('renders the overlay row with the wordmark, menu, phone line and Sign In pill', () => {
    render(<Navbar />)
    expect(screen.getByRole('banner')).toHaveClass('absolute')
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    expect(screen.getByText('Presto')).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Services', 'Help', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: '+1 415 555 0134' })).toHaveAttribute(
      'href',
      'tel:+14155550134',
    )
    expect(screen.getByRole('link', { name: 'Sign In' })).toBeInTheDocument()
  })

  it('marks the current item and links the menu entries to real sections', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '#pricing')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: 'About' })).not.toHaveAttribute('aria-current')
  })

  it('opens the Blog dropdown on click and closes it on a second click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const blog = screen.getByRole('link', { name: 'Blog' })

    expect(blog).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()

    await user.click(blog)
    expect(blog).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Blog Details' })).toHaveAttribute(
      'href',
      '#testimonials',
    )
    expect(screen.getByRole('link', { name: 'Elements' })).toHaveAttribute('href', '#security')

    await user.click(blog)
    expect(blog).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Elements' })).not.toBeInTheDocument()
  })

  it('opens the Blog dropdown on hover and closes it when the pointer leaves', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const blog = screen.getByRole('link', { name: 'Blog' })

    await user.hover(blog)
    expect(screen.getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()

    await user.unhover(blog)
    expect(screen.queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()
  })

  it('toggles the mobile panel, closes it on a chosen link and supports Escape', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })

    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getAllByRole('link', { name: 'Services' })).toHaveLength(2)

    const panelLink = screen.getAllByRole('link', { name: 'Services' })[1]!
    neutralizeAnchor(panelLink)
    await user.click(panelLink)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.keyboard('{Escape}')
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes the mobile panel from a submenu entry', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    const child = screen.getByRole('link', { name: 'Blog Details' })
    expect(child).toHaveAttribute('href', '#testimonials')
    neutralizeAnchor(child)
    await user.click(child)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('ignores other keys while the mobile panel is open', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.keyboard('a')
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
  })

  it('keeps the mobile panel actions reachable while it is open', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    const signIn = screen.getAllByRole('link', { name: 'Sign In' })[1]!
    neutralizeAnchor(signIn)
    expect(signIn).toHaveClass('w-full')
    await user.click(signIn)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('switches to the solid sticky bar after scrolling and back at the top', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('absolute', 'top-0')

    act(() => {
      setScrollY(240)
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header).toHaveClass('fixed', 'top-0', 'bg-white')

    act(() => {
      setScrollY(0)
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header).toHaveClass('absolute')
    setScrollY(0)
  })
})
