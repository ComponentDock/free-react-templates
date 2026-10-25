import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { Header } from '../components/Header'
import { header, nav, site } from '../content'
import { THEME_KEY } from '../lib/theme'
import { installMedia, setScroll } from './helpers'

describe('header', () => {
  beforeEach(() => {
    installMedia()
  })

  afterEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('renders the seven-link nav, the pills and the call to action', () => {
    render(<Header />)
    const primary = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(primary).getAllByRole('link')).toHaveLength(nav.length)
    expect(within(primary).getByRole('link', { name: 'Pests' })).toHaveAttribute('href', '#identify')
    expect(screen.getByRole('link', { name: header.location.label })).toHaveAttribute(
      'href',
      header.location.href,
    )
    expect(screen.getByRole('link', { name: header.cta })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: site.phone })).toHaveAttribute('href', site.phoneHref)
  })

  it('takes its shadow only past 50 px', () => {
    const { container } = render(<Header />)
    const element = container.querySelector('[data-header]')
    expect(element).not.toHaveClass('shadow-lg')
    setScroll(80, 2000, 1000)
    expect(element).toHaveClass('shadow-lg')
    setScroll(20, 2000, 1000)
    expect(element).not.toHaveClass('shadow-lg')
  })

  it('opens and closes the mobile panel', async () => {
    render(<Header />)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).toBeNull()
    const toggle = screen.getByRole('button', { name: header.openMenu })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await userEvent.click(toggle)
    const panel = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(panel).getAllByRole('link').length).toBeGreaterThan(nav.length)
    expect(screen.getByRole('button', { name: header.closeMenu })).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    await userEvent.click(within(panel).getByRole('link', { name: 'Plans' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).toBeNull()
  })

  it('flips the theme and remembers it', async () => {
    const { container } = render(<Header />)
    const toggle = screen.getByRole('button', { name: header.themeToggle })
    await userEvent.click(toggle)
    expect(localStorage.getItem(THEME_KEY)).toBe('dark')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(container.querySelector('header')).toBeInTheDocument()

    await userEvent.click(toggle)
    expect(localStorage.getItem(THEME_KEY)).toBe('light')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('starts dark when the stored choice says so', () => {
    installMedia({ dark: true })
    render(<Header />)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})
