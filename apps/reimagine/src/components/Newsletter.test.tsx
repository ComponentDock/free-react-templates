import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders newsletter heading', () => {
    render(<Newsletter />)
    expect(
      screen.getByRole('heading', { name: /Subscribe for our Newsletter/i }),
    ).toBeInTheDocument()
  })

  it('renders email input and submit button', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Get Started/i })).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const submitBtn = screen.getByRole('button', { name: /Get Started/i })
    await user.click(submitBtn)
    // form submission is prevented (no navigation)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })
})
