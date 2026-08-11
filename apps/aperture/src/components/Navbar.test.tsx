import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import {
  aboutDropdownLabel,
  menuCloseLabel,
  menuOpenLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  searchCloseLabel,
  searchModelLabel,
  searchOpenLabel,
  searchPlaceholder,
  searchSubmitLabel,
  siteName,
} from '../data'

describe('Navbar', () => {
  it('renders the site name, primary links, and header switches', () => {
    render(<Navbar />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: siteName })).toHaveAttribute('href', '#home')

    const nav = screen.getByRole('navigation', { name: navLabel })
    for (const item of navItems) {
      if (item.children) {
        expect(screen.getByRole('button', { name: aboutDropdownLabel })).toBeInTheDocument()
      } else {
        expect(within(nav).getByRole('link', { name: item.label })).toHaveAttribute(
          'href',
          item.href,
        )
      }
    }
    expect(screen.getByRole('button', { name: searchOpenLabel })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: menuOpenLabel })).toBeInTheDocument()
  })

  it('highlights the active Home link with the brand underline', () => {
    render(<Navbar />)
    const home = screen.getByRole('link', { name: 'Home' })
    expect(home).toHaveAttribute('aria-current', 'page')
    expect(home.className).toContain('after:scale-x-100')
  })

  it('expands and collapses the About dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const button = screen.getByRole('button', { name: aboutDropdownLabel })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'Albums Details' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Albums Details' })).not.toBeInTheDocument()
  })

  it('opens the search overlay and clears the query on submit', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: searchOpenLabel }))
    expect(screen.getByRole('search', { name: searchModelLabel })).toBeInTheDocument()

    const input = screen.getByRole('searchbox', { name: searchPlaceholder })
    await user.type(input, 'flowers')
    expect(input).toHaveValue('flowers')

    await user.click(screen.getByRole('button', { name: searchSubmitLabel }))
    expect(input).toHaveValue('')
  })

  it('closes the search overlay from its close button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: searchOpenLabel }))
    expect(screen.getByRole('search', { name: searchModelLabel })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: searchCloseLabel }))
    expect(screen.queryByRole('search', { name: searchModelLabel })).not.toBeInTheDocument()
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const mobileNav = screen.getByRole('navigation', { name: mobileNavLabel })
    for (const item of navItems) {
      expect(within(mobileNav).getByRole('link', { name: item.label })).toBeInTheDocument()
    }
    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is activated', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const mobileAlbums = screen
      .getAllByRole('link', { name: 'Albums' })
      .find((link) => link.closest('nav')?.getAttribute('aria-label') === mobileNavLabel)
    expect(mobileAlbums).toBeDefined()
    await user.click(mobileAlbums!)
    expect(screen.queryByRole('navigation', { name: mobileNavLabel })).not.toBeInTheDocument()
  })
})
