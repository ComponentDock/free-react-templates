import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { describe, expect, it } from 'vitest'

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Proxy')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders hamburger button on mobile', () => {
    render(<Navbar />)
    const button = screen.getByRole('button', { name: /open menu/i })
    expect(button).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const button = screen.getByRole('button', { name: /open menu/i })

    await user.click(button)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when Home link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))

    const navLinks = screen.getAllByRole('link', { name: /home/i })
    const lastLink = navLinks[navLinks.length - 1]
    if (lastLink) await user.click(lastLink)

    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when About link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))

    const links = screen.getAllByRole('link', { name: /about/i })
    const mobileLink = links[links.length - 1]
    if (mobileLink) await user.click(mobileLink)

    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when Blog link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))

    const links = screen.getAllByRole('link', { name: /blog/i })
    const mobileLink = links[links.length - 1]
    if (mobileLink) await user.click(mobileLink)

    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when Contact link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))

    const links = screen.getAllByRole('link', { name: /contact/i })
    const mobileLink = links[links.length - 1]
    if (mobileLink) await user.click(mobileLink)

    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
