import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('Podwave')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Episodes')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders mobile hamburger button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('opens mobile menu when hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const button = screen.getByRole('button', { name: /open menu/i })
    await user.click(button)
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    await user.click(within(mobileNav).getByText('Episodes'))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
