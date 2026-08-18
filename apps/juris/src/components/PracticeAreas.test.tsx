import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { QUOTE_FORM } from '../data'
import { PracticeAreas } from './PracticeAreas'

describe('PracticeAreas', () => {
  it('renders the section title and the four practice cards', () => {
    render(<PracticeAreas />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Practice Area' })).toBeInTheDocument()
    for (const title of ['Family Law', 'Corporate Law', 'Accidental Law', 'Finance Law']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('renders the quote form panel with its distinctive heading', () => {
    render(<PracticeAreas />)
    expect(screen.getByRole('heading', { level: 3, name: QUOTE_FORM.title })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: QUOTE_FORM.nameLabel })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: QUOTE_FORM.emailLabel })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: QUOTE_FORM.practiceLabel })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: QUOTE_FORM.messageLabel })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: QUOTE_FORM.submitLabel })).toBeInTheDocument()
  })

  it('shows field errors when submitting an empty form', async () => {
    const user = userEvent.setup()
    render(<PracticeAreas />)
    await user.click(screen.getByRole('button', { name: QUOTE_FORM.submitLabel }))
    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument()
    expect(screen.getByText('Message is required')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('swaps the form for a success message on a valid submission', async () => {
    const user = userEvent.setup()
    render(<PracticeAreas />)
    await user.type(screen.getByRole('textbox', { name: QUOTE_FORM.nameLabel }), 'Jane Roe')
    await user.type(
      screen.getByRole('textbox', { name: QUOTE_FORM.emailLabel }),
      'jane@example.com',
    )
    await user.type(
      screen.getByRole('textbox', { name: QUOTE_FORM.messageLabel }),
      'I need help with a family matter.',
    )
    await user.selectOptions(
      screen.getByRole('combobox', { name: QUOTE_FORM.practiceLabel }),
      'Corporate Law',
    )
    await user.click(screen.getByRole('button', { name: QUOTE_FORM.submitLabel }))
    expect(screen.getByRole('status')).toHaveTextContent(QUOTE_FORM.successMessage)
    expect(screen.queryByRole('textbox', { name: QUOTE_FORM.nameLabel })).not.toBeInTheDocument()
  })

  it('clears a field error once the user edits that field', async () => {
    const user = userEvent.setup()
    render(<PracticeAreas />)
    await user.click(screen.getByRole('button', { name: QUOTE_FORM.submitLabel }))
    expect(screen.getByText('Name is required')).toBeInTheDocument()
    await user.type(screen.getByRole('textbox', { name: QUOTE_FORM.nameLabel }), 'Sam Sparrow')
    expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
  })

  it('keeps the selected practice option in the combobox', () => {
    render(<PracticeAreas />)
    const select = screen.getByRole('combobox', {
      name: QUOTE_FORM.practiceLabel,
    }) as HTMLSelectElement
    expect(select.value).toBe('Family Law')
    expect(within(select).getAllByRole('option')).toHaveLength(4)
  })
})
