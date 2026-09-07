import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FloatingSelect } from './FloatingSelect'

describe('FloatingSelect', () => {
  const defaultProps = {
    label: 'Position',
    value: '',
    onChange: vi.fn(),
    options: [
      { value: 'ceo', label: 'CEO' },
      { value: 'cfo', label: 'CFO' },
    ],
  }

  it('renders with the label visible', () => {
    render(<FloatingSelect {...defaultProps} />)
    expect(screen.getByLabelText('Position')).toBeInTheDocument()
  })

  it('renders all options including placeholder', () => {
    render(<FloatingSelect {...defaultProps} />)
    expect(screen.getByRole('option', { name: 'CEO' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'CFO' })).toBeInTheDocument()
  })

  it('calls onChange with the selected value', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<FloatingSelect {...defaultProps} onChange={onChange} />)
    await user.selectOptions(screen.getByLabelText('Position'), 'ceo')
    expect(onChange).toHaveBeenCalledWith('ceo')
  })

  it('marks select as required when required prop is true', () => {
    render(<FloatingSelect {...defaultProps} required />)
    expect(screen.getByLabelText('Position')).toHaveAttribute('aria-required', 'true')
  })

  it('displays required asterisk when required is true', () => {
    const { container } = render(<FloatingSelect {...defaultProps} required />)
    const label = container.querySelector('label')
    expect(label?.textContent).toContain('*')
  })

  it('does not display required asterisk when required is false', () => {
    const { container } = render(<FloatingSelect {...defaultProps} />)
    const label = container.querySelector('label')
    expect(label?.textContent).not.toContain('*')
  })

  it('displays error message when error prop is provided', () => {
    render(<FloatingSelect {...defaultProps} error="Required field" />)
    expect(screen.getByRole('alert')).toHaveTextContent('Required field')
  })

  it('does not display error message when error prop is not provided', () => {
    render(<FloatingSelect {...defaultProps} />)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('applies has-value class when value is provided', () => {
    render(<FloatingSelect {...defaultProps} value="ceo" />)
    expect(screen.getByLabelText('Position').closest('.floating-input-wrapper')).toHaveClass(
      'has-value',
    )
  })

  it('does not apply has-value class when value is empty', () => {
    render(<FloatingSelect {...defaultProps} value="" />)
    expect(screen.getByLabelText('Position').closest('.floating-input-wrapper')).not.toHaveClass(
      'has-value',
    )
  })

  it('applies error class to select when error is provided', () => {
    render(<FloatingSelect {...defaultProps} error="Error" />)
    expect(screen.getByLabelText('Position')).toHaveClass('error')
  })

  it('does not apply error class when no error', () => {
    render(<FloatingSelect {...defaultProps} />)
    expect(screen.getByLabelText('Position')).not.toHaveClass('error')
  })

  it('renders floating-input-wrapper container', () => {
    const { container } = render(<FloatingSelect {...defaultProps} />)
    expect(container.querySelector('.floating-input-wrapper')).toBeInTheDocument()
  })

  it('renders underline-bar element', () => {
    const { container } = render(<FloatingSelect {...defaultProps} />)
    expect(container.querySelector('.underline-bar')).toBeInTheDocument()
  })

  it('sets id on the select element', () => {
    render(<FloatingSelect {...defaultProps} id="test-id" />)
    expect(screen.getByLabelText('Position')).toHaveAttribute('id', 'test-id')
  })

  it('sets htmlFor on the label to match id', () => {
    const { container } = render(<FloatingSelect {...defaultProps} id="test-id" />)
    const label = container.querySelector('label')
    expect(label).toHaveAttribute('for', 'test-id')
  })

  it('renders peer class on the select', () => {
    render(<FloatingSelect {...defaultProps} />)
    expect(screen.getByLabelText('Position')).toHaveClass('peer')
  })

  it('displays existing selected value', () => {
    render(<FloatingSelect {...defaultProps} value="cfo" />)
    expect(screen.getByLabelText('Position')).toHaveValue('cfo')
  })
})
