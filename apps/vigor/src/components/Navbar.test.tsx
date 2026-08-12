import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { PHONE } from '../data'

describe('Navbar', () => {
  it('renders brand, nav links, dropdown triggers, and the phone CTA', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /Vigor home/i })).toBeInTheDocument()

    // Desktop nav is `hidden lg:block` — jsdom does not match the lg: media
    // query, so the links sit in a display:none list and need { hidden: true }.
    expect(screen.getByRole('link', { name: 'Home', hidden: true })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About Us', hidden: true })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'News', hidden: true })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact', hidden: true })).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /Pages/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Mega Menu/i })).toBeInTheDocument()

    const phone = screen.getByRole('link', { name: (n) => n.includes('586 778 8892') })
    expect(phone).toHaveAttribute('href', 'tel:' + PHONE.replace(/[^\d+]/g, ''))
  })

  it('opens and closes the Pages dropdown and the Mega Menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const pagesButton = screen.getByRole('button', { name: /Pages/i })
    await user.click(pagesButton)
    expect(screen.getByRole('link', { name: 'Elements', hidden: true })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services', hidden: true })).toBeInTheDocument()

    const megaButton = screen.getByRole('button', { name: /Mega Menu/i })
    await user.click(megaButton)
    // Mega menu renders 4 columns, each listing the same 6 links.
    expect(screen.getAllByRole('link', { name: 'Services', hidden: true })).toHaveLength(4)
    expect(screen.getAllByRole('link', { name: 'Elements', hidden: true })).toHaveLength(4)
    // Opening the Mega Menu closes Pages (Pages' own 6 links are gone — a
    // Pages-open state would show 5 Services links instead of 4).
    expect(screen.getAllByRole('link', { name: 'Services', hidden: true })).not.toHaveLength(5)

    await user.click(megaButton)
    expect(screen.queryByRole('link', { name: 'Elements', hidden: true })).not.toBeInTheDocument()
  })

  it('toggles the mobile menu with working dropdowns', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(1)

    await user.click(toggle)
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(2)

    // Mobile dropdowns open and close within the menu.
    await user.click(screen.getAllByRole('button', { name: /Pages/i })[1]!)
    expect(screen.getAllByRole('link', { name: 'Services' })).toHaveLength(2)

    await user.click(screen.getAllByRole('button', { name: /Mega Menu/i })[1]!)
    // Desktop mega (4) + mobile mega (4) — the desktop and mobile variants
    // share the same open state.
    expect(screen.getAllByRole('link', { name: 'Elements' })).toHaveLength(8)

    await user.click(toggle)
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(1)
  })

  it('closes the mobile menu when a link or the phone CTA is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    await user.click(toggle)
    expect(screen.getAllByRole('link', { name: 'News' })).toHaveLength(2)

    // In-page anchor: neutralize jsdom hash navigation so the React onClick
    // still fires (native listeners run before React's delegated handler).
    const news = screen.getAllByRole('link', { name: 'News' })[1]!
    news.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(news)
    expect(screen.getAllByRole('link', { name: 'News' })).toHaveLength(1)

    // Mobile Pages dropdown item click also closes the menu.
    await user.click(toggle)
    await user.click(screen.getAllByRole('button', { name: /Pages/i })[1]!)
    const services = screen.getAllByRole('link', { name: 'Services' })[1]!
    services.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(services)
    expect(screen.getAllByRole('link', { name: 'News' })).toHaveLength(1)

    // Mobile Mega Menu item click also closes the menu.
    await user.click(toggle)
    await user.click(screen.getAllByRole('button', { name: /Mega Menu/i })[1]!)
    const megaElements = screen.getAllByRole('link', { name: 'Elements' })[7]!
    megaElements.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(megaElements)
    expect(screen.getAllByRole('link', { name: 'News' })).toHaveLength(1)

    // Mobile phone CTA closes the menu too. (Desktop CTA is also in the
    // a11y tree in jsdom — the mobile copy is last.)
    await user.click(toggle)
    const phones = screen.getAllByRole('link', { name: (n) => n.includes('586 778 8892') })
    const phone = phones[phones.length - 1]!
    expect(phone).toBeInTheDocument()
    phone.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(phone)
    expect(screen.getAllByRole('link', { name: 'News' })).toHaveLength(1)
  })
})
