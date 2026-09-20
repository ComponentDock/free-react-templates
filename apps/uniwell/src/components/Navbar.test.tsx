import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand logo', () => {
    render(<Navbar />)
    const logo = screen.getByRole('link', { name: /Uni.*well/ })
    expect(logo).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('About').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Courses').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Blog').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Page').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Contact').length).toBeGreaterThanOrEqual(1)
  })

  it('renders search and cart buttons', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
    expect(screen.getByLabelText('Shopping cart')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuButton = screen.getByLabelText('Open menu')
    await user.click(menuButton)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    // Mobile links should be visible (getAllByText because desktop links are also in DOM)
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(2)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Open menu'))
    // Click the mobile "Home" link (second one in the list)
    const homeLinks = screen.getAllByText('Home')
    const mobileLink = homeLinks[homeLinks.length - 1]
    expect(mobileLink).toBeDefined()
    await user.click(mobileLink!)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })
})
