import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and subtitle', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Find The Best Monthly Payment/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/best loan services/i)).toBeInTheDocument()
  })

  it('renders both CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /how it works/i })).toBeInTheDocument()
  })

  it('renders the loan calculator form inputs', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Amount')).toBeInTheDocument()
    expect(screen.getByLabelText('Days')).toBeInTheDocument()
    expect(screen.getByLabelText('Repayment')).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
  })

  it('renders the Apply Now button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /apply now/i })).toBeInTheDocument()
  })

  it('calls onSubmit with form data when form is submitted', async () => {
    const onSubmit = vi.fn()
    const user = userEvent.setup()
    render(<Hero onSubmit={onSubmit} />)

    await user.type(screen.getByLabelText('Amount'), '5000')
    await user.type(screen.getByLabelText('Days'), '30')
    await user.type(screen.getByLabelText('Repayment'), 'Monthly')
    await user.type(screen.getByLabelText('Name'), 'John')
    await user.type(screen.getByLabelText('Phone'), '1234567890')
    await user.click(screen.getByRole('button', { name: /apply now/i }))

    expect(onSubmit).toHaveBeenCalledWith({
      amount: '5000',
      days: '30',
      repayment: 'Monthly',
      name: 'John',
      phone: '1234567890',
    })
  })

  it('handles form submission with empty fields (nullish fallback)', async () => {
    const onSubmit = vi.fn()
    const user = userEvent.setup()
    render(<Hero onSubmit={onSubmit} />)

    await user.click(screen.getByRole('button', { name: /apply now/i }))

    expect(onSubmit).toHaveBeenCalledWith({
      amount: '',
      days: '',
      repayment: '',
      name: '',
      phone: '',
    })
  })

  it('does not crash when onSubmit is not provided', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: /apply now/i }))
    // No error should be thrown
  })

  it('renders the hero background image', () => {
    render(<Hero />)
    const section = document.querySelector('section')
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('picsum.photos') })
  })
})
