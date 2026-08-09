import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'
import { fireEvent } from '@testing-library/react'

describe('Navbar', () => {
  it('renders the brand and primary links with Home active', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Kraft' })).toHaveAttribute('href', '#home')
    const home = screen.getByRole('link', { name: 'Home' })
    expect(home).toHaveAttribute('href', '#home')
    expect(home.className).toContain('text-brand')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#portfolio')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('renders a search input with placeholder and icon', () => {
    render(<Navbar />)

    const inputs = screen.getAllByRole('searchbox')
    expect(inputs.length).toBeGreaterThan(0)
    for (const input of inputs) {
      expect(input).toHaveAttribute('placeholder', 'Search...')
    }
  })

  it('does not navigate when the search form is submitted', () => {
    render(<Navbar />)

    const input = screen.getAllByRole('searchbox')[0]!
    fireEvent.change(input, { target: { value: 'logo' } })
    const form = input.closest('form')!
    fireEvent.submit(form)

    expect(input).toHaveValue('logo')
  })

  it('opens and closes the Services dropdown', () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Services' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Branding' })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: 'Web Design' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'App Design' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Start Up' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('link', { name: 'Branding' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles the mobile menu with aria-expanded and closes it when a link is clicked', () => {
    render(<Navbar />)

    const toggler = screen.getByRole('button', { name: 'Toggle navigation' })
    expect(toggler).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggler)
    expect(toggler).toHaveAttribute('aria-expanded', 'true')

    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(nav).toHaveAttribute('data-state', 'open')

    fireEvent.click(screen.getByRole('link', { name: 'About' }))
    expect(toggler).toHaveAttribute('aria-expanded', 'false')
    expect(nav).toHaveAttribute('data-state', 'closed')
  })
})
