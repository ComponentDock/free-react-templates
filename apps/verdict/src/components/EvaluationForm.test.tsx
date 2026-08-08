import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { EvaluationForm } from './EvaluationForm'

describe('EvaluationForm', () => {
  it('blocks submit with per-field errors when the form is empty', async () => {
    const user = userEvent.setup()
    render(<EvaluationForm />)

    await user.click(screen.getByRole('button', { name: 'Request Free Consultation' }))

    expect(screen.getAllByRole('alert')).toHaveLength(5)
    expect(screen.getByText('Please enter your full name.')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
    expect(screen.getByText('Please enter your phone number.')).toBeInTheDocument()
    expect(screen.getByText('Please select a practice area.')).toBeInTheDocument()
    expect(screen.getByText('Please briefly describe your case.')).toBeInTheDocument()
  })

  it('clears the name error once a name is provided', async () => {
    const user = userEvent.setup()
    render(<EvaluationForm />)

    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    await user.click(screen.getByRole('button', { name: 'Request Free Consultation' }))

    expect(screen.queryByText('Please enter your full name.')).not.toBeInTheDocument()
    expect(screen.getAllByRole('alert')).toHaveLength(4)
  })

  it('shows a success message and unmounts the form on a valid submit', async () => {
    const user = userEvent.setup()
    render(<EvaluationForm />)

    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Email Address'), 'jane@example.com')
    await user.type(screen.getByLabelText('Phone Number'), '(555) 234-5678')
    await user.selectOptions(screen.getByLabelText('Practice Area'), 'Corporate Law')
    await user.type(screen.getByLabelText('Message'), 'I need help with a merger.')

    await user.click(screen.getByRole('button', { name: 'Request Free Consultation' }))

    expect(screen.getByRole('status')).toHaveTextContent('Request received!')
    expect(screen.getByRole('status')).toHaveTextContent('Jane Doe')
    expect(screen.queryByLabelText('Name')).not.toBeInTheDocument()
  })

  it('offers the six practice area options from the select', () => {
    render(<EvaluationForm />)

    const select = screen.getByLabelText('Practice Area')
    const options = Array.from(select.querySelectorAll('option')).map((o) => o.textContent)
    expect(options).toEqual([
      'Select Practice Area',
      'Corporate Law',
      'Litigation',
      'Real Estate',
      'Family Law',
      'Estate Planning',
      'Criminal Defense',
    ])
  })

  it('shows the privacy disclaimer', () => {
    render(<EvaluationForm />)

    expect(screen.getByText(/By submitting, you agree to our Privacy Policy/)).toBeInTheDocument()
  })
})
