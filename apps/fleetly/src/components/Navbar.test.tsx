import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the brand, nav links, and the Pages dropdown', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Fleetly' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
    for (const label of ['About', 'Cars', 'Service', 'Team', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Pages' })).toBeInTheDocument()
  })

  it('toggles the Pages dropdown on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const pagesBtn = screen.getByRole('button', { name: 'Pages' })
    expect(pagesBtn).toHaveAttribute('aria-expanded', 'false')

    await user.click(pagesBtn)
    expect(pagesBtn).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Blog Single' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Elements' })).toBeInTheDocument()
  })

  it('toggles the collapsible mobile menu and closes it on link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(2)

    const mobileLink = screen.getAllByRole('link', { name: 'About' })[1]!
    mobileLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
