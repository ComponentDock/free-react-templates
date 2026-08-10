import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import {
  brandEnd,
  brandStart,
  headerAddSubtitle,
  headerAddTitle,
  menuCloseLabel,
  menuOpenLabel,
  navItems,
} from '../data'

describe('Navbar', () => {
  it('shows the two-tone wordmark, all nav links and the header ad area', () => {
    render(<Navbar />)

    const logo = screen.getByRole('link', { name: `${brandStart}${brandEnd}` })
    expect(logo).toBeInTheDocument()

    const simpleLinks = navItems.filter((item) => !item.children)
    for (const item of simpleLinks) {
      expect(screen.getByRole('link', { name: item.label })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'International' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Pages' })).toBeInTheDocument()

    expect(screen.getByText(headerAddTitle)).toBeInTheDocument()
    expect(screen.getByText(headerAddSubtitle)).toBeInTheDocument()
  })

  it('opens and closes the International dropdown and closes it on child click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const international = screen.getByRole('button', { name: 'International' })
    expect(international).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('United Kingdom')).not.toBeInTheDocument()

    await user.click(international)
    expect(international).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('United Kingdom')).toBeInTheDocument()
    expect(screen.getByText('Egypt')).toBeInTheDocument()

    // Re-clicking the toggle closes the dropdown.
    await user.click(international)
    expect(international).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('United Kingdom')).not.toBeInTheDocument()

    // A child link also closes it.
    await user.click(international)
    await user.click(screen.getByText('Germany'))
    expect(international).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('United Kingdom')).not.toBeInTheDocument()
  })

  it('opens and closes the mobile menu with every nav item listed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: menuOpenLabel })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(screen.getByRole('button', { name: menuCloseLabel })).toBeInTheDocument()
    expect(screen.getByText('Browse Sport')).toBeInTheDocument()
    expect(screen.getByText('Browse Lifestyle')).toBeInTheDocument()
    expect(screen.getAllByText('United Kingdom')).toHaveLength(1)

    await user.click(screen.getByText('Browse Sport'))
    expect(screen.queryByRole('button', { name: menuCloseLabel })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a dropdown child link is pressed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    await user.click(screen.getByText('United Kingdom'))
    expect(screen.queryByRole('button', { name: menuCloseLabel })).not.toBeInTheDocument()
  })
})
