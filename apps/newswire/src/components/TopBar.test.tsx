import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TopBar } from './TopBar'
import {
  brandName,
  menuCloseLabel,
  menuOpenLabel,
  navLinks,
  searchLabel,
  siteSearchPlaceholder,
  socials,
} from '../data'

describe('TopBar', () => {
  it('renders the site name, social icons, search input and search button', () => {
    render(<TopBar />)

    expect(screen.getByRole('link', { name: brandName })).toBeInTheDocument()
    for (const social of socials) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }
    expect(screen.getByRole('search')).toBeInTheDocument()
    expect(screen.getByRole('searchbox', { name: searchLabel })).toHaveAttribute('type', 'search')
    expect(screen.getByPlaceholderText(siteSearchPlaceholder)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: searchLabel })).toBeInTheDocument()
  })

  it('submits the search form without navigating away', async () => {
    const user = userEvent.setup()
    render(<TopBar />)

    const input = screen.getByRole('searchbox', { name: searchLabel })
    await user.type(input, 'elections')
    await user.click(screen.getByRole('button', { name: searchLabel }))

    expect(input).toHaveValue('elections')
  })

  it('opens and closes the mobile menu with the section links', async () => {
    const user = userEvent.setup()
    render(<TopBar />)

    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    const toggle = screen.getByRole('button', { name: menuOpenLabel })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: menuCloseLabel })).toBeInTheDocument()

    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    for (const link of navLinks) {
      expect(within(mobile).getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(within(mobile).getByRole('link', { name: 'Home' })).toHaveClass('text-accent')

    await user.click(within(mobile).getByRole('link', { name: 'Contact' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: menuOpenLabel })).toBeInTheDocument()
  })
})
