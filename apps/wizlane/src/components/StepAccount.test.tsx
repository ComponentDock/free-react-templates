import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StepAccount, type AccountData } from './StepAccount'

const emptyData: AccountData = {
  currentPassword: '',
  confirmPassword: '',
  newPassword: '',
  verifyPassword: '',
}

describe('StepAccount', () => {
  it('renders the heading', () => {
    render(<StepAccount data={emptyData} onChange={() => {}} errors={{}} />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Account Security')
  })

  it('renders all password fields', () => {
    render(<StepAccount data={emptyData} onChange={() => {}} errors={{}} />)
    expect(screen.getByPlaceholderText('Current Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm Current Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('New Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm New Password')).toBeInTheDocument()
  })

  it('calls onChange when typing', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<StepAccount data={emptyData} onChange={onChange} errors={{}} />)
    await user.type(screen.getByPlaceholderText('Current Password'), 'pass1')
    expect(onChange).toHaveBeenCalled()
  })

  it('displays error messages', () => {
    render(
      <StepAccount
        data={emptyData}
        onChange={() => {}}
        errors={{ currentPassword: 'Required', verifyPassword: 'Passwords do not match' }}
      />,
    )
    expect(screen.getByText('Required')).toBeInTheDocument()
    expect(screen.getByText('Passwords do not match')).toBeInTheDocument()
  })
})
