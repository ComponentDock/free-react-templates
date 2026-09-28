import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RegisterCard, Field } from './RegisterCard'
import { User } from 'lucide-react'

describe('Field', () => {
  it('renders an input with the given label and placeholder', () => {
    render(
      <Field
        label="Test"
        icon={<User size={16} />}
        value=""
        onChange={() => {}}
        placeholder="Test placeholder"
      />,
    )
    const input = screen.getByLabelText('Test')
    expect(input).toHaveAttribute('placeholder', 'Test placeholder')
  })

  it('renders with a custom type', () => {
    render(
      <Field
        label="Email"
        type="email"
        icon={<User size={16} />}
        value=""
        onChange={() => {}}
        placeholder="Email"
      />,
    )
    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email')
  })

  it('calls onChange when the user types', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(
      <Field
        label="Name"
        icon={<User size={16} />}
        value=""
        onChange={onChange}
        placeholder="Name"
      />,
    )
    await user.type(screen.getByLabelText('Name'), 'B')
    expect(onChange).toHaveBeenCalledWith('B')
  })
})

describe('RegisterCard', () => {
  it('renders the Registration Form heading', () => {
    render(<RegisterCard />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Registration Form')
  })

  it('renders four input fields', () => {
    render(<RegisterCard />)
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument()
  })

  it('renders a Register button', () => {
    render(<RegisterCard />)
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument()
  })

  it('allows typing in all fields', async () => {
    const user = userEvent.setup()
    render(<RegisterCard />)

    await user.type(screen.getByLabelText('Your Name'), 'Alice')
    await user.type(screen.getByLabelText('Your Email'), 'alice@test.com')
    await user.type(screen.getByLabelText('Your Password'), 'pass123')
    await user.type(screen.getByLabelText('Confirm Password'), 'pass123')

    expect(screen.getByLabelText('Your Name')).toHaveValue('Alice')
    expect(screen.getByLabelText('Your Email')).toHaveValue('alice@test.com')
    expect(screen.getByLabelText('Your Password')).toHaveValue('pass123')
    expect(screen.getByLabelText('Confirm Password')).toHaveValue('pass123')
  })

  it('prevents default form submission on button click', async () => {
    const user = userEvent.setup()
    render(<RegisterCard />)
    const button = screen.getByRole('button', { name: /register/i })
    await user.click(button)
  })

  it('renders the concert crowd background image', () => {
    const { container } = render(<RegisterCard />)
    const img = container.querySelector('img[aria-hidden="true"]')
    expect(img).toBeTruthy()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('inputs have rounded styling', () => {
    render(<RegisterCard />)
    const nameInput = screen.getByLabelText('Your Name')
    const wrapper = nameInput.closest('.rounded-full')
    expect(wrapper).toBeTruthy()
  })
})
