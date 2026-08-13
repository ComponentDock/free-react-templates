import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Consultation } from './Consultation'
import { consultation } from '../data'

describe('Consultation', () => {
  it('renders the white heading and gold-overlay section', () => {
    const { container } = render(<Consultation />)
    expect(screen.getByText(consultation.eyebrow)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: consultation.headline }),
    ).toBeInTheDocument()
    expect(container.querySelector('.bg-brand\\/80')).toBeInTheDocument()
  })

  it('provides the four consultation fields', () => {
    render(<Consultation />)
    expect(screen.getByLabelText(consultation.fields.name)).toHaveAttribute(
      'placeholder',
      consultation.fields.name,
    )
    expect(screen.getByLabelText(consultation.fields.email)).toHaveAttribute('type', 'email')
    expect(screen.getByLabelText(consultation.fields.subject)).toBeInTheDocument()
    expect(screen.getByLabelText(consultation.fields.message)).toBeInTheDocument()
  })

  it('shows a success message after submitting the form', async () => {
    const user = userEvent.setup()
    render(<Consultation />)

    await user.type(screen.getByLabelText(consultation.fields.name), 'Jane Doe')
    await user.type(screen.getByLabelText(consultation.fields.email), 'jane@example.com')
    await user.type(screen.getByLabelText(consultation.fields.subject), 'Consultation')
    await user.type(screen.getByLabelText(consultation.fields.message), 'Hello there')
    await user.click(screen.getByRole('button', { name: consultation.submitLabel }))

    expect(screen.getByRole('status')).toHaveTextContent(consultation.successMessage)
    expect(screen.queryByLabelText(consultation.fields.name)).not.toBeInTheDocument()
  })
})
