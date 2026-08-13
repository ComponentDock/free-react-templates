import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the wordmark and the six desktop nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Generous' })).toHaveClass('uppercase')
    const links = screen.getAllByRole('link', { hidden: true })
    expect(links.map((l) => l.textContent).filter(Boolean)).toEqual(
      expect.arrayContaining(['Home', 'Donate', 'Gallery', 'Blog', 'About', 'Contact']),
    )
  })

  it('marks Home as the active page', () => {
    render(<Navbar />)
    const home = screen.getAllByRole('link', { hidden: true }).find((l) => l.textContent === 'Home')
    expect(home).toHaveAttribute('aria-current', 'page')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(mobile).toBeInTheDocument()
    expect(mobile.textContent).toContain('Gallery')
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const blogLink = within(mobile).getByRole('link', { name: 'Blog' })
    blogLink.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(blogLink)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
