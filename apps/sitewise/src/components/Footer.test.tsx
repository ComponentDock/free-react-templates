import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, blurb, link columns, and newsletter form', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Sitewise home' })).toBeInTheDocument()
    expect(screen.getByText(/Fast, secure web hosting/i)).toBeInTheDocument()

    for (const label of ['service', 'Navigation', 'Sign Up']) {
      expect(screen.getByRole('heading', { level: 3, name: label })).toBeInTheDocument()
    }
    for (const label of ['Hosting', 'Domain', 'Wordpress', 'Shared Hosting']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    for (const label of ['Home', 'Rooms', 'About', 'News']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByText('Subscribe newsletter to get updates')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()

    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('shows a validation error for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('confirms the subscription for a valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent('You have been subscribed. Thank you!')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('clears the error once a valid email is submitted', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'bad')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toBeInTheDocument()

    const input = screen.getByLabelText('Email address')
    await user.clear(input)
    await user.type(input, 'ok@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toBeInTheDocument()
  })
})
