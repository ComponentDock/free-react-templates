import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Orbiter brand', () => {
    render(<Navbar />)
    expect(screen.getByText('Orbiter')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('renders Why Orbiter dropdown trigger', () => {
    render(<Navbar />)
    expect(screen.getByText('Why Orbiter')).toBeInTheDocument()
  })

  it('highlights Home as active', () => {
    render(<Navbar />)
    const homeLink = screen.getByText('Home')
    expect(homeLink).toHaveClass('text-brand-primary')
  })

  it('opens mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu on close click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('shows Why Orbiter dropdown on hover', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const whyBtn = screen.getByText('Why Orbiter')
    await user.hover(whyBtn)
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('SEO Marketing')).toBeInTheDocument()
  })

  it('hides Why Orbiter dropdown on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const whyBtn = screen.getByText('Why Orbiter')
    await user.hover(whyBtn)
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    await user.unhover(whyBtn)
    expect(screen.queryByText('SEO Marketing')).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    const mobileLinks = screen.getAllByText('Home')
    const mobileLink = mobileLinks[mobileLinks.length - 1]!
    await user.click(mobileLink)
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('toggles Why Orbiter dropdown in mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const whyBtns = screen.getAllByText('Why Orbiter')
    const mobileWhyBtn = whyBtns[whyBtns.length - 1]!
    await user.click(mobileWhyBtn)
    // SEO Marketing appears in both desktop and mobile menus in jsdom
    const seoLinks = screen.getAllByText('SEO Marketing')
    expect(seoLinks.length).toBe(2)
    await user.click(mobileWhyBtn)
    // Both menus close (shared state) — SEO Marketing should not be found
    const seoLinksAfter = screen.queryAllByText('SEO Marketing')
    expect(seoLinksAfter).toHaveLength(0)
  })
})
