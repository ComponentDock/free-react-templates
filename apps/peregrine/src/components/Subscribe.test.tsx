import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  emailLabel,
  subscribeButtonLabel,
  subscribeSuccess,
  subscribeText,
  subscribeTitle,
} from '../data'
import { Subscribe } from './Subscribe'

describe('Subscribe', () => {
  it('renders the heading, text, email input, and subscribe button', () => {
    render(<Subscribe />)
    expect(screen.getByRole('region', { name: subscribeTitle })).toBeInTheDocument()
    expect(screen.getByText(subscribeText)).toBeInTheDocument()
    expect(screen.getByLabelText(emailLabel)).toHaveAttribute('type', 'email')
    expect(screen.getByRole('button', { name: subscribeButtonLabel })).toBeInTheDocument()
  })

  it('shows a success message after submitting and removes the form', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)

    await user.type(screen.getByLabelText(emailLabel), 'traveler@example.com')
    await user.click(screen.getByRole('button', { name: subscribeButtonLabel }))

    expect(screen.getByRole('status')).toHaveTextContent(subscribeSuccess)
    expect(screen.queryByLabelText(emailLabel)).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: subscribeButtonLabel })).not.toBeInTheDocument()
  })
})
