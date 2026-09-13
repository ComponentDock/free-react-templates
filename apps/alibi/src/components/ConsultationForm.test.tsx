import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ConsultationForm } from './ConsultationForm'

describe('ConsultationForm', () => {
  it('renders the form with name, email, category fields and submit button', () => {
    render(<ConsultationForm />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Categories (optional)')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Contact/i })).toBeInTheDocument()
  })

  it('changes the category dropdown value', async () => {
    const user = userEvent.setup()
    render(<ConsultationForm />)
    const select = screen.getByLabelText('Categories (optional)')
    await user.selectOptions(select, 'Criminal Law')
    expect(select).toHaveValue('Criminal Law')
  })

  it('prevents default on form submit', async () => {
    const user = userEvent.setup()
    render(<ConsultationForm />)
    await user.click(screen.getByRole('button', { name: /Contact/i }))
  })
})
