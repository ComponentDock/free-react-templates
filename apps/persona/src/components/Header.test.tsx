import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { brandName, brandTagline, menuCloseLabel, menuOpenLabel, navLinks } from '../data'
import { Header } from './Header'

describe('Header', () => {
  it('shows the brand wordmark with the tagline', () => {
    render(<Header />)
    const banner = screen.getByRole('banner')
    expect(within(banner).getByText(brandName)).toBeInTheDocument()
    expect(within(banner).getByText(brandTagline)).toBeInTheDocument()
  })

  it('renders the uppercase dot-separated nav links with section hrefs', () => {
    render(<Header />)
    const banner = screen.getByRole('banner')
    for (const link of navLinks) {
      const anchor = within(banner).getByRole('link', { name: link.label })
      expect(anchor).toHaveAttribute('href', link.href)
      expect(anchor).toHaveClass('uppercase')
    }
  })

  it('gains a translucent dark background after scrolling', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(nav).not.toHaveClass('bg-navy')

    Object.defineProperty(window, 'scrollY', { value: 120, configurable: true })
    fireEvent.scroll(window)

    expect(nav).toHaveClass('bg-navy/90')
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
  })

  it('opens the mobile menu with every nav link and closes it again', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: menuOpenLabel })
    expect(toggle).toBeInTheDocument()

    await user.click(toggle)

    const dialog = screen.getByRole('dialog', { name: 'Menu' })
    for (const link of navLinks) {
      expect(within(dialog).getByRole('link', { name: link.label })).toHaveAttribute(
        'href',
        link.href,
      )
    }
    expect(screen.getByRole('button', { name: menuCloseLabel })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(screen.queryByRole('dialog', { name: 'Menu' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const dialog = screen.getByRole('dialog', { name: 'Menu' })
    const homeLink = within(dialog).getByRole('link', { name: navLinks[0]!.label })
    // user-event performs jsdom hash-navigation on anchor clicks, which can
    // race with the React handler and occasionally drop the test from the
    // suite (flaky 4/5 runs). Neutralize the navigation so the click is
    // deterministic; the onClick still fires (React's delegated listener
    // runs after this native one, and preventDefault does not stop it).
    homeLink.addEventListener('click', (event) => event.preventDefault(), {
      once: true,
    })

    await user.click(homeLink)

    expect(screen.queryByRole('dialog', { name: 'Menu' })).not.toBeInTheDocument()
  })
})
