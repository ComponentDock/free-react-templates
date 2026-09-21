import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { BRAND, NAV_LINKS } from '../data'

describe('Navbar', () => {
  it('renders the brand logo', () => {
    render(<Navbar />)
    expect(screen.getByText(BRAND)).toBeInTheDocument()
  })

  it('renders navigation links on desktop', () => {
    render(<Navbar />)
    for (const link of NAV_LINKS) {
      expect(screen.getByText(link.label)).toBeInTheDocument()
    }
  })

  it('renders search toggle button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /toggle search/i })).toBeInTheDocument()
  })

  it('opens search overlay on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /toggle search/i }))
    expect(screen.getByRole('searchbox', { name: /search anime/i })).toBeInTheDocument()
  })

  it('closes search overlay on Escape', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /toggle search/i }))
    expect(screen.getByRole('searchbox', { name: /search anime/i })).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('searchbox', { name: /search anime/i })).not.toBeInTheDocument()
  })

  it('renders mobile menu toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /toggle mobile menu/i })).toBeInTheDocument()
  })

  it('opens mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /toggle mobile menu/i }))
    expect(screen.getByRole('button', { name: /toggle mobile menu/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })

  it('ignores non-Escape keys', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /toggle search/i }))
    expect(screen.getByRole('searchbox', { name: /search anime/i })).toBeInTheDocument()
    await user.keyboard('a')
    expect(screen.getByRole('searchbox', { name: /search anime/i })).toBeInTheDocument()
  })

  it('closes mobile menu on Escape', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /toggle mobile menu/i }))
    await user.keyboard('{Escape}')
    expect(screen.getByRole('button', { name: /toggle mobile menu/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes mobile menu on link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /toggle mobile menu/i }))
    const links = screen.getAllByText(NAV_LINKS[0].label)
    await user.click(links[links.length - 1]!)
    expect(screen.getByRole('button', { name: /toggle mobile menu/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
