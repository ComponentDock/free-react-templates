import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Opulux')).toBeInTheDocument()
    for (const link of ['Home', 'Rooms', 'Restaurant', 'About', 'Blog', 'Contact']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    // Click the mobile Home link (last one in DOM since desktop is hidden via CSS)
    const links = screen.getAllByText('Home')
    await user.click(links[links.length - 1]!)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
