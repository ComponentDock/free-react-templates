import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  bookNowLabel,
  brandEnd,
  brandStart,
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
} from '../data'
import { Header } from './Header'

const clickAnchor = async (user: ReturnType<typeof userEvent.setup>, element: HTMLElement) => {
  element.addEventListener('click', (event) => event.preventDefault(), { once: true })
  await user.click(element)
}

describe('Header', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the brand, nav links, and Book Now pill', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: brandStart + brandEnd })).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: navLabel })
    expect(within(nav).getAllByRole('link')).toHaveLength(navItems.length + 1)
    expect(within(nav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Hotels & Restaurant' })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: bookNowLabel })).toBeInTheDocument()
  })

  it('is transparent at the top and turns solid white on scroll', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-transparent')

    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(120)
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-white')

    vi.spyOn(window, 'scrollY', 'get').mockReturnValue(0)
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-transparent')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const trigger = screen.getByRole('button', { name: menuTriggerLabel })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()

    await user.click(trigger)
    const mobileNav = screen.getByRole('navigation', { name: mobileNavLabel })
    expect(within(mobileNav).getAllByRole('link')).toHaveLength(navItems.length + 1)
    expect(within(mobileNav).getByRole('link', { name: 'Destination' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: menuCloseLabel })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    await clickAnchor(user, within(mobileNav).getByRole('link', { name: 'Home' }))
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when Book Now is activated', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: menuTriggerLabel }))
    const mobileNav = screen.getByRole('navigation', { name: mobileNavLabel })
    await clickAnchor(user, within(mobileNav).getByRole('link', { name: bookNowLabel }))
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })

  it('removes the scroll listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Header />)
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
