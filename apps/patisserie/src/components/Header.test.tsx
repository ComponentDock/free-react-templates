import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'
import { brand, nav } from '../data'

describe('Header', () => {
  it('shows the top bar with social icons and the Call Us line', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: nav.callUs })).toBeInTheDocument()
  })

  it('shows the centered gold wordmark and the uppercase nav links', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: brand })).toBeInTheDocument()
    const desktopNav = screen.getByRole('navigation', { name: 'Main navigation' })
    for (const link of nav.links) {
      expect(within(desktopNav).getAllByRole('link', { name: link.label })[0]).toBeInTheDocument()
    }
  })

  it('hides the Blog dropdown until the link is hovered', () => {
    render(<Header />)
    const desktopNav = screen.getByRole('navigation', { name: 'Main navigation' })
    const blog = within(desktopNav).getAllByRole('link', { name: 'Blog' })[0]!
    const dropdownList = blog.closest('li')!.querySelector('ul')!
    expect(dropdownList).not.toBeNull()
    const items = Array.from(dropdownList.querySelectorAll('li')).map((li) => li.textContent)
    expect(items).toEqual(['Blog', 'Blog Details', 'Elements'])
    expect(blog).toBeInTheDocument()
  })

  it('opens and closes the mobile menu via the hamburger toggle', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open navigation menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open navigation menu' })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    await user.click(within(mobileNav).getByRole('link', { name: 'About' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a Blog dropdown item is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open navigation menu' })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    await user.click(within(mobileNav).getByRole('link', { name: 'Blog Details' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
