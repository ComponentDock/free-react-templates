import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('shows the contact details and the quote call to action', () => {
    render(<Header />)
    expect(screen.getByText('info@cargonaut.com')).toBeInTheDocument()
    expect(screen.getByText('1601-609 6780')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /get free quote/i })).toHaveAttribute(
      'href',
      '#estimate',
    )
  })

  it('lists the primary navigation and the pages menu', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(nav).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /pages/i })).toHaveAttribute('aria-haspopup', 'true')
    expect(screen.getByRole('link', { name: 'Elements' })).toHaveAttribute('href', '#services')
  })

  it('toggles the mobile navigation open and closed', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Open navigation' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(toggle)
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()
    const close = screen.getByRole('button', { name: 'Close navigation' })
    expect(close).toHaveAttribute('aria-expanded', 'true')

    await user.click(close)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile navigation when a link is followed', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open navigation' }))
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(mobile.querySelector('a[href="#services"]') as HTMLAnchorElement)

    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
