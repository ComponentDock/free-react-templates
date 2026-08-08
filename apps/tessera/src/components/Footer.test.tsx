import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

const linkColumn = ['Home', 'About', 'Services', 'Projects', 'Contact']
const servicesColumn = [
  'Architectural Design',
  'Interior Design',
  'Exterior Design',
  'Lighting Design',
  'AutoCAD Service',
]

describe('Footer', () => {
  it('shows the brand, blurb, link columns, newsletter, and copyright', () => {
    render(<Footer />)
    expect(screen.getByText('Tessera')).toBeInTheDocument()
    expect(screen.getAllByText(/Far far away/).length).toBeGreaterThan(0)

    const linksNav = screen.getByRole('navigation', { name: 'Links' })
    for (const label of linkColumn) {
      expect(within(linksNav).getByRole('link', { name: label })).toBeInTheDocument()
    }

    const servicesNav = screen.getByRole('navigation', { name: 'Services' })
    for (const label of servicesColumn) {
      expect(within(servicesNav).getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { name: /Newsletter/ })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Email address' })).toBeInTheDocument()
    expect(screen.getByText(/© 2026 Tessera/)).toBeInTheDocument()
  })

  it('shows an error for an invalid email and a success for a valid one', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: 'Email address' })
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText(/valid email/i)).toBeInTheDocument()
    expect(screen.queryByText(/subscribed/i)).not.toBeInTheDocument()

    await user.clear(input)
    await user.type(input, 'hello@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText(/subscribed/i)).toBeInTheDocument()
  })
})
