import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PopularNews } from './PopularNews'

describe('PopularNews', () => {
  it('renders the Popular News heading', () => {
    render(<PopularNews />)
    expect(screen.getByText('Popular News')).toBeInTheDocument()
  })

  it('renders 4 Most Popular News', () => {
    render(<PopularNews />)
    expect(screen.getByText('4 Most Popular News')).toBeInTheDocument()
  })

  it('renders numbered popular items', () => {
    render(<PopularNews />)
    expect(screen.getByText(/1\./)).toBeInTheDocument()
    expect(screen.getByText(/4\./)).toBeInTheDocument()
  })

  it('renders the newsletter form', () => {
    render(<PopularNews />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('allows filling in the newsletter form', async () => {
    const user = userEvent.setup()
    render(<PopularNews />)
    await user.type(screen.getByLabelText('Name'), 'John')
    await user.type(screen.getByLabelText('Email'), 'john@test.com')
    expect(screen.getByLabelText('Name')).toHaveValue('John')
    expect(screen.getByLabelText('Email')).toHaveValue('john@test.com')
  })

  it('handles newsletter form submission', async () => {
    const user = userEvent.setup()
    render(<PopularNews />)
    await user.type(screen.getByLabelText('Name'), 'John')
    await user.type(screen.getByLabelText('Email'), 'john@test.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByLabelText('Name')).toHaveValue('John')
  })
})
