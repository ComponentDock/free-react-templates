import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Step3Specialities } from './Step3Specialities'

describe('Step3Specialities', () => {
  it('renders the specialities textarea', () => {
    render(<Step3Specialities />)
    expect(screen.getByLabelText('Tell us your specialities')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<Step3Specialities />)
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
  })

  it('allows typing in the textarea', async () => {
    const user = userEvent.setup()
    render(<Step3Specialities />)
    const textarea = screen.getByLabelText('Tell us your specialities')
    await user.type(textarea, 'UI design')
    expect(textarea).toHaveValue('UI design')
  })

  it('shows success message after submit', async () => {
    const user = userEvent.setup()
    render(<Step3Specialities />)
    await user.click(screen.getByRole('button', { name: 'Submit' }))
    expect(screen.getByRole('status')).toHaveTextContent('Form submitted successfully!')
  })
})
