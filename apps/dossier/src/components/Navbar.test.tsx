import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand, nav links with Home active, and the Email CTA', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Dossier' })).toHaveAttribute('href', '#home')

    const primary = screen.getByRole('navigation', { name: 'Primary' })
    const home = within(primary).getByRole('link', { name: 'Home' })
    expect(home).toHaveAttribute('href', '#home')
    expect(home.className).toContain('font-bold')
    expect(within(primary).getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(within(primary).getByRole('link', { name: 'Portfolio' })).toHaveAttribute(
      'href',
      '#portfolio',
    )
    expect(within(primary).getByRole('button', { name: 'Blog' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(within(primary).getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'href',
      '#contact',
    )

    expect(screen.getByRole('link', { name: 'Fire me an Email' })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByRole('link', { name: 'Fire me an Email' }).className).toContain('underline')
    expect(document.querySelector('[data-header]')!.className).toContain('border-b')
  })

  it('opens and closes the Blog dropdown', () => {
    render(<Navbar />)
    const primary = screen.getByRole('navigation', { name: 'Primary' })
    const trigger = within(primary).getByRole('button', { name: 'Blog' })

    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    const dropdown = document.querySelector('[data-blog-dropdown]')!
    expect(
      within(dropdown as HTMLElement).getByRole('link', { name: 'Blog Details' }),
    ).toHaveAttribute('href', '#blog')
    expect(
      within(dropdown as HTMLElement).getByRole('link', { name: 'Elements' }),
    ).toBeInTheDocument()

    fireEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(document.querySelector('[data-blog-dropdown]')).toBeNull()
  })

  it('opens the mobile menu, expands Blog inline, and closes', () => {
    render(<Navbar />)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobile).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(mobile).getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    expect(within(mobile).getByRole('link', { name: 'Fire me an Email' })).toBeInTheDocument()

    const blogTrigger = within(mobile).getByRole('button', { name: 'Blog' })
    fireEvent.click(blogTrigger)
    expect(within(mobile).getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).toBeNull()
  })
})
