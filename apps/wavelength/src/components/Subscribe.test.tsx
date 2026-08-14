import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Subscribe } from './Subscribe'

describe('Subscribe', () => {
  it('shows a photo band with an email input and a lime Subscribe button', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)

    expect(screen.getByRole('heading', { level: 2, name: 'Subscribe' })).toBeInTheDocument()

    const input = screen.getByRole('textbox', { name: 'Email address' })
    expect(input).toHaveAttribute('placeholder', 'Enter your email')
    expect(input).toHaveClass('bg-transparent')

    const button = screen.getByRole('button', { name: 'Subscribe' })
    expect(button).toHaveClass('bg-brand')

    await user.type(input, 'listener@example.com')
    await user.click(button)

    // The form submits without navigating away.
    expect(screen.getByRole('textbox', { name: 'Email address' })).toHaveValue(
      'listener@example.com',
    )
  })
})
