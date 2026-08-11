import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import {
  asideOpenLabel,
  navHoverClass,
  navLinks,
  navLabel,
  searchCloseLabel,
  searchOpenLabel,
  searchPlaceholder,
  siteName,
} from '../data'

describe('Navbar', () => {
  it('renders the wordmark and the category nav links with dividers and hover colors', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(within(header).getByRole('link', { name: siteName })).toBeInTheDocument()
    const nav = within(header).getByRole('navigation', { name: navLabel })
    for (const link of navLinks) {
      expect(within(nav).getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    expect(within(nav).getByRole('link', { name: 'Web Design' })).toHaveClass(navHoverClass[1])
    expect(within(nav).getByRole('link', { name: 'JavaScript' })).toHaveClass(navHoverClass[2])
    expect(within(nav).getByRole('link', { name: 'CSS' })).toHaveClass(navHoverClass[3])
    expect(within(nav).getByRole('link', { name: 'TypeScript' })).toHaveClass(navHoverClass[4])
    expect(within(nav).getByRole('link', { name: 'News' })).toHaveClass('hover:text-brand')
    expect(within(nav).getByRole('link', { name: 'News' })).toHaveClass(
      'shadow-[inset_-1px_0_0_0_#dfe3eb]',
    )
  })

  it('shows the search and aside toggles with aria-expanded state', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: searchOpenLabel })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.getByRole('button', { name: asideOpenLabel })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('opens the search overlay and closes it with Escape', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const searchButton = screen.getByRole('button', { name: searchOpenLabel })
    await user.click(searchButton)
    expect(searchButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('searchbox', { name: searchPlaceholder })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: searchCloseLabel })).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('searchbox')).not.toBeInTheDocument()
  })

  it('closes the search overlay with the close button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: searchOpenLabel }))
    await user.click(screen.getByRole('button', { name: searchCloseLabel }))
    expect(screen.queryByRole('searchbox')).not.toBeInTheDocument()
  })

  it('submits the search query and closes the overlay', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: searchOpenLabel }))
    const input = screen.getByRole('searchbox', { name: searchPlaceholder })
    await user.type(input, 'design')
    expect(input).toHaveValue('design')
    await user.keyboard('{Enter}')
    expect(screen.queryByRole('searchbox')).not.toBeInTheDocument()
  })

  it('opens the aside drawer with stacked nav links and exposes aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: asideOpenLabel })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const dialog = screen.getByRole('dialog', { name: 'Menu drawer' })
    for (const link of navLinks) {
      expect(within(dialog).getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    expect(within(dialog).getByRole('heading', { name: 'Recent Posts' })).toBeInTheDocument()
    expect(within(dialog).getByRole('heading', { name: 'Follow us' })).toBeInTheDocument()
  })

  it('closes the aside drawer with its close control', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: asideOpenLabel }))
    const dialog = screen.getByRole('dialog', { name: 'Menu drawer' })
    await user.click(within(dialog).getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
