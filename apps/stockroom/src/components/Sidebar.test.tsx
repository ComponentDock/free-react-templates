import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('renders logo', () => {
    render(<Sidebar onSearchOpen={vi.fn()} />)
    const logos = screen.getAllByText('Stockroom')
    expect(logos.length).toBeGreaterThanOrEqual(1)
  })

  it('renders navigation links', () => {
    render(<Sidebar onSearchOpen={vi.fn()} />)
    for (const link of ['Home', 'Shop', 'Product', 'Checkout']) {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    }
    expect(screen.getAllByText('Cart', { exact: false }).length).toBeGreaterThanOrEqual(1)
  })

  it('renders CTA buttons', () => {
    render(<Sidebar onSearchOpen={vi.fn()} />)
    expect(screen.getByText('%Discount%')).toBeInTheDocument()
    expect(screen.getByText('New this week')).toBeInTheDocument()
  })

  it('renders favourite and search buttons', () => {
    render(<Sidebar onSearchOpen={vi.fn()} />)
    expect(screen.getByText('Favourite')).toBeInTheDocument()
    expect(screen.getByText('Search')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Sidebar onSearchOpen={vi.fn()} />)
    expect(screen.getByLabelText('Pinterest')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
  })

  it('calls onSearchOpen when search button is clicked', async () => {
    const user = userEvent.setup()
    const onSearchOpen = vi.fn()
    render(<Sidebar onSearchOpen={onSearchOpen} />)
    await user.click(screen.getByText('Search'))
    expect(onSearchOpen).toHaveBeenCalledOnce()
  })

  it('toggles mobile nav on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Sidebar onSearchOpen={vi.fn()} />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    const aside = screen.getByRole('complementary')
    expect(aside.className).toContain('translate-x-0')
  })

  it('closes mobile nav when overlay is clicked', async () => {
    const user = userEvent.setup()
    render(<Sidebar onSearchOpen={vi.fn()} />)
    // Open mobile nav
    await user.click(screen.getByLabelText('Toggle navigation'))
    // Click the overlay to close
    const overlay = document.querySelector('.bg-dark\\/50')
    if (overlay) {
      await user.click(overlay)
    }
    const aside = screen.getByRole('complementary')
    expect(aside.className).toContain('-translate-x-full')
  })

  it('closes mobile nav when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<Sidebar onSearchOpen={vi.fn()} />)
    // Open mobile nav
    await user.click(screen.getByLabelText('Toggle navigation'))
    // Click close button
    await user.click(screen.getByLabelText('Close navigation'))
    const aside = screen.getByRole('complementary')
    expect(aside.className).toContain('-translate-x-full')
  })
})
