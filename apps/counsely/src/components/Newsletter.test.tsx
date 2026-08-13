import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'
import { newsletter } from '../data'

describe('Newsletter', () => {
  it('renders the white headline, email input, and Subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { level: 2, name: newsletter.headline })).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toHaveAttribute(
      'placeholder',
      newsletter.placeholder,
    )
    expect(screen.getByRole('button', { name: newsletter.submitLabel })).toBeInTheDocument()
  })

  it('shows a success message and unmounts the input after subscribing', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText('Email address'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: newsletter.submitLabel }))

    expect(screen.getByRole('status')).toHaveTextContent(newsletter.successMessage)
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })
})
