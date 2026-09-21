import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Platform')).toBeInTheDocument()
    expect(screen.getByText('Pages')).toBeInTheDocument()
    expect(screen.getByText('Reviews')).toBeInTheDocument()
    expect(screen.getByText('Windows')).toBeInTheDocument()
    expect(screen.getByText('Videos')).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const hamburger = screen.getByLabelText('Toggle mobile menu')
    await user.click(hamburger)
    expect(hamburger).toHaveAttribute('aria-expanded', 'true')
  })

  it('toggles search on search button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const searchBtn = screen.getByLabelText('Toggle search')
    await user.click(searchBtn)
    expect(screen.getByLabelText('Search articles')).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const hamburger = screen.getByLabelText('Toggle mobile menu')
    await user.click(hamburger)
    expect(hamburger).toHaveAttribute('aria-expanded', 'true')
    // Click a mobile menu link (the first "Home" link in the mobile menu)
    const mobileLinks = screen.getAllByText('Home')
    const mobileLink = mobileLinks[mobileLinks.length - 1]!
    await user.click(mobileLink)
    expect(hamburger).toHaveAttribute('aria-expanded', 'false')
  })
})
