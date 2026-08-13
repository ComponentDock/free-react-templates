import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DomainSearch } from './DomainSearch'

describe('DomainSearch', () => {
  it('shows the white title, input, search button, and note', () => {
    render(<DomainSearch />)

    expect(screen.getByRole('heading', { level: 2, name: 'See our features' })).toBeInTheDocument()
    expect(screen.getByLabelText('Domain name')).toHaveAttribute(
      'placeholder',
      "Enter your website's name",
    )
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('prevents navigation and shows a status message on submit', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)

    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    await user.type(screen.getByLabelText('Domain name'), 'example.com')
    await user.click(screen.getByRole('button', { name: 'Search' }))

    expect(screen.getByRole('status')).toHaveTextContent(/Searching domains/i)
  })
})
