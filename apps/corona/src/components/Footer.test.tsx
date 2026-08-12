import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the five widgets with their links', () => {
    render(<Footer />)

    for (const heading of ['Top Products', 'Quick Links', 'Features', 'Resources', 'Newsletter']) {
      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Managed Website' })).toBeInTheDocument()
    // "Investor Relations" appears in both Quick Links and Features widgets.
    expect(screen.getAllByRole('link', { name: 'Investor Relations' })).toHaveLength(2)
    expect(screen.getByRole('link', { name: 'Agencies' })).toBeInTheDocument()
    expect(screen.getByText(/You can trust us/)).toBeInTheDocument()
  })

  it('shows the Component Dock branded link in the copyright bar', () => {
    render(<Footer />)

    const copyright = screen.getByText(/All rights reserved/)
    expect(within(copyright).getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('confirms a newsletter subscription', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Subscribe to newsletter' }))
    expect(screen.getByRole('status')).toHaveTextContent(/subscribed/)
  })
})
