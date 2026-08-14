import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the brand and desktop nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Hostelry/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    for (const label of ['Home', 'About us', 'Accomodation', 'Gallery', 'Contact']) {
      expect(
        within(screen.getByRole('navigation', { name: 'Primary' })).getByRole('link', {
          name: label,
        }),
      ).toBeInTheDocument()
    }
    expect(
      within(screen.getByRole('navigation', { name: 'Primary' })).getByRole('button', {
        name: /Blog/i,
      }),
    ).toBeInTheDocument()
  })

  it('opens the Blog dropdown with its items and closes on item click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const blogButton = within(screen.getByRole('navigation', { name: 'Primary' })).getByRole(
      'button',
      { name: /Blog/i },
    )
    expect(blogButton).toHaveAttribute('aria-expanded', 'false')
    await user.click(blogButton)
    expect(blogButton).toHaveAttribute('aria-expanded', 'true')
    for (const item of ['Blog', 'Blog Details', 'Elemests']) {
      expect(screen.getAllByRole('link', { name: item }).length).toBeGreaterThan(0)
    }
    const detailsLink = screen.getAllByRole('link', { name: 'Blog Details' })[0]!
    fireEvent.click(detailsLink, { bubbles: true })
    expect(blogButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the dropdown when the panel background is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const blogButton = within(screen.getByRole('navigation', { name: 'Primary' })).getByRole(
      'button',
      { name: /Blog/i },
    )
    await user.click(blogButton)
    expect(blogButton).toHaveAttribute('aria-expanded', 'true')
    // The panel is the parent of the dropdown links.
    const panel = screen.getByRole('link', { name: 'Elemests' }).parentElement!
    fireEvent.click(panel, { bubbles: true })
    expect(blogButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the dropdown when the mouse leaves the wrapper', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const blogButton = within(screen.getByRole('navigation', { name: 'Primary' })).getByRole(
      'button',
      { name: /Blog/i },
    )
    await user.click(blogButton)
    expect(blogButton).toHaveAttribute('aria-expanded', 'true')
    const wrapper = blogButton.parentElement!
    fireEvent.mouseLeave(wrapper)
    expect(blogButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a blog dropdown item is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const elemests = within(mobileNav).getByRole('link', { name: 'Elemests' })
    elemests.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(elemests)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles the mobile menu and closes it when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobileNav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    const homeLink = within(mobileNav).getByRole('link', { name: 'Home' })
    homeLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(homeLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
