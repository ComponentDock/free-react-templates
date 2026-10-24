import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'
import {
  appointmentLabel,
  hotline,
  menuCloseLabel,
  menuTriggerLabel,
  navItems,
  siteName,
} from '../data'

describe('Header', () => {
  it('shows the wordmark, nav links, hotline and appointment button', () => {
    render(<Header />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByText(siteName)).toBeInTheDocument()
    for (const item of navItems) {
      expect(screen.getByRole('link', { name: item.label })).toBeInTheDocument()
    }
    expect(screen.getByText(hotline)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: appointmentLabel })).toBeInTheDocument()
  })

  it('opens and closes the mobile menu via the burger toggle', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: menuTriggerLabel })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    const menu = screen.getByRole('navigation', { name: /mobile navigation/i })
    expect(menu).toBeInTheDocument()
    expect(screen.getByRole('button', { name: menuCloseLabel })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(screen.queryByRole('navigation', { name: /mobile navigation/i })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: menuTriggerLabel }))
    const mobileNav = screen.getByRole('navigation', { name: /mobile navigation/i })
    const link = within(mobileNav).getByRole('link', { name: 'Doctors' })
    // Neutralize jsdom hash navigation so the onClick still fires (see
    // docs/ai-context.md — user-event anchor click race).
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)
    expect(screen.queryByRole('navigation', { name: /mobile navigation/i })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the appointment link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: menuTriggerLabel }))
    const mobileNav = screen.getByRole('navigation', { name: /mobile navigation/i })
    const link = within(mobileNav).getByRole('link', { name: appointmentLabel })
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)
    expect(screen.queryByRole('navigation', { name: /mobile navigation/i })).not.toBeInTheDocument()
  })
})
