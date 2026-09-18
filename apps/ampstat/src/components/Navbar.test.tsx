import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders logo with equalizer bars and music text', () => {
    render(<Navbar />)
    expect(screen.getByText('music')).toBeInTheDocument()
  })

  it('renders desktop navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Artists' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Download Music' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'News' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders login and register links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Login' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Register' })).toBeInTheDocument()
  })

  it('renders hamburger button for mobile', () => {
    render(<Navbar />)
    expect(screen.getByTestId('hamburger')).toBeInTheDocument()
  })

  it('opens mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByTestId('hamburger'))
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
  })

  it('closes mobile menu on close button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByTestId('hamburger'))
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
    await user.click(screen.getByLabelText('Close menu'))
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByTestId('hamburger'))
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
    const mobileLinks = screen.getByTestId('mobile-menu').querySelectorAll('a')
    await user.click(mobileLinks[0]!)
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
  })
})
