import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DomainSearch } from './DomainSearch'

describe('DomainSearch', () => {
  it('renders the heading, search form, and extension prices', () => {
    render(<DomainSearch />)

    expect(
      screen.getByRole('heading', { level: 2, name: /Get A Domain Name/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /domain name/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument()

    for (const price of [/\$9\.75/, /\$9\.90/, /\$8\.95/, /\$7\.95/]) {
      expect(screen.getByText(price)).toBeInTheDocument()
    }
  })

  it('prevents default submission when the form is submitted', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)

    const input = screen.getByRole('textbox', { name: /domain name/i })
    await user.type(input, 'example.com')
    await user.click(screen.getByRole('button', { name: /Search/i }))

    expect(input).toHaveValue('')
  })
})
