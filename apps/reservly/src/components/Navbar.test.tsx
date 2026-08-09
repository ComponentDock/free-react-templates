import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('dark')
  })

  it('renders the Reservly wordmark, anchor links, and phone link', () => {
    render(<Navbar />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByText('Reservly')).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: /\+1/ })).toBeInTheDocument()
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const menu = screen.getByRole('navigation', { name: /mobile menu/i })
    for (const label of ['Home', 'About', 'Contact']) {
      expect(within(menu).getByRole('link', { name: label })).toBeInTheDocument()
    }
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('navigation', { name: /mobile menu/i })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const menu = screen.getByRole('navigation', { name: /mobile menu/i })
    await user.click(within(menu).getByRole('link', { name: 'About' }))
    expect(screen.queryByRole('navigation', { name: /mobile menu/i })).not.toBeInTheDocument()
  })
})
