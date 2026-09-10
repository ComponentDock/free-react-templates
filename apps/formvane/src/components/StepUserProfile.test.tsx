import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StepUserProfile } from './StepUserProfile'
import type { UserProfileData } from './StepUserProfile'

const defaultData: UserProfileData = {
  fullName: '',
  education: '',
  email: '',
  phone: '',
  specialization: '',
  dateOfBirth: '',
}

describe('StepUserProfile', () => {
  it('renders the heading', () => {
    render(<StepUserProfile data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('User Profile')
  })

  it('renders 6 input fields', () => {
    render(<StepUserProfile data={defaultData} onChange={vi.fn()} />)
    expect(screen.getByPlaceholderText('Full Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Education Level')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email ID')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Specialization')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Date of Birth')).toBeInTheDocument()
  })

  it('calls onChange when user types', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<StepUserProfile data={defaultData} onChange={onChange} />)
    await user.type(screen.getByPlaceholderText('Full Name'), 'John')
    expect(onChange).toHaveBeenCalled()
  })

  it('displays current data values', () => {
    const data = { ...defaultData, fullName: 'Alice' }
    render(<StepUserProfile data={data} onChange={vi.fn()} />)
    expect(screen.getByPlaceholderText('Full Name')).toHaveValue('Alice')
  })
})
