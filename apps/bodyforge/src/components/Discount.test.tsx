import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Discount } from './Discount'

describe('Discount', () => {
  it('renders the discount heading and newsletter form', () => {
    render(<Discount />)

    expect(screen.getByText(/25% Discount/)).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('submits the form and clears the email input', async () => {
    const user = userEvent.setup()
    render(<Discount />)

    const input = screen.getByRole('textbox', { name: /email address/i })
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(input).toHaveValue('')
  })
})
