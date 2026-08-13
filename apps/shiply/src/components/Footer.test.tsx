import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { describe, expect, it } from 'vitest'

describe('Footer', () => {
  it('renders the link widgets, socials, and newsletter form', () => {
    render(<Footer />)
    for (const heading of [
      'Quick Links',
      'Products',
      'Features',
      'Follow Us',
      'Subscribe Newsletter',
    ]) {
      expect(screen.getByRole('heading', { level: 2, name: heading })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByLabelText('Enter Email')).toBeInTheDocument()
  })

  it('submits the newsletter form to a success state', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Enter Email'), 'hello@example.com')
    await user.click(screen.getByRole('button', { name: 'Send' }))
    expect(screen.getByRole('status')).toHaveTextContent(/Thanks for subscribing/)
    expect(screen.queryByLabelText('Enter Email')).not.toBeInTheDocument()
  })

  it('links Component Dock and shows the copyright line', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: /Component Dock/ })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/© 2026 Shiply/)).toBeInTheDocument()
    const widgets = screen.getAllByRole('list')
    expect(within(widgets[0]!).getAllByRole('listitem')).toHaveLength(4)
  })
})
