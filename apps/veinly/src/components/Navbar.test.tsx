import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Navbar } from './Navbar'
import { navLinks } from '../data'

function renderNavbar(onOpenQuote = vi.fn()) {
  return render(<Navbar onOpenQuote={onOpenQuote} />)
}

describe('Navbar', () => {
  it('renders the brand, seven anchor links and the Get Quote button', () => {
    renderNavbar()

    const brand = screen.getByRole('link', { name: 'Veinly' })
    expect(brand).toHaveAttribute('href', '#home-section')

    for (const link of navLinks) {
      const anchor = screen.getByRole('link', { name: link.label })
      expect(anchor).toHaveAttribute('href', link.href)
    }

    expect(screen.getByRole('button', { name: 'Get Quote' })).toBeInTheDocument()
  })

  it('starts transparent and turns white with a coral brand after scrolling', () => {
    renderNavbar()

    const header = screen.getByTestId('navbar')
    expect(header.className).toContain('bg-transparent')
    expect(screen.getByRole('link', { name: 'Veinly' }).firstElementChild?.className).toContain(
      'text-white',
    )

    Object.defineProperty(window, 'scrollY', { value: 200, configurable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })

    expect(header.className).toContain('bg-white')
    expect(header.className).toContain('shadow-[4px_0_20px_-5px_rgba(0,0,0,0.2)]')
    expect(screen.getByRole('link', { name: 'Veinly' }).firstElementChild?.className).toContain(
      'text-brand',
    )
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
  })

  it('opens and closes the off-canvas mobile menu', async () => {
    const user = userEvent.setup()
    renderNavbar()

    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const mobileMenu = screen.getByTestId('mobile-menu')
    expect(mobileNav).toBeInTheDocument()
    for (const link of navLinks) {
      expect(within(mobileNav).getByRole('link', { name: link.label })).toBeInTheDocument()
    }

    await user.click(within(mobileMenu).getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is activated', async () => {
    const user = userEvent.setup()
    renderNavbar()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(within(mobileNav).getByRole('link', { name: 'Blog' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('calls onOpenQuote when Get Quote is activated', async () => {
    const user = userEvent.setup()
    const onOpenQuote = vi.fn()
    renderNavbar(onOpenQuote)

    await user.click(screen.getByRole('button', { name: 'Get Quote' }))
    expect(onOpenQuote).toHaveBeenCalledTimes(1)
  })
})
