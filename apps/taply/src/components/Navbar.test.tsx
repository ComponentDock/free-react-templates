import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the Taply brand and the five primary links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Taply' })).toHaveAttribute('href', '#home')
    for (const label of ['Home', 'Features', 'Gallery', 'Pricing', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('anchors each link to its section id', () => {
    render(<Navbar />)

    // First occurrence of each label is the desktop link (mobile menu
    // duplicates are hidden but still in the DOM).
    expect(screen.getAllByRole('link', { name: 'Features' })[0]).toHaveAttribute(
      'href',
      '#features',
    )
    expect(screen.getAllByRole('link', { name: 'Gallery' })[0]).toHaveAttribute('href', '#gallery')
    expect(screen.getAllByRole('link', { name: 'Pricing' })[0]).toHaveAttribute('href', '#pricing')
    expect(screen.getAllByRole('link', { name: 'Contact' })[0]).toHaveAttribute('href', '#contact')
  })

  it('shows the desktop Download button', () => {
    render(<Navbar />)

    expect(screen.getAllByRole('link', { name: 'Download' })[0]).toHaveAttribute('href', '#contact')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'Features' }).length).toBe(2)

    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(menuButton).toHaveAccessibleName('Open menu')
  })

  it('closes the mobile menu when the mobile Download link is followed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    await user.click(menuButton)

    const mobileDownload = screen.getAllByRole('link', { name: 'Download' })[1]!
    mobileDownload.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileDownload)

    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a link is followed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    await user.click(menuButton)

    const mobileLink = screen.getAllByRole('link', { name: 'Pricing' })[1]!
    // Neutralize jsdom hash navigation (native listeners run before React's).
    mobileLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileLink)

    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })
})
