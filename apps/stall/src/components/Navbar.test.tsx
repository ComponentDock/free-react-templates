import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name and all nav links', () => {
    render(<Navbar />)

    expect(screen.getByText('Stall')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    for (const link of [
      'Home',
      'Products',
      'About',
      'Special',
      'Testimonials',
      'Blog',
      'Contact',
    ]) {
      expect(screen.getByRole('link', { name: link })).toHaveAttribute(
        'href',
        `#${link.toLowerCase()}`,
      )
    }
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)

    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const links = mobileNav.querySelectorAll('a')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await user.click(links[0]!)

    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
