import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Justlaw')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /case studies/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument()
  })

  it('renders the free consultation button', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /free consultation/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuButton)

    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getAllByText('Home').length).toBeGreaterThan(1)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileLinks = screen.getAllByText('Home')
    await user.click(mobileLinks[mobileLinks.length - 1]!)

    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when consultation link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const consultationLinks = screen.getAllByText('Free Consultation')
    await user.click(consultationLinks[consultationLinks.length - 1]!)

    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
