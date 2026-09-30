import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TermsCheckbox } from './TermsCheckbox'

describe('TermsCheckbox', () => {
  it('renders the checkbox', () => {
    render(<TermsCheckbox />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('is checked by default', () => {
    render(<TermsCheckbox />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('toggles when clicked', async () => {
    const user = userEvent.setup()
    render(<TermsCheckbox />)
    const checkbox = screen.getByRole('checkbox')
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('displays the terms text', () => {
    render(<TermsCheckbox />)
    expect(screen.getByText(/i agree all statements/i)).toBeInTheDocument()
  })

  it('links to terms of service', () => {
    render(<TermsCheckbox />)
    expect(screen.getByRole('link', { name: /terms of service/i })).toBeInTheDocument()
  })
})
