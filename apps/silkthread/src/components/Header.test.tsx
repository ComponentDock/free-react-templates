import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('renders top bar with shipping text', () => {
    render(<Header />)
    expect(screen.getByText(/Free shipping, 30-day return/)).toBeInTheDocument()
  })

  it('renders sign in and FAQs links', () => {
    render(<Header />)
    expect(screen.getByText('Sign in')).toBeInTheDocument()
    expect(screen.getByText('FAQs')).toBeInTheDocument()
  })

  it('renders logo', () => {
    render(<Header />)
    expect(screen.getByText('SilkThread')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Shop')).toBeInTheDocument()
    expect(screen.getByText('Pages')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contacts')).toBeInTheDocument()
  })

  it('renders search, wishlist, and cart icons', () => {
    render(<Header />)
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
    expect(screen.getByLabelText('Wishlist')).toBeInTheDocument()
    expect(screen.getByLabelText('Cart')).toBeInTheDocument()
  })

  it('opens mobile menu when hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const menuBtn = screen.getByLabelText('Open menu')
    await user.click(menuBtn)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
  })

  it('closes mobile menu when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByLabelText('Open menu'))
    await user.click(screen.getByLabelText('Close menu'))
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument()
  })

  it('closes mobile menu when overlay is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByLabelText('Open menu'))
    const overlay = document.querySelector('.bg-black\\/50') as HTMLElement
    await user.click(overlay)
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument()
  })

  it('toggles Pages submenu in mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByLabelText('Open menu'))
    const pagesLink = screen.getAllByText('Pages')[1]!
    await user.click(pagesLink)
    expect(screen.getAllByText('About Us').length).toBeGreaterThanOrEqual(2)
  })

  it('closes mobile menu when non-pages link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByLabelText('Open menu'))
    const homeLinks = screen.getAllByText('Home')
    await user.click(homeLinks[homeLinks.length - 1]!)
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument()
  })

  it('closes mobile menu when child link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByLabelText('Open menu'))
    const pagesLink = screen.getAllByText('Pages')[1]!
    await user.click(pagesLink)
    await user.click(screen.getAllByText('About Us').at(-1)!)
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument()
  })
})
