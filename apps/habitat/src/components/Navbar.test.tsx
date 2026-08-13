import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the brand, nav links and brand icon cluster', () => {
    render(<Navbar />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Habitat\./ })).toBeInTheDocument()
    for (const label of [
      'Home',
      'Search Results',
      'Categories',
      'Single Property',
      'Blog',
      'Contact',
    ]) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    for (const label of ['Pinterest', 'Facebook', 'Twitter', 'Dribbble', 'Behance']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeInTheDocument()
    const blogLink = within(mobileNav).getByRole('link', { name: 'Blog' })
    blogLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(blogLink)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
