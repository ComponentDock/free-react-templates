import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Header } from './Header'
import { NAV_DROPDOWNS, NAV_LINKS } from '../data'

/* user-event performs jsdom hash-navigation on in-page anchors, which can
   race with React's handler; native target listeners run first, so attach
   a one-shot preventDefault before clicking anchors (see ai-context). */
function clickAnchor(anchor: HTMLElement) {
  anchor.addEventListener('click', (event) => event.preventDefault(), { once: true })
  fireEvent.click(anchor)
}

describe('Header', () => {
  it('renders the logo and all menu links + dropdown toggles on desktop', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Altruist' })).toHaveAttribute('href', '#home')
    /* The desktop nav is lg-only, so it is display:none in jsdom — query
       with hidden:true like the other templates' nav tests. */
    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    for (const link of NAV_LINKS) {
      expect(within(mainNav).getByRole('link', { name: link.label, hidden: true })).toHaveAttribute(
        'href',
        link.href,
      )
    }
    for (const dropdown of NAV_DROPDOWNS) {
      const toggle = within(mainNav).getByRole('button', { name: dropdown.label, hidden: true })
      expect(toggle).toHaveAttribute('aria-expanded', 'false')
    }
    expect(within(mainNav).getByRole('link', { name: 'Home', hidden: true })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  it('is transparent over the hero and turns dark once scrolled', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header).not.toHaveClass('bg-[rgba(0,0,0,0.8)]')

    window.scrollY = 120
    fireEvent.scroll(window)
    expect(header).toHaveClass('bg-[rgba(0,0,0,0.8)]')
    /* The logo wordmark flips to white on the dark header. */
    const logo = screen.getByRole('link', { name: 'Altruist' })
    expect(logo.querySelector('span')).toHaveClass('text-white')
  })

  it('opens and closes the Blog dropdown and switches to Pages', () => {
    render(<Header />)
    const mainNav = screen.getByRole('navigation', { name: 'Main' })

    const blogToggle = within(mainNav).getByRole('button', { name: 'Blog', hidden: true })
    fireEvent.click(blogToggle)
    expect(blogToggle).toHaveAttribute('aria-expanded', 'true')
    expect(
      within(mainNav).getByRole('link', { name: 'Blog Home', hidden: true }),
    ).toBeInTheDocument()
    expect(
      within(mainNav).getByRole('link', { name: 'Blog Single', hidden: true }),
    ).toBeInTheDocument()

    /* Opening Pages closes Blog and shows its own items. */
    const pagesToggle = within(mainNav).getByRole('button', { name: 'Pages', hidden: true })
    fireEvent.click(pagesToggle)
    expect(pagesToggle).toHaveAttribute('aria-expanded', 'true')
    expect(blogToggle).toHaveAttribute('aria-expanded', 'false')
    expect(
      within(mainNav).getByRole('link', { name: 'Donation', hidden: true }),
    ).toBeInTheDocument()
    expect(
      within(mainNav).queryByRole('link', { name: 'Blog Home', hidden: true }),
    ).not.toBeInTheDocument()

    /* Clicking the toggle again closes it. */
    fireEvent.click(pagesToggle)
    expect(pagesToggle).toHaveAttribute('aria-expanded', 'false')

    /* Clicking a submenu item closes the dropdown too. */
    fireEvent.click(pagesToggle)
    fireEvent.click(within(mainNav).getByRole('link', { name: 'Elements', hidden: true }))
    expect(pagesToggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes an open dropdown with Escape', () => {
    render(<Header />)
    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    const pagesToggle = within(mainNav).getByRole('button', { name: 'Pages', hidden: true })

    fireEvent.click(pagesToggle)
    expect(
      within(mainNav).getByRole('link', { name: 'Event Details', hidden: true }),
    ).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(pagesToggle).toHaveAttribute('aria-expanded', 'false')
    expect(
      within(mainNav).queryByRole('link', { name: 'Event Details', hidden: true }),
    ).not.toBeInTheDocument()
  })

  it('opens the mobile menu, expands a submenu, and closes a link click', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeInTheDocument()

    /* Mobile submenu toggle shows the Pages items. */
    const pagesToggle = within(mobileNav).getByRole('button', { name: 'Pages' })
    fireEvent.click(pagesToggle)
    expect(pagesToggle).toHaveAttribute('aria-expanded', 'true')
    const donationLink = within(mobileNav).getByRole('link', { name: 'Donation' })
    expect(donationLink).toBeInTheDocument()

    /* Clicking a submenu link closes the whole menu. */
    clickAnchor(donationLink)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    /* A plain mobile link click closes the whole menu too. */
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const aboutLink = within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', {
      name: 'About',
    })
    clickAnchor(aboutLink)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('toggles a mobile submenu open and closed', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const pagesToggle = within(mobileNav).getByRole('button', { name: 'Pages' })

    fireEvent.click(pagesToggle)
    expect(pagesToggle).toHaveAttribute('aria-expanded', 'true')
    expect(within(mobileNav).getByRole('link', { name: 'Elements' })).toBeInTheDocument()

    fireEvent.click(pagesToggle)
    expect(pagesToggle).toHaveAttribute('aria-expanded', 'false')
    expect(within(mobileNav).queryByRole('link', { name: 'Elements' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu with the close button and with Escape', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))

    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    /* Other keys leave the menu open; Escape closes it. */
    fireEvent.keyDown(window, { key: 'a' })
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
