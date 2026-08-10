import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { darkStorageKey, navLinks, pageLinks } from '../data'

describe('Navbar', () => {
  it('renders the brand, section links and the dark-mode toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /quill/i })).toBeInTheDocument()
    for (const link of navLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Toggle dark mode' })).toBeInTheDocument()
  })

  it('opens and closes the Pages dropdown with the page links', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const pagesButton = screen.getByRole('button', { name: /pages/i })
    expect(screen.queryByRole('link', { name: 'Single' })).not.toBeInTheDocument()

    await user.click(pagesButton)
    expect(pagesButton).toHaveAttribute('aria-expanded', 'true')
    for (const page of pageLinks) {
      expect(screen.getByRole('link', { name: page })).toBeInTheDocument()
    }

    await user.click(pagesButton)
    expect(pagesButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Single' })).not.toBeInTheDocument()
  })

  it('toggles the dark class on the document root and persists the choice', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })

    expect(document.documentElement).not.toHaveClass('dark')
    await user.click(toggle)
    expect(document.documentElement).toHaveClass('dark')
    expect(window.localStorage.getItem(darkStorageKey)).toBe('dark')

    await user.click(toggle)
    expect(document.documentElement).not.toHaveClass('dark')
    expect(window.localStorage.getItem(darkStorageKey)).toBe('light')
  })

  it('opens the mobile menu and closes it when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'News' })).toHaveLength(2)

    await user.click(screen.getAllByRole('link', { name: 'News' })[1]!)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('link', { name: 'Single' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
