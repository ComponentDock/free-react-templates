import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import {
  brandName,
  dropdownItems,
  dropdownLabel,
  menuCloseLabel,
  menuOpenLabel,
  navLinks,
  searchCloseLabel,
  searchOpenLabel,
  searchPlaceholder,
} from '../data'

describe('Header', () => {
  it('renders the wordmark, uppercase nav links and the dropdown trigger', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: brandName })).toBeInTheDocument()

    for (const link of navLinks) {
      expect(screen.getByRole('link', { name: link, hidden: false })).toBeInTheDocument()
    }

    const dropdown = screen.getByRole('button', { name: new RegExp(dropdownLabel, 'i') })
    expect(dropdown).toHaveAttribute('aria-expanded', 'false')
    expect(dropdown).toHaveAttribute('aria-haspopup', 'true')
  })

  it('expands and collapses the search form via the toggle', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: searchOpenLabel })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByPlaceholderText(searchPlaceholder)).not.toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: searchCloseLabel })).toBeInTheDocument()
    const input = screen.getByPlaceholderText(searchPlaceholder)
    expect(input).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: searchCloseLabel }))
    expect(screen.queryByPlaceholderText(searchPlaceholder)).not.toBeInTheDocument()
  })

  it('opens and closes the dropdown submenu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const dropdown = screen.getByRole('button', { name: new RegExp(dropdownLabel, 'i') })
    expect(screen.queryByRole('link', { name: dropdownItems[0] })).not.toBeInTheDocument()

    await user.click(dropdown)
    expect(dropdown).toHaveAttribute('aria-expanded', 'true')
    for (const item of dropdownItems) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }

    await user.click(screen.getByRole('link', { name: dropdownItems[0] }))
    expect(screen.queryByRole('link', { name: dropdownItems[1] })).not.toBeInTheDocument()
  })

  it('opens and closes the mobile menu, and closes it when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: menuOpenLabel })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: menuCloseLabel })).toBeInTheDocument()
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: navLinks[0] })).toHaveLength(2)

    await user.click(screen.getAllByRole('link', { name: navLinks[0] })[1]!)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows dropdown items in the mobile menu and closes it when one is chosen', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: menuOpenLabel })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobileNav).getByText(dropdownLabel)).toBeInTheDocument()
    for (const item of dropdownItems) {
      expect(within(mobileNav).getByRole('link', { name: item })).toBeInTheDocument()
    }

    await user.click(within(mobileNav).getByRole('link', { name: dropdownItems[0] }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
