import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import {
  closeMenuLabel,
  followUsLabel,
  gameSingleLabel,
  loginLabel,
  navItems,
  openMenuLabel,
  siteName,
  socialLabels,
  socials,
} from '../data'

describe('Header', () => {
  it('renders the social row, logo, user panel and desktop nav', () => {
    render(<Header />)
    expect(screen.getByText(followUsLabel)).toBeInTheDocument()
    for (const name of socials) {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: siteName })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: loginLabel })).toBeInTheDocument()
    for (const item of navItems) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
  })

  it('renders the Games dropdown item in the desktop menu', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: gameSingleLabel })).toBeInTheDocument()
  })

  it('toggles the mobile menu from the hamburger button', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: openMenuLabel })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(screen.getByRole('button', { name: closeMenuLabel })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: closeMenuLabel }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('expands the Games submenu inside the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: openMenuLabel }))
    const gamesToggle = screen.getByRole('button', { name: 'Games' })
    expect(gamesToggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(gamesToggle)
    expect(gamesToggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByRole('link', { name: gameSingleLabel })).toHaveLength(2)
  })
})
