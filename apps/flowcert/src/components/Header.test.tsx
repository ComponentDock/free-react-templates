import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

const NAV = ['Got a letter?', 'Pricing', 'Services', 'Service areas', 'About', 'Contact']

describe('Header', () => {
  it('renders the licence strip with its three facts and the rating', () => {
    render(<Header />)

    expect(screen.getByText('Certified tester')).toBeInTheDocument()
    expect(screen.getByText('OR #04127')).toBeInTheDocument()
    expect(screen.getByText('Results filed for you')).toBeInTheDocument()
    expect(screen.getByText('Kesler County')).toBeInTheDocument()

    const rating = screen.getByText('4.9').closest('p')
    expect(rating).toHaveTextContent('380+ reviews on Google · sample data')
    expect(rating?.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders the six in-page links, each pointing at a band that exists', () => {
    render(<Header />)

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    const links = within(nav).getAllByRole('link')

    expect(links).toHaveLength(6)
    expect(links.map((link) => link.textContent)).toEqual(NAV)
    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      '#process',
      '#pricing',
      '#services',
      '#areas',
      '#why-us',
      '#contact',
    ])
  })

  it('renders the lockup, a digits-only phone link and the solid call to action', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Flowcert home' })).toHaveAttribute('href', '#top')

    const phone = screen.getByRole('link', { name: '(555) 150-1500' })
    expect(phone).toHaveAttribute('href', 'tel:5551501500')

    const cta = screen.getByRole('link', { name: 'Book a test' })
    expect(cta).toHaveAttribute('href', '#quote')
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

    await user.click(within(mobileNav).getByRole('link', { name: 'Pricing' }))

    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile disclosure from its location pill and its call to action', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    await user.click(within(mobileNav).getByRole('link', { name: 'Ridgemont, OR' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const reopened = screen.getByRole('navigation', { name: 'Mobile navigation' })
    await user.click(within(reopened).getByRole('link', { name: 'Book a test' }))
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
