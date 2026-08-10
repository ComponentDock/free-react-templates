import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { darkStorageKey } from '../data'

describe('Navbar', () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  it('renders the site name and primary navigation links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Quill' })).toHaveAttribute('href', '#home')
    const primary = screen.getByRole('navigation', { name: 'Primary' })
    for (const link of ['Home', 'News', 'Travel', 'Fashion', 'Team']) {
      expect(primary).toHaveTextContent(link)
    }
    expect(primary).toHaveTextContent('Pages')
  })

  it('opens the Pages dropdown listing all six pages', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const pagesButton = screen.getByRole('button', { name: 'Pages' })
    expect(pagesButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(pagesButton)
    expect(pagesButton).toHaveAttribute('aria-expanded', 'true')
    const menu = screen.getByRole('menu', { name: 'Pages' })
    for (const page of ['Single', 'Category', 'Search', 'Archive', 'Generic', 'Elements']) {
      expect(menu).toHaveTextContent(page)
    }

    await user.click(screen.getByRole('menuitem', { name: 'Single' }))
    expect(screen.queryByRole('menu', { name: 'Pages' })).not.toBeInTheDocument()
  })

  it('toggles dark mode on the document root and persists the preference', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(document.documentElement).not.toHaveClass('dark')

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement).toHaveClass('dark')
    expect(window.localStorage.getItem(darkStorageKey)).toBe('dark')

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement).not.toHaveClass('dark')
    expect(window.localStorage.getItem(darkStorageKey)).toBe('light')
  })

  it('opens the mobile menu with links and closes it on link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const openButton = screen.getByRole('button', { name: 'Open menu' })
    await user.click(openButton)

    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobile).toHaveTextContent('Travel')
    expect(mobile).toHaveTextContent('Elements')

    await user.click(screen.getByRole('link', { name: 'Travel' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
