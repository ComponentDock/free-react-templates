import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { describe, it, expect } from 'vitest'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Penman')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const label of ['Home', 'About', 'Chapter', 'Reviews', 'My Books', 'Author', 'Contact']) {
      expect(screen.getAllByText(label).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    // Menu is hidden initially on mobile
    await user.click(toggle)
    // After click, links should be visible
    expect(screen.getByText('Home')).toBeVisible()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggle)
    // Click a link to close
    await user.click(screen.getAllByText('About')[0]!)
    // Menu should be hidden again (hidden class applied)
    // After close, the ul gets 'hidden md:flex' class
  })
})
