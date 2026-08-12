import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders top product links, the newsletter promise and the Component Dock credit', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Top Products' })).toBeInTheDocument()
    for (const product of [
      'Managed Website',
      'Manage Reputation',
      'Power Tools',
      'Marketing Service',
    ]) {
      expect(screen.getByRole('link', { name: product })).toBeInTheDocument()
    }
    expect(screen.getByText(/we only send promo offers/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders the Instagram feed with eight thumbnails', () => {
    const { container } = render(<Footer />)

    expect(container.querySelectorAll('img')).toHaveLength(8)
  })

  it('renders the social links', () => {
    render(<Footer />)

    for (const social of ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })

  it('rejects an invalid newsletter email and confirms a valid one', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')

    await user.clear(input)
    await user.type(input, 'hello@rally.events')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
    // The form swaps to the success message, so the input unmounts.
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })
})
