import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Dwelling')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'Properties', 'Agents', 'About', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    })
  })

  it('renders the submit property button', () => {
    render(<Navbar />)
    expect(screen.getByText('Submit Property')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuBtn)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const openBtn = screen.getByRole('button', { name: /open menu/i })
    await user.click(openBtn)
    const homeLinks = screen.getAllByText('Home')
    const mobileLink = homeLinks[homeLinks.length - 1]!
    await user.click(mobileLink)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when Submit Property is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const openBtn = screen.getByRole('button', { name: /open menu/i })
    await user.click(openBtn)
    const submitBtns = screen.getAllByText('Submit Property')
    // The mobile Submit Property button is the second one
    const mobileSubmit = submitBtns[submitBtns.length - 1]!
    await user.click(mobileSubmit)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('has accessible nav label', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
