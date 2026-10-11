import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the wordmark and the translucent desktop links over the hero', () => {
    render(<Navbar />)

    const wordmark = screen.getByText('trekvoyage')
    expect(wordmark).toHaveAttribute('href', '#hero')
    expect(wordmark.className).toContain('font-display')

    for (const label of ['Home', 'Services', 'About', 'Contact Us']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    const trigger = screen.getByRole('button', { name: 'Dropdown' })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Elements')).toBeNull()
  })

  it('opens the dropdown panel on hover, nests the submenu and closes on leave', () => {
    render(<Navbar />)

    const wrapper = screen.getByRole('button', { name: 'Dropdown' }).parentElement!
    fireEvent.mouseEnter(wrapper)

    expect(screen.getByRole('button', { name: 'Dropdown' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getByText('Elements')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Menu Three' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Sub Menu One' })).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'Menu Two' }))
    expect(screen.getByRole('link', { name: 'Sub Menu Two' })).toBeInTheDocument()

    fireEvent.mouseLeave(wrapper)
    expect(screen.queryByText('Elements')).toBeNull()
  })

  it('keeps the dropdown open when its trigger is clicked', () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: 'Dropdown' }))

    expect(screen.getByRole('button', { name: 'Dropdown' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getByText('Elements')).toBeInTheDocument()
  })

  it('collapses into an off-canvas panel with collapsible groups on mobile', () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('mobile-navigation')).toBeNull()

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const panel = document.getElementById('mobile-navigation')!
    expect(panel).not.toBeNull()
    for (const label of ['Home', 'About', 'Contact Us']) {
      expect(within(panel).getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(within(panel).getByText('Menu One')).toBeInTheDocument()

    const groupToggle = within(panel).getByRole('button', { name: 'Dropdown' })
    expect(groupToggle).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(groupToggle)
    expect(groupToggle).toHaveAttribute('aria-expanded', 'true')
    expect(within(panel).getByRole('link', { name: 'Sub Menu Three' })).toBeInTheDocument()

    fireEvent.click(groupToggle)
    expect(groupToggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(within(panel).getByRole('button', { name: 'Close navigation' }))
    expect(document.getElementById('mobile-navigation')).toBeNull()
  })
})
