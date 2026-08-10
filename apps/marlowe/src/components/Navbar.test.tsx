import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import {
  dropdownLinks,
  navLinks,
  searchPlaceholder,
  siteName,
  socialLabels,
  socialLinks,
} from '../data'

describe('Navbar', () => {
  it('renders social icons, centered wordmark, menu links and toggles', () => {
    render(<Navbar />)
    for (const name of socialLinks) {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: new RegExp(siteName) })).toBeInTheDocument()
    for (const link of navLinks) {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThan(0)
    }
    expect(screen.getByRole('button', { name: /open search/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('renders dropdown category links for Lifestyle and Fashion', () => {
    render(<Navbar />)
    for (const category of [...dropdownLinks.Lifestyle, ...dropdownLinks.Fashion]) {
      expect(screen.getAllByRole('link', { name: category }).length).toBeGreaterThan(0)
    }
  })

  it('opens and closes the search overlay', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(screen.queryByRole('searchbox', { name: /search/i })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /open search/i }))
    const input = screen.getByRole('searchbox', { name: /search/i })
    expect(input).toHaveAttribute('placeholder', searchPlaceholder)

    await user.click(screen.getByRole('button', { name: /close search/i }))
    expect(screen.queryByRole('searchbox', { name: /search/i })).not.toBeInTheDocument()
  })

  it('opens and closes the aside panel with menu links and social icons', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(screen.queryByRole('complementary', { name: 'Menu' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const panel = screen.getByRole('complementary', { name: 'Menu' })
    for (const link of navLinks) {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThan(0)
    }
    for (const name of socialLinks) {
      expect(screen.getAllByRole('link', { name: socialLabels[name] }).length).toBeGreaterThan(0)
    }
    expect(panel).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('complementary', { name: 'Menu' })).not.toBeInTheDocument()
  })
})
