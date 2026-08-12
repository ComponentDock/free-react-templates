import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Registration } from './Registration'

describe('Registration', () => {
  it('shows the band title, copy and form fields', () => {
    render(<Registration />)

    expect(screen.getByRole('heading', { level: 2, name: 'Courses for Free' })).toBeInTheDocument()
    expect(screen.getByText('It is high time for learning')).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Name' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Phone Number' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Email Address' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
  })

  it('shows a confirmation after submitting the form', async () => {
    const user = userEvent.setup()
    render(<Registration />)

    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Submit' }))
    expect(screen.getByRole('status')).toHaveTextContent(/free course details/)
  })
})
