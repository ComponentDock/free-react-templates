import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name and nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Shop')).toBeInTheDocument()
    expect(screen.getByText('craft')).toBeInTheDocument()
    for (const link of ['Home', 'Category', 'Men', 'Women', 'Latest']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('toggles mobile menu', async () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    const user = (await import('@testing-library/user-event')).default
    // Initially no mobile menu visible — only desktop links have these
    const pagesCountBefore = screen.getAllByText('Pages').length
    await user.click(toggle)
    // After toggle, Pages appears again in mobile menu
    expect(screen.getAllByText('Pages').length).toBeGreaterThan(pagesCountBefore)
    await user.click(toggle)
  })

  it('toggles pages dropdown', async () => {
    render(<Navbar />)
    const pagesBtn = screen.getByRole('button', { name: /Pages/ })
    const user = (await import('@testing-library/user-event')).default
    await user.click(pagesBtn)
    expect(screen.getByText('Checkout')).toBeVisible()
    await user.click(pagesBtn)
  })

  it('renders search and cart buttons', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cart' })).toBeInTheDocument()
  })
})
