import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'
import { address, blogSubLinks, navLinks, phoneDisplay, phoneHref, socials } from '../data'

describe('Sidebar', () => {
  it('renders the logo, nav links, order button, contact info and socials', () => {
    render(<Sidebar />)
    expect(screen.getByText('Beanery')).toBeInTheDocument()
    expect(screen.getByText('EST. 1985')).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    for (const link of navLinks) {
      if (link.label === 'Blog') continue
      expect(within(nav).getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }

    expect(screen.getByRole('link', { name: 'Order Online' })).toHaveAttribute('href', '#contact')
    const phone = screen.getByRole('link', { name: phoneDisplay })
    expect(phone).toHaveAttribute('href', phoneHref)
    expect(screen.getByText(address)).toBeInTheDocument()
    for (const social of socials) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }
  })

  it('expands and collapses the Blog dropdown', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)

    const blogButton = screen.getByRole('button', { name: /Blog/ })
    expect(blogButton).toHaveAttribute('aria-expanded', 'false')
    await user.click(blogButton)
    expect(blogButton).toHaveAttribute('aria-expanded', 'true')
    for (const sub of blogSubLinks) {
      expect(screen.getByRole('link', { name: sub.label })).toBeInTheDocument()
    }
    await user.click(blogButton)
    expect(blogButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()
  })

  it('opens and closes the off-canvas drawer on small screens', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the drawer when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    const galleryLink = screen.getByRole('link', { name: 'Gallery' })
    galleryLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(galleryLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the drawer when the logo or a blog sub-link is clicked', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    const logo = screen.getByRole('link', { name: /Beanery/ })
    logo.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(logo)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('button', { name: /Blog/ }))
    const subLink = screen.getByRole('link', { name: 'Elements' })
    subLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(subLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
