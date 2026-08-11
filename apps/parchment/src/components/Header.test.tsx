import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import {
  closeSearchLabel,
  menuCloseLabel,
  menuOpenLabel,
  openSearchLabel,
  searchHint,
  siteName,
} from '../data'

describe('Header', () => {
  it('renders the wordmark, nav, and search trigger', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: `${siteName} home` })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: openSearchLabel })).toBeInTheDocument()
    expect(screen.getByText('Search')).toBeInTheDocument()
  })

  it('opens and closes the full-screen search overlay', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: openSearchLabel }))
    expect(screen.getByRole('search')).toBeInTheDocument()
    expect(screen.getByText(searchHint)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: closeSearchLabel }))
    expect(screen.queryByRole('search')).not.toBeInTheDocument()
  })

  it('toggles the mobile navigation panel from the hamburger', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const hamburger = screen.getByRole('button', { name: menuOpenLabel })
    expect(hamburger).toHaveAttribute('aria-expanded', 'false')

    await user.click(hamburger)
    expect(screen.getByRole('button', { name: menuCloseLabel })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getAllByRole('navigation', { name: 'Main navigation' })).toHaveLength(2)

    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(screen.getByRole('button', { name: menuOpenLabel })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.getAllByRole('navigation', { name: 'Main navigation' })).toHaveLength(1)
  })
})
