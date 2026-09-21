import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('PISTON')).toBeInTheDocument()
    for (const link of ['Home', 'Program', 'Coaches', 'Schedule', 'About', 'Blog', 'Contact']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(btn)
    // The mobile menu has a second set of links; click the first "Home" in the mobile menu
    const links = screen.getAllByText('Home')
    await user.click(links[links.length - 1]!)
    expect(btn).toHaveAttribute('aria-expanded', 'false')
  })
})
