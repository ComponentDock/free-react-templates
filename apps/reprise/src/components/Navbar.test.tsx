import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('Reprise')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const label of ['Home', 'About', 'Story', 'Blog', 'Contact', 'More']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const links = screen.getAllByRole('link', { name: 'Home' })
    // The mobile overlay link (the last one)
    await user.click(links.at(-1)!)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
