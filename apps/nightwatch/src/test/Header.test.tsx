import { fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Header } from '../components/Header'
import { NAV } from '../content'
import { setScroll } from './helpers'

afterEach(() => {
  document.documentElement.classList.remove('dark')
  localStorage.clear()
  setScroll(0, 0)
})

describe('Header', () => {
  it('renders the seven labels, phone pill and CTA in one sticky bar', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('header') as HTMLElement

    expect(header).toHaveClass('sticky', 'top-0')
    expect(header.querySelector('div')).toHaveClass('h-16', 'lg:h-20')

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    const labels = within(nav).getAllByRole('link')
    expect(labels.map((link) => link.textContent)).toEqual(NAV.map((item) => item.label))
    expect(labels[0]).toHaveClass('text-sm', 'font-semibold', 'text-ink-600')
    expect(labels[0]).toHaveAttribute('href', '#scope')

    expect(screen.getByRole('link', { name: '(555) 050-0500' })).toHaveAttribute(
      'href',
      'tel:+15550500500',
    )
    expect(screen.getByRole('link', { name: 'Request a proposal' })).toHaveAttribute(
      'href',
      '#proposal',
    )
    expect(screen.getByRole('link', { name: 'Indianapolis, IN' })).toHaveAttribute('href', '#areas')
  })

  it('opens and closes the mobile disclosure with the glyph and aria state', () => {
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Open the menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByTestId('mobile-menu')).toBeNull()

    fireEvent.click(toggle)
    const closer = screen.getByRole('button', { name: 'Close the menu' })
    expect(closer).toHaveAttribute('aria-expanded', 'true')

    const panel = screen.getByTestId('mobile-menu')
    const rows = within(panel).getAllByRole('link')
    expect(rows).toHaveLength(NAV.length + 3)

    fireEvent.click(within(panel).getByRole('link', { name: 'Contact' }))
    expect(screen.queryByTestId('mobile-menu')).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'Open the menu' }))
    fireEvent.click(within(screen.getByTestId('mobile-menu')).getByRole('link', { name: 'Request a proposal' }))
    expect(screen.queryByTestId('mobile-menu')).toBeNull()
  })

  it('flips the theme class, persists it and swaps the toggle label', () => {
    render(<Header />)

    fireEvent.click(screen.getByRole('button', { name: 'Switch to dark theme' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(localStorage.getItem('theme')).toBe('dark')

    fireEvent.click(screen.getByRole('button', { name: 'Switch to light theme' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(localStorage.getItem('theme')).toBe('light')
  })

  it('reads a dark class that was already applied before first paint', () => {
    document.documentElement.classList.add('dark')
    render(<Header />)

    expect(screen.getByRole('button', { name: 'Switch to light theme' })).toBeInTheDocument()
  })

  it('takes its shadow only past fifty pixels and keeps its height', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('header') as HTMLElement

    expect(header).not.toHaveClass('shadow-lg')

    setScroll(60, 4000, 1000)
    expect(header).toHaveClass('shadow-lg')

    setScroll(0, 4000, 1000)
    expect(header).not.toHaveClass('shadow-lg')
  })
})
