import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  afterEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    vi.restoreAllMocks()
  })

  it('renders the brand and all desktop nav items over the hero', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Unison' })).toBeInTheDocument()
    for (const label of ['Home', 'Portfolio', 'Services', 'Testimonials', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    expect(screen.getByRole('button', { name: /About Us/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Open menu/ })).toBeInTheDocument()
  })

  it('turns the navbar solid with a blue wordmark after scrolling', () => {
    render(<Navbar />)
    const brand = screen.getByRole('link', { name: 'Unison' })
    const header = brand.closest('header')!
    expect(header).toHaveClass('bg-transparent')
    expect(brand).toHaveClass('text-white')

    Object.defineProperty(window, 'scrollY', { value: 300, configurable: true })
    fireEvent.scroll(window)

    expect(header).toHaveClass('bg-white', 'shadow-md')
    expect(brand).toHaveClass('text-brand')
    expect(header).not.toHaveClass('bg-transparent')
  })

  it('opens the About Us dropdown with nested More Links on hover', () => {
    render(<Navbar />)
    const aboutButton = screen.getByRole('button', { name: /About Us/ })
    expect(aboutButton).toHaveAttribute('aria-expanded', 'false')

    fireEvent.mouseEnter(aboutButton.closest('div')!)

    expect(aboutButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Team' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pricing' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'FAQ' })).toBeInTheDocument()
    expect(screen.getByText('More Links')).toBeInTheDocument()

    fireEvent.mouseEnter(screen.getByText('More Links'))

    expect(screen.getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Menu Two' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Menu Three' })).toBeInTheDocument()
  })

  it('closes the dropdown when the mouse leaves or focus blurs the wrapper', () => {
    render(<Navbar />)
    const aboutButton = screen.getByRole('button', { name: /About Us/ })
    const wrapper = aboutButton.closest('div')!

    fireEvent.mouseEnter(wrapper)
    expect(screen.getByRole('link', { name: 'Team' })).toBeInTheDocument()

    fireEvent.mouseLeave(wrapper)
    expect(screen.queryByRole('link', { name: 'Team' })).not.toBeInTheDocument()

    fireEvent.mouseEnter(wrapper)
    fireEvent.mouseEnter(screen.getByText('More Links'))
    expect(screen.getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
    fireEvent.mouseLeave(screen.getByText('More Links'))
    expect(screen.queryByRole('link', { name: 'Menu One' })).not.toBeInTheDocument()

    fireEvent.mouseEnter(wrapper)
    expect(screen.getByRole('link', { name: 'Team' })).toBeInTheDocument()
    fireEvent.blur(wrapper)
    expect(screen.queryByRole('link', { name: 'Team' })).not.toBeInTheDocument()

    fireEvent.focus(wrapper)
    expect(screen.getByRole('link', { name: 'Team' })).toBeInTheDocument()
    fireEvent.click(aboutButton)
    expect(screen.queryByRole('link', { name: 'Team' })).not.toBeInTheDocument()
    fireEvent.click(aboutButton)
    expect(screen.getByRole('link', { name: 'Team' })).toBeInTheDocument()
  })

  it('opens and closes the mobile menu, and collapses the About Us submenu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const aboutToggle = within(mobileNav).getByRole('button', { name: /About Us/ })
    expect(aboutToggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(aboutToggle)
    expect(aboutToggle).toHaveAttribute('aria-expanded', 'true')
    expect(within(mobileNav).getByRole('link', { name: 'FAQ' })).toBeInTheDocument()

    await user.click(within(mobileNav).getByRole('link', { name: 'Menu Two' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the toggle is pressed again', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    await user.click(toggle)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('shows nested More Links inside the mobile submenu and closes on a plain link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const aboutToggle = within(mobileNav).getByRole('button', { name: /About Us/ })
    await user.click(aboutToggle)
    expect(within(mobileNav).getByText('More Links')).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Menu One' })).toBeInTheDocument()

    await user.click(within(mobileNav).getByRole('link', { name: 'Team' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(
      within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', {
        name: 'Home',
      }),
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
