import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { footer, navLinks } from '../data'

describe('Footer', () => {
  it('shows a success state after subscribing to the newsletter', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Your email'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: footer.newsletterButton }))

    expect(screen.getByRole('status')).toHaveTextContent(footer.newsletterSuccess)
    expect(screen.queryByLabelText('Your email')).not.toBeInTheDocument()
  })

  it('lists the useful links, support, and categories widgets', () => {
    render(<Footer />)
    const useful = screen.getByRole('navigation', { name: 'Useful links' })
    for (const label of footer.usefulLinks) {
      expect(within(useful).getByRole('link', { name: label })).toBeInTheDocument()
    }
    const support = screen.getByRole('navigation', { name: 'Support' })
    for (const label of footer.supportLinks) {
      expect(within(support).getByRole('link', { name: label })).toBeInTheDocument()
    }
    const categories = screen.getByRole('navigation', { name: 'Categories' })
    for (const label of footer.categoryLinks) {
      expect(within(categories).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('shows the From the Blog column with two posts', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 2, name: 'From the Blog' })).toBeInTheDocument()
    for (const post of footer.blogPosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
      expect(screen.getByText(post.date)).toBeInTheDocument()
    }
  })

  it('renders the copyright bar, footer menu, and Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 HOODLY/)).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: /Component Dock/ })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    const menu = screen.getByRole('navigation', { name: 'Footer menu' })
    for (const link of navLinks) {
      expect(within(menu).getByRole('link', { name: link.label })).toBeInTheDocument()
    }
  })
})
