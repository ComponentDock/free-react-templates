import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SignupSection } from './SignupSection'

describe('SignupSection', () => {
  it('renders heading and form fields', () => {
    render(<SignupSection />)

    expect(screen.getByText(/Sign up to became a teacher/)).toBeInTheDocument()
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your E-mail')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Upload Course')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit Course' })).toBeInTheDocument()
  })

  it('allows typing in all inputs', async () => {
    const user = userEvent.setup()
    render(<SignupSection />)

    await user.type(screen.getByLabelText('Your Name'), 'Jane')
    await user.type(screen.getByLabelText('Your E-mail'), 'jane@test.com')
    await user.type(screen.getByLabelText('Your Phone'), '555-1234')

    expect(screen.getByLabelText('Your Name')).toHaveValue('Jane')
    expect(screen.getByLabelText('Your E-mail')).toHaveValue('jane@test.com')
    expect(screen.getByLabelText('Your Phone')).toHaveValue('555-1234')
  })

  it('updates file name when file is selected', async () => {
    const user = userEvent.setup()
    render(<SignupSection />)

    const file = new File(['course content'], 'my-course.pdf', { type: 'application/pdf' })
    const input = screen.getByLabelText('Upload Course')

    await user.upload(input, file)

    expect(screen.getByText('my-course.pdf')).toBeInTheDocument()
  })

  it('shows default label when file input change fires with no file', () => {
    render(<SignupSection />)

    const input = screen.getByLabelText('Upload Course')
    // Mock files as empty array to cover the ?? fallback branch
    Object.defineProperty(input, 'files', { value: [], configurable: true })
    input.dispatchEvent(new Event('change', { bubbles: true }))

    // Should still show default label text
    expect(screen.getByText('Upload Course')).toBeInTheDocument()
  })

  it('submits form without error', async () => {
    const user = userEvent.setup()
    render(<SignupSection />)

    await user.click(screen.getByRole('button', { name: 'Submit Course' }))
  })
})
