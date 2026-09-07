import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FloatingInput } from './FloatingInput'

describe('FloatingInput', () => {
  const defaultProps = {
    label: 'Email',
    value: '',
    onChange: vi.fn(),
  }

  it('renders with the label visible', () => {
    render(<FloatingInput {...defaultProps} />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('renders with aria-required when required is true', () => {
    render(<FloatingInput {...defaultProps} required />)
    expect(screen.getByLabelText('Email')).toHaveAttribute('aria-required', 'true')
  })

  it('does not set aria-required when required is false', () => {
    render(<FloatingInput {...defaultProps} />)
    expect(screen.getByLabelText('Email')).not.toHaveAttribute('aria-required', 'true')
  })

  it('displays required asterisk when required prop is true', () => {
    const { container } = render(<FloatingInput {...defaultProps} required />)
    const label = container.querySelector('label')
    expect(label?.textContent).toContain('*')
  })

  it('does not display required asterisk when required is false', () => {
    const { container } = render(<FloatingInput {...defaultProps} />)
    const label = container.querySelector('label')
    expect(label?.textContent).not.toContain('*')
  })

  it('calls onChange with the typed value', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<FloatingInput {...defaultProps} onChange={onChange} />)
    const input = screen.getByLabelText('Email')
    await user.type(input, 'a')
    expect(onChange).toHaveBeenCalledWith('a')
  })

  it('renders with type="text" by default', () => {
    render(<FloatingInput {...defaultProps} />)
    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'text')
  })

  it('renders with custom type when specified', () => {
    render(<FloatingInput {...defaultProps} type="password" />)
    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'password')
  })

  it('renders with custom type="email" when specified', () => {
    render(<FloatingInput {...defaultProps} type="email" />)
    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email')
  })

  it('renders with custom type="tel" when specified', () => {
    render(<FloatingInput {...defaultProps} type="tel" />)
    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'tel')
  })

  it('displays error message when error prop is provided', () => {
    render(<FloatingInput {...defaultProps} error="This field is required" />)
    expect(screen.getByRole('alert')).toHaveTextContent('This field is required')
  })

  it('does not display error message when error prop is not provided', () => {
    render(<FloatingInput {...defaultProps} />)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('applies has-value class when value is provided', () => {
    render(<FloatingInput {...defaultProps} value="test" />)
    expect(screen.getByLabelText('Email').closest('.floating-input-wrapper')).toHaveClass(
      'has-value',
    )
  })

  it('does not apply has-value class when value is empty', () => {
    render(<FloatingInput {...defaultProps} value="" />)
    expect(screen.getByLabelText('Email').closest('.floating-input-wrapper')).not.toHaveClass(
      'has-value',
    )
  })

  it('applies error class to input when error is provided', () => {
    render(<FloatingInput {...defaultProps} error="Error" />)
    expect(screen.getByLabelText('Email')).toHaveClass('error')
  })

  it('does not apply error class to input when no error', () => {
    render(<FloatingInput {...defaultProps} />)
    expect(screen.getByLabelText('Email')).not.toHaveClass('error')
  })

  it('renders floating-input-wrapper container', () => {
    const { container } = render(<FloatingInput {...defaultProps} />)
    expect(container.querySelector('.floating-input-wrapper')).toBeInTheDocument()
  })

  it('renders underline-bar element', () => {
    const { container } = render(<FloatingInput {...defaultProps} />)
    expect(container.querySelector('.underline-bar')).toBeInTheDocument()
  })

  it('applies style prop to wrapper', () => {
    const { container } = render(<FloatingInput {...defaultProps} style={{ width: '50%' }} />)
    const wrapper = container.querySelector('.floating-input-wrapper')
    expect(wrapper).toHaveStyle({ width: '50%' })
  })

  it('sets id on the input element', () => {
    render(<FloatingInput {...defaultProps} id="test-id" />)
    expect(screen.getByLabelText('Email')).toHaveAttribute('id', 'test-id')
  })

  it('sets htmlFor on the label to match id', () => {
    const { container } = render(<FloatingInput {...defaultProps} id="test-id" />)
    const label = container.querySelector('label')
    expect(label).toHaveAttribute('for', 'test-id')
  })

  it('renders peer class on the input', () => {
    render(<FloatingInput {...defaultProps} />)
    expect(screen.getByLabelText('Email')).toHaveClass('peer')
  })
})
