import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'
import { newsletter } from '../data'

describe('Newsletter', () => {
  it('renders the headline, input, and submit button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { level: 2, name: newsletter.headline })).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toHaveAttribute(
      'placeholder',
      newsletter.placeholder,
    )
    expect(screen.getByRole('button', { name: newsletter.submitLabel })).toBeInTheDocument()
  })

  it('clears the input on submit without navigating', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'reader@example.com')
    expect(input).toHaveValue('reader@example.com')

    await user.click(screen.getByRole('button', { name: newsletter.submitLabel }))
    expect(input).toHaveValue('')
    expect(screen.getByRole('form', { name: 'Newsletter form' })).toBeInTheDocument()
  })
})
