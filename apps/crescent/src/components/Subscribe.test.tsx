import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Subscribe } from './Subscribe'

describe('Subscribe', () => {
  it('renders heading', () => {
    render(<Subscribe />)
    expect(screen.getByText('Subscribe To Our Newsletter')).toBeInTheDocument()
  })

  it('renders email input', () => {
    render(<Subscribe />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders subscribe button', () => {
    render(<Subscribe />)
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('allows typing email', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('clears email on submit', async () => {
    const user = userEvent.setup()
    render(<Subscribe />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByText('Subscribe'))
    expect(input).toHaveValue('')
  })

  it('has data-testid', () => {
    render(<Subscribe />)
    expect(screen.getByTestId('subscribe')).toBeInTheDocument()
  })
})
