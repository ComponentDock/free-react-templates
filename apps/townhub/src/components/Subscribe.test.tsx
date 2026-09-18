import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Subscribe } from './Subscribe'
import { subscribeHeading, subscribeText } from '../data'

describe('Subscribe', () => {
  it('renders the heading', () => {
    render(<Subscribe />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(subscribeHeading)
  })

  it('renders the description text', () => {
    render(<Subscribe />)
    expect(screen.getByText(subscribeText)).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<Subscribe />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders the Subscribe button', () => {
    render(<Subscribe />)
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('allows typing in the email input', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('form submission does not navigate', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
  })
})
