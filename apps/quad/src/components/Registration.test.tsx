import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Registration } from './Registration'

describe('Registration', () => {
  it('shows the Register Now heading, blurb, four countdown tiles and the form', () => {
    render(<Registration />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Register Now/)
    expect(heading).toHaveClass('text-white')
    expect(
      screen.getByText(/There is a moment in the life of any aspiring astronomer/),
    ).toBeInTheDocument()

    expect(screen.getByText('150').closest('div')).toHaveClass('bg-tile')
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('23')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('47')).toBeInTheDocument()
    expect(screen.getByText('Mins')).toBeInTheDocument()
    expect(screen.getByText('59')).toBeInTheDocument()
    expect(screen.getByText('Secs')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 3 }).textContent).toMatch(/Courses for Free/)
    expect(screen.getByText('It is high time for learning')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Phone Number')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Email Address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Submit/ })).toHaveClass('bg-accent')
  })

  it('shows per-field errors when the form is submitted empty', async () => {
    const user = userEvent.setup()
    render(<Registration />)

    await user.click(screen.getByRole('button', { name: /Submit/ }))

    expect(screen.getByText('Please enter your name')).toBeInTheDocument()
    expect(screen.getByText('Please enter your phone number')).toBeInTheDocument()
    expect(screen.getByText('Please enter your email')).toBeInTheDocument()
    expect(screen.queryByText(/Thanks,/)).not.toBeInTheDocument()
  })

  it('rejects an invalid email address', async () => {
    const user = userEvent.setup()
    render(<Registration />)

    await user.type(screen.getByLabelText('Your Name'), 'Ada')
    await user.type(screen.getByLabelText('Your Phone Number'), '555 0100')
    await user.type(screen.getByLabelText('Your Email Address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /Submit/ }))

    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
    expect(screen.queryByText(/Thanks,/)).not.toBeInTheDocument()
  })

  it('clears a field error while the user types in that field', async () => {
    const user = userEvent.setup()
    render(<Registration />)

    await user.click(screen.getByRole('button', { name: /Submit/ }))
    expect(screen.getByText('Please enter your email')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Your Email Address'), 'a@b.co')
    expect(screen.queryByText('Please enter your email')).not.toBeInTheDocument()
  })

  it('shows a success message and resets the form on a valid submit', async () => {
    const user = userEvent.setup()
    render(<Registration />)

    await user.type(screen.getByLabelText('Your Name'), 'Ada')
    await user.type(screen.getByLabelText('Your Phone Number'), '555 0100')
    await user.type(screen.getByLabelText('Your Email Address'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: /Submit/ }))

    expect(screen.getByText(/Thanks, Ada! Your spot has been reserved\./)).toBeInTheDocument()
    expect(screen.getByLabelText('Your Name')).toHaveValue('')
    expect(screen.getByLabelText('Your Email Address')).toHaveValue('')
  })
})
