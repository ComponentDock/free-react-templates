import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Lumen')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'About', 'Services', 'Works', 'Clients', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('opens mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /open menu/i })
    await user.click(btn)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu on close click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const links = screen.getAllByRole('link', { name: 'About' })
    const lastLink = links[links.length - 1]
    if (!lastLink) throw new Error('Expected at least one About link')
    await user.click(lastLink)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
