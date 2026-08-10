import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { footerCategories, socialLabels, subscribePlaceholder } from '../data'

describe('Footer', () => {
  it('renders the brand column with copyright, credit and five social buttons', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Morsel' })).toBeInTheDocument()
    expect(screen.getByText(/Morsel @ 2026\. All rights reserved/)).toBeInTheDocument()
    expect(screen.getByText('Designed by')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Colorlib' })).toHaveAttribute(
      'href',
      'https://colorlib.com',
    )
    for (const label of Object.values(socialLabels)) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the CATEGORIES column with six uppercase links', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Categories' })).toBeInTheDocument()
    const categoriesNav = screen.getByRole('navigation', {
      name: 'Footer categories',
    })
    for (const category of footerCategories) {
      expect(screen.getByRole('link', { name: category })).toBeInTheDocument()
      expect(categoriesNav).toHaveTextContent(category)
    }
  })

  it('shows a per-field error for an invalid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    expect(input).toHaveAttribute('placeholder', subscribePlaceholder)
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter your email')

    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email')
  })

  it('shows a success message for a valid email and clears the input', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'reader@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks! You are subscribed to the Morsel newsletter.',
    )
    expect(input).toHaveValue('')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
