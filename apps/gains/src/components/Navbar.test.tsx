import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand, nav links, and get-started CTA', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /Gains home/ })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Courses', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Get started' })).toBeInTheDocument()
  })

  it('reveals the Pages dropdown on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const pagesButton = screen.getByRole('button', { name: /Pages/ })
    await user.click(pagesButton)

    expect(screen.getByRole('link', { name: 'Trainers' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Single Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Elements' })).toBeInTheDocument()

    // Clicking a dropdown item closes the menu (closeMenu resets state);
    // neutralize jsdom hash-navigation so the handler runs cleanly.
    const trainers = screen.getByRole('link', { name: 'Trainers' })
    trainers.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(trainers)
    expect(pagesButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(2)

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens the Pages dropdown inside the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Toggle menu' }))
    const pagesButtons = screen.getAllByRole('button', { name: /Pages/ })
    const mobilePagesButton = pagesButtons[pagesButtons.length - 1]
    expect(mobilePagesButton).toBeDefined()
    await user.click(mobilePagesButton!)

    // Shared dropdown state renders the items in both navs in jsdom (media
    // queries are not applied), so assert at least one is visible.
    expect(screen.getAllByRole('link', { name: 'Trainers' }).length).toBeGreaterThan(0)
  })
})
