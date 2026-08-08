import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('shows the wordmark and the six section links plus the Post a Job CTA', () => {
    render(<Navbar />)

    expect(screen.getByText('Jobfield')).toBeInTheDocument()

    for (const label of ['Jobs', 'Companies', 'About', 'Pricing', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }

    expect(screen.getAllByRole('link', { name: 'Post a Job' }).length).toBeGreaterThanOrEqual(1)
  })

  it('anchors the Jobs and Companies links to their on-page sections', () => {
    render(<Navbar />)

    expect(screen.getAllByRole('link', { name: 'Jobs' })[0]).toHaveAttribute('href', '#jobs')
    expect(screen.getAllByRole('link', { name: 'Companies' })[0]).toHaveAttribute(
      'href',
      '#companies',
    )
  })

  it('defaults to light mode and toggles it, persisting the choice', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem('jobfield-theme')).toBe('light')

    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })
    await user.click(toggle)

    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(window.localStorage.getItem('jobfield-theme')).toBe('dark')

    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(window.localStorage.getItem('jobfield-theme')).toBe('light')
  })

  it('restores a persisted dark preference on load', () => {
    window.localStorage.setItem('jobfield-theme', 'dark')
    render(<Navbar />)

    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('removes the dark class on unmount', async () => {
    const user = userEvent.setup()
    const { unmount } = render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    unmount()
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens and closes the mobile drawer', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: 'Jobs' })).toHaveLength(2)

    await user.click(screen.getAllByRole('link', { name: 'Jobs' })[1]!)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the drawer when the drawer CTA is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Toggle mobile menu' })
    await user.click(menuButton)
    await user.click(screen.getAllByRole('link', { name: 'Post a Job' })[1]!)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })
})
