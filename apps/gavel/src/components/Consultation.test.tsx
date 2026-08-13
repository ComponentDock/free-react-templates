import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Consultation } from './Consultation'
import { consultation } from '../data'

describe('Consultation', () => {
  it('renders the heading and the background treatment', () => {
    const { container } = render(<Consultation />)
    expect(screen.getByText(consultation.eyebrow)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: consultation.headline }),
    ).toBeInTheDocument()
    expect(container.querySelector('img')).toHaveAttribute('src', consultation.image)
  })

  it('provides labeled fields and a submit button', async () => {
    const user = userEvent.setup()
    render(<Consultation />)

    const nameInput = screen.getByLabelText(consultation.fields.name)
    const emailInput = screen.getByLabelText(consultation.fields.email)
    const subjectInput = screen.getByLabelText(consultation.fields.subject)
    const messageInput = screen.getByLabelText(consultation.fields.message)

    await user.type(nameInput, 'Jane Doe')
    await user.type(emailInput, 'jane@example.com')
    await user.type(subjectInput, 'Consultation request')
    await user.type(messageInput, 'I need help with a case.')

    expect(nameInput).toHaveValue('Jane Doe')
    expect(emailInput).toHaveValue('jane@example.com')
    expect(subjectInput).toHaveValue('Consultation request')
    expect(messageInput).toHaveValue('I need help with a case.')

    const form = screen.getByRole('form', { name: 'Consultation form' })
    await user.click(screen.getByRole('button', { name: consultation.submitLabel }))
    expect(form).toBeInTheDocument()
    expect(nameInput).toHaveValue('Jane Doe')
  })
})
