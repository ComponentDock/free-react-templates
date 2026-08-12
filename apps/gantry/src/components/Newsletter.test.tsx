import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('shows the heading, the input and the black subscribe button', () => {
    render(<Newsletter />)

    const section = screen.getByRole('region', { name: 'Subscribe To Newsletter' })
    expect(
      within(section).getByRole('heading', { name: 'Subscribe To Newsletter' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('shows a success message after subscribing', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByRole('textbox', { name: /email/i }), 'me@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent(/subscribed/i)
    expect(screen.queryByRole('textbox', { name: /email/i })).not.toBeInTheDocument()
  })
})
