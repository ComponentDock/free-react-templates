import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders the brand, centered nav links, and the CTA button', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Resume' })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Services', 'Portfolio', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label, hidden: true }).length).toBeGreaterThan(0)
    }
    expect(
      screen.getAllByRole('link', { name: 'Get Free Consultent', hidden: true }).length,
    ).toBeGreaterThan(0)
  })

  it('opens the Pages dropdown with its sub-links', async () => {
    const user = userEvent.setup()
    render(<Header />)

    expect(screen.queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()

    await user.click(screen.getAllByRole('button', { name: 'Page', hidden: true })[0]!)

    for (const sub of ['Blog', 'Blog Details', 'Element', 'Portfolio Details']) {
      expect(screen.getAllByRole('link', { name: sub, hidden: true }).length).toBeGreaterThan(0)
    }
  })

  it('expands the mobile hamburger menu with the same links and CTA', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Services', 'Portfolio', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByRole('link', { name: 'Get Free Consultent' }).length).toBeGreaterThan(0)
  })

  it('closes the mobile menu when the close button is pressed', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('button', { name: 'Close menu' }))

    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('opens the Pages dropdown inside the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const pageButtons = screen.getAllByRole('button', { name: 'Page' })
    await user.click(pageButtons[pageButtons.length - 1]!)

    for (const sub of ['Blog', 'Blog Details', 'Element', 'Portfolio Details']) {
      expect(screen.getAllByRole('link', { name: sub }).length).toBeGreaterThan(0)
    }
  })
})
