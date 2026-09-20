import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('EncoreMix')).toBeInTheDocument()
    for (const link of ['HOME', 'ABOUT', 'ARTISTS', 'BLOG', 'CONTACT']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders search button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('opens mobile menu when hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(menuBtn)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when close is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /toggle menu/i }))
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /toggle menu/i }))
    // In the mobile menu, find the ABOUT link and click it
    const aboutLink = screen.getAllByText('ABOUT')
    // The mobile menu link is rendered in a list item
    const mobileLink = aboutLink[1]
    if (mobileLink) {
      await user.click(mobileLink)
    }
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })
})
