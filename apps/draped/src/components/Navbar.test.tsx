import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders site name', () => {
    render(<Navbar />)
    expect(screen.getByText('Draped')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /collection/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^shop$/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /catalogs/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders search icon', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('renders wishlist icon', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /wishlist/i })).toBeInTheDocument()
  })

  it('renders shopping bag with count badge', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /shopping bag/i })).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('renders dark mode toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /switch to dark mode/i })).toBeInTheDocument()
  })

  it('calls onToggleDark when dark mode toggle is clicked', async () => {
    const user = userEvent.setup()
    const onToggleDark = vi.fn()
    render(<Navbar onToggleDark={onToggleDark} />)
    await user.click(screen.getByRole('button', { name: /switch to dark mode/i }))
    expect(onToggleDark).toHaveBeenCalledTimes(1)
  })

  it('shows sun icon when dark mode is active', () => {
    render(<Navbar dark={true} />)
    expect(screen.getByRole('button', { name: /switch to light mode/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on menu button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuButton = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuButton)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when Collection link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileLinks = screen.getAllByRole('link', { name: /collection/i })
    await user.click(mobileLinks[mobileLinks.length - 1]!)
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu when Shop link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const shopLinks = screen.getAllByRole('link', { name: /^shop$/i })
    await user.click(shopLinks[shopLinks.length - 1]!)
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu when Catalogs link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const catalogsLinks = screen.getAllByRole('link', { name: /catalogs/i })
    await user.click(catalogsLinks[catalogsLinks.length - 1]!)
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu when Contact link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const contactLinks = screen.getAllByRole('link', { name: /contact/i })
    await user.click(contactLinks[contactLinks.length - 1]!)
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })
})
