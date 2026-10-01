import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders the logo, nav links, and Listen Now button', () => {
    render(<Header />)
    expect(screen.getByText('Soundbite')).toBeInTheDocument()
    for (const label of ['Episodes', 'About', 'Sponsors', 'Newsletter', 'Contact']) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0)
    }
    const listenLinks = screen.getAllByRole('link', { name: /Listen Now/ })
    expect(listenLinks.length).toBeGreaterThan(0)
    expect(listenLinks[0]).toHaveAttribute('href', '#episodes')
  })

  it('nav links point to their section anchors', () => {
    render(<Header />)
    const mainNav = screen.getAllByRole('navigation', { name: 'Main' })[0] as HTMLElement
    expect(mainNav.querySelector('a[href="#episodes"]')).not.toBeNull()
    expect(mainNav.querySelector('a[href="#about"]')).not.toBeNull()
    expect(mainNav.querySelector('a[href="#sponsors"]')).not.toBeNull()
    expect(mainNav.querySelector('a[href="#newsletter"]')).not.toBeNull()
    expect(mainNav.querySelector('a[href="#contact"]')).not.toBeNull()
  })

  it('hamburger opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).toBeNull()

    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(mobileNav.querySelector('a[href="#contact"]')).not.toBeNull()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).toBeNull()
  })
})
