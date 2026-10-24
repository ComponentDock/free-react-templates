import { render, screen, act, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { menuToggleLabel, navLinks, siteName } from '../data'

describe('Navbar', () => {
  it('renders the brand logo and the six reference nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: siteName })).toHaveAttribute('href', '#top')

    const nav = screen.getByRole('navigation', { name: 'Main' })
    for (const link of navLinks) {
      expect(within(nav).getByRole('link', { name: link.label })).toHaveAttribute(
        'href',
        link.href,
      )
    }
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  it('starts transparent over the hero and turns white and sticky on scroll', () => {
    render(<Navbar />)
    const banner = screen.getByRole('banner')
    expect(banner).toHaveClass('absolute', 'bg-transparent')

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 120, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(banner).toHaveClass('fixed', 'bg-white')
    expect(banner).not.toHaveClass('bg-transparent')
  })

  it('toggles the mobile menu and closes it on link selection', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: menuToggleLabel })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobile).getAllByRole('link')).toHaveLength(navLinks.length)

    await user.click(within(mobile).getByRole('link', { name: 'Contact' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
