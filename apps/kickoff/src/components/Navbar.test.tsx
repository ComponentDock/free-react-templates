import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the brand box, nav links, and the Buy Ticket CTA', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Kickoff' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
    for (const label of ['About', 'Games', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    const cta = screen.getByRole('link', { name: 'Buy Ticket' })
    expect(cta).toHaveAttribute('href', '#contact')
  })

  it('toggles the collapsible mobile menu and closes it on link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(2)
    // The CTA stays visible in the header row (not duplicated in the menu).
    expect(screen.getAllByRole('link', { name: 'Buy Ticket' })).toHaveLength(1)

    const mobileLink = screen.getAllByRole('link', { name: 'About' })[1]!
    mobileLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
