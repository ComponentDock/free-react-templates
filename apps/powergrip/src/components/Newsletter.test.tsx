import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Newsletter } from './Newsletter'
import {
  newsletterButton,
  newsletterPlaceholder,
  newsletterSubtitle,
  newsletterTitle,
} from '../data'

describe('Newsletter', () => {
  it('renders the heading and subtitle', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { level: 2, name: newsletterTitle })).toBeInTheDocument()
    expect(screen.getAllByText(newsletterSubtitle).length).toBeGreaterThan(0)
  })

  it('renders the email input and subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText(newsletterPlaceholder)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: newsletterButton })).toBeInTheDocument()
  })

  it('accepts email input and submits the form', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByPlaceholderText(newsletterPlaceholder)
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
    await user.click(screen.getByRole('button', { name: newsletterButton }))
    expect(input).toHaveValue('test@example.com')
  })
})
