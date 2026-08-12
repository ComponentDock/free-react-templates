import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Top Products column with the four links', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('heading', { name: 'Top Products' })).toBeInTheDocument()
    for (const link of [
      'Managed Website',
      'Manage Reputation',
      'Power Tools',
      'Marketing Service',
    ]) {
      expect(within(footer).getByRole('link', { name: link })).toHaveClass(
        'transition-colors',
        'hover:text-periwinkle',
      )
    }
  })

  it('renders the newsletter column with trust line, input, and Subscribe button', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(within(footer).getByText(/only send promo offers/i)).toBeInTheDocument()
    expect(within(footer).getByLabelText('Email address')).toHaveAttribute(
      'placeholder',
      'Enter email',
    )
    const subscribe = within(footer).getByRole('button', { name: /Subscribe/ })
    expect(subscribe).toHaveClass('bg-gradient-to-r', 'from-brand-start', 'to-brand-end')
  })

  it('shows an error for an invalid email and does not submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /Subscribe/ }))

    expect(screen.getByRole('alert')).toHaveTextContent(/valid email address/i)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('shows a success state for a valid email and unmounts the input', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'hello@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe/ }))

    expect(screen.getByRole('status')).toHaveTextContent(/Thanks for subscribing/i)
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('renders the Instagram feed column with eight thumbnails', () => {
    const { container } = render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('heading', { name: 'Instagram Feed' })).toBeInTheDocument()

    const images = container.querySelectorAll('footer img')
    expect(images).toHaveLength(8)
    expect(images[0]?.getAttribute('src')).toContain('picsum.photos/seed/imagine-insta-')
  })

  it('renders the copyright bar with a Component Dock link and social squares', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    const dockLink = within(footer).getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(within(footer).getByText(/All rights reserved/i)).toBeInTheDocument()

    for (const label of ['Facebook', 'Twitter', 'Dribbble', 'Behance']) {
      const social = within(footer).getByRole('link', { name: label })
      expect(social).toHaveClass('bg-social', 'hover:from-brand-start')
    }
  })
})
