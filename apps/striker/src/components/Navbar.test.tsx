import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the club wordmark and uppercase nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Striker' })).toBeInTheDocument()
    for (const label of ['Home', 'Matches', 'Players', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
  })

  it('marks the Home link as the current page on desktop and mobile', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(homeLinks[0]).toHaveAttribute('aria-current', 'page')

    await user.click(screen.getByRole('button', { name: 'Toggle menu' }))
    const mobileHomeLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(mobileHomeLinks[1]).toHaveAttribute('aria-current', 'page')
  })

  it('toggles the mobile menu with aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('mobile-menu')).not.toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(document.getElementById('mobile-menu')).toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('mobile-menu')).not.toBeInTheDocument()
  })

  it('closes the mobile menu after choosing a link', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Toggle menu' }))

    const mobileMatches = screen.getAllByRole('link', { name: 'Matches' })[1]!
    mobileMatches.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileMatches)

    expect(document.getElementById('mobile-menu')).not.toBeInTheDocument()
  })
})
