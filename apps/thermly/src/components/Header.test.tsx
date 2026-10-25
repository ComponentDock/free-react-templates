import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

const NAV = ['Services', 'Maintenance plans', 'Service areas', 'About', 'Blog', 'Contact']

describe('Header', () => {
  it('renders the licence strip and the six in-page links', () => {
    render(<Header />)

    expect(screen.getByText('Licence #1048832 · C-20')).toBeInTheDocument()
    expect(screen.getByText('NATE-certified technicians')).toBeInTheDocument()
    expect(screen.getByText('Cedar County')).toBeInTheDocument()
    expect(screen.getByText('340+ reviews on Google · sample data')).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    const links = within(nav).getAllByRole('link')

    expect(links).toHaveLength(6)
    expect(links.map((link) => link.textContent)).toEqual(NAV)
    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      '#seasons',
      '#plans',
      '#areas',
      '#why-us',
      '#reviews',
      '#contact',
    ])
  })

  it('renders the wordmark link, the phone link and the desktop call to action', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Thermly home' })).toHaveAttribute('href', '#top')

    const phone = screen.getByRole('link', { name: '(555) 020-0200' })
    expect(phone).toHaveAttribute('href', 'tel:+15550200200')

    const ctas = screen.getAllByRole('link', { name: 'Book a visit' })
    expect(ctas.length).toBeGreaterThan(0)
  })

  it('opens and closes the mobile disclosure from its control', async () => {
    const user = userEvent.setup()
    const { container } = render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(container.querySelector('#mobile-nav')).toHaveAttribute('hidden')

    await user.click(toggle)

    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(container.querySelector('#mobile-nav')).not.toHaveAttribute('hidden')

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobileNav).getAllByRole('link')).toHaveLength(9)

    await user.click(within(mobileNav).getByRole('link', { name: 'Service areas' }))

    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile disclosure from its city pill and its call to action', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    await user.click(within(mobileNav).getByRole('link', { name: 'Millbrook, CA' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const reopened = screen.getByRole('navigation', { name: 'Mobile navigation' })
    await user.click(within(reopened).getByRole('link', { name: 'Book a visit' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes the mobile disclosure with Escape and ignores other keys', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.keyboard('a')
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
