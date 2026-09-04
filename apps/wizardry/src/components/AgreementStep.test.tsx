import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AgreementStep } from './AgreementStep'
import { INITIAL_DATA } from '../types'

describe('AgreementStep', () => {
  const defaultProps = {
    data: INITIAL_DATA,
    onChange: vi.fn(),
  }

  it('renders the step header', () => {
    render(<AgreementStep {...defaultProps} />)
    expect(screen.getByText('Agreement')).toBeInTheDocument()
  })

  it('renders the agreement text', () => {
    render(<AgreementStep {...defaultProps} />)
    expect(screen.getByText(/Massa placerat duis ultricies/)).toBeInTheDocument()
  })

  it('renders the checkbox label', () => {
    render(<AgreementStep {...defaultProps} />)
    expect(screen.getByText('I read agreement and I have not any objection.')).toBeInTheDocument()
  })

  it('renders a checkbox', () => {
    render(<AgreementStep {...defaultProps} />)
    expect(
      screen.getByRole('checkbox', {
        name: /I read agreement and I have not any objection/i,
      }),
    ).toBeInTheDocument()
  })

  it('calls onChange when checkbox is toggled', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<AgreementStep {...defaultProps} onChange={onChange} />)

    await user.click(
      screen.getByRole('checkbox', {
        name: /I read agreement and I have not any objection/i,
      }),
    )
    expect(onChange).toHaveBeenCalledWith('agreementAccepted', true)
  })

  it('displays validation error', () => {
    render(<AgreementStep {...defaultProps} error="You must accept the agreement" />)
    expect(screen.getByText('You must accept the agreement')).toBeInTheDocument()
  })

  it('shows checkbox as checked when data has agreementAccepted true', () => {
    render(<AgreementStep {...defaultProps} data={{ ...INITIAL_DATA, agreementAccepted: true }} />)
    expect(
      screen.getByRole('checkbox', {
        name: /I read agreement and I have not any objection/i,
      }),
    ).toBeChecked()
  })
})
