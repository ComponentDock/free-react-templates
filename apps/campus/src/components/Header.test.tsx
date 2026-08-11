import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Header } from './Header'
import {
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  phoneLabel,
  phoneNumber,
  registerLoginLabel,
  siteName,
  stickyThreshold,
} from '../data'

describe('Header', () => {
  it('renders the wordmark, Register/Login link, nav links and phone block', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: siteName })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: registerLoginLabel })).toBeInTheDocument()
    for (const item of navItems) {
      expect(screen.getByRole('link', { name: item.label })).toBeInTheDocument()
    }
    const phone = screen.getByRole('link', { name: phoneLabel })
    expect(phone).toHaveTextContent(phoneNumber)
  })

  it('marks the active nav item with aria-current', () => {
    render(<Header />)
    const active = navItems.find((item) => item.active)
    expect(screen.getByRole('link', { name: active?.label })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  it('sticks the menu bar to the top after scrolling past the threshold', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation', { name: navLabel })

    expect(nav).not.toHaveClass('fixed')

    Object.defineProperty(window, 'scrollY', { value: stickyThreshold + 10, configurable: true })
    fireEvent.scroll(window)
    expect(nav).toHaveClass('fixed')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(nav).not.toHaveClass('fixed')
  })

  it('cleans up the scroll listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Header />)
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })

  it('keeps the nav usable with the keyboard (links are focusable)', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const wordmark = screen.getByRole('link', { name: siteName })
    await user.tab()
    expect(wordmark).toHaveFocus()
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const trigger = screen.getByRole('button', { name: menuTriggerLabel })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: mobileNavLabel })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is activated', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const trigger = screen.getByRole('button', { name: menuTriggerLabel })
    await user.click(trigger)
    const mobileNav = screen.getByRole('navigation', { name: mobileNavLabel })
    await user.click(screen.getAllByRole('link', { name: 'Course' })[1]!)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(mobileNav).not.toBeInTheDocument()
  })
})
