import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the navy footer widgets, insta grid and Component Dock credit', () => {
    const { container } = render(<Footer />)

    expect(container.querySelector('footer')?.className).toContain('bg-navy')

    for (const widget of ['About Agency', 'Navigation Links', 'Newsletter', 'InstaFeed']) {
      expect(screen.getByRole('heading', { level: 4, name: widget })).toBeInTheDocument()
    }

    for (const link of [
      'Home',
      'Feature',
      'Services',
      'Portfolio',
      'Team',
      'Pricing',
      'Blog',
      'Contact',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }

    const insta = container.querySelectorAll('img')
    expect(insta).toHaveLength(4)
    expect(insta[0]).toHaveAttribute('src', 'https://picsum.photos/seed/tripquest-insta-1/200/200')

    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(credit).toHaveAttribute('target', '_blank')
    expect(credit).toHaveAttribute('rel', 'noopener noreferrer')

    for (const label of ['Facebook', 'Twitter', 'Dribbble', 'Behance']) {
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    }

    expect(container.innerHTML.toLowerCase()).not.toContain('colorlib')
  })

  it('validates the newsletter address before confirming the subscription', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const field = screen.getByLabelText('Email address')
    expect(screen.queryByRole('status')).toBeNull()

    await user.type(field, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'Enter a valid email address to subscribe.',
    )

    await user.clear(field)
    await user.type(field, 'traveller@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks — trip ideas are on the way to your inbox.',
    )
  })
})
