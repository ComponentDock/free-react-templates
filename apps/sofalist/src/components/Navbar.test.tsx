import { act, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { BRAND, NAV_LINKS } from '../data'

describe('Navbar', () => {
  it('renders the brand and all desktop navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: new RegExp(BRAND) })).toHaveAttribute('href', '#home')
    const header = screen.getByRole('banner')
    for (const link of NAV_LINKS) {
      expect(within(header).getByRole('link', { name: link.label })).toBeInTheDocument()
    }
  })

  it('renders transparent over the hero', () => {
    render(<Navbar />)
    expect(screen.getByRole('banner').className).toContain('bg-transparent')
  })

  it('switches to a white sticky header with shadow after scrolling', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    Object.defineProperty(window, 'scrollY', { value: 120, writable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(screen.getByRole('banner').className).toContain('bg-paper')
    expect(screen.getByRole('banner').className).toContain('shadow')
    await user.click(document.body)
  })

  it('opens the mobile menu panel and lists the same links', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const panel = screen.getByRole('dialog', { name: 'Mobile navigation' })
    for (const link of NAV_LINKS) {
      expect(within(panel).getByRole('link', { name: link.label })).toBeInTheDocument()
    }
  })

  it('closes the mobile menu via the close button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu via the overlay backdrop', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByTestId('mobile-overlay'))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const panel = screen.getByRole('dialog', { name: 'Mobile navigation' })
    await user.click(within(panel).getByRole('link', { name: 'About' }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the brand link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const panel = screen.getByRole('dialog', { name: 'Mobile navigation' })
    await user.click(within(panel).getByRole('link', { name: new RegExp(BRAND) }))
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu on Escape', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('keeps the mobile menu open when another key is pressed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.keyboard('{a}')
    expect(screen.getByRole('dialog', { name: 'Mobile navigation' })).toBeInTheDocument()
  })

  it('focuses the panel when it opens', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('dialog', { name: 'Mobile navigation' })).toHaveFocus()
  })
})
