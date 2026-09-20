import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading, subtitle, and signup form', () => {
    render(<Hero />)

    expect(screen.getByText(/Get The Best Free Online Courses/)).toBeInTheDocument()
    expect(screen.getByText(/Expand your knowledge/)).toBeInTheDocument()
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your E-mail')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Sign Up Now' })).toBeInTheDocument()
  })

  it('allows typing in name and email inputs', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const nameInput = screen.getByLabelText('Your Name')
    const emailInput = screen.getByLabelText('Your E-mail')

    await user.type(nameInput, 'John')
    await user.type(emailInput, 'john@test.com')

    expect(nameInput).toHaveValue('John')
    expect(emailInput).toHaveValue('john@test.com')
  })

  it('submits the form without error', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Sign Up Now' }))
  })
})
