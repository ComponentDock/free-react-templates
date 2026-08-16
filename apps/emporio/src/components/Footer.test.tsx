import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { shopColumns } from '../data'

describe('Footer', () => {
  it('renders the subscribe row, email form and social icons', () => {
    render(<Footer />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Subscribe Newsletter' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Subscribe newsletter to get 5% on all products.')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
    for (const name of ['Facebook', 'Instagram', 'Youtube']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
  })

  it('shows an error for an invalid email and a success message for a valid one', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')

    await user.clear(input)
    await user.type(input, 'shopper@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing')
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('renders the link columns, wordmark and the Component Dock credit', () => {
    render(<Footer />)
    for (const column of shopColumns) {
      expect(screen.getByRole('heading', { level: 3, name: column.heading })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { level: 3, name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Clothing Fashion' })).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Winter' })).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Track Your Order' })).toHaveLength(1)
    expect(screen.getByRole('link', { name: /Emporio/ })).toBeInTheDocument()

    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/© \d{4} All rights reserved/)).toBeInTheDocument()
  })
})
