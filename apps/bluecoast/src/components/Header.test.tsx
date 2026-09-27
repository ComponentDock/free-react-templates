import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders the site logo', () => {
    render(<Header />)
    expect(screen.getByText('BlueCoast')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(screen.getByText('Properties')).toBeInTheDocument()
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('displays the phone number on desktop', () => {
    render(<Header />)
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
  })

  it('has a hamburger menu button for mobile', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const btn = screen.getByRole('button', { name: /open menu/i })
    await user.click(btn)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const aboutLinks = screen.getAllByText('About us')
    const mobileLink = aboutLinks[aboutLinks.length - 1]
    if (mobileLink) await user.click(mobileLink)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
