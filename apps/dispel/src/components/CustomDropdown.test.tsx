import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CustomDropdown } from './CustomDropdown'

describe('CustomDropdown', () => {
  const defaultProps = {
    label: 'Gender',
    id: 'gender',
    options: ['Male', 'Female'],
    value: '',
    onChange: vi.fn(),
  }

  it('renders with label and button', () => {
    render(<CustomDropdown {...defaultProps} />)
    expect(screen.getByText('Gender')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /gender/i })).toBeInTheDocument()
  })

  it('displays first option as default when value is empty', () => {
    render(<CustomDropdown {...defaultProps} />)
    expect(screen.getByRole('button', { name: /gender/i })).toHaveTextContent('Male')
  })

  it('displays selected value', () => {
    render(<CustomDropdown {...defaultProps} value="Female" />)
    expect(screen.getByRole('button', { name: /gender/i })).toHaveTextContent('Female')
  })

  it('opens dropdown on click', async () => {
    const user = userEvent.setup()
    render(<CustomDropdown {...defaultProps} />)
    await user.click(screen.getByRole('button', { name: /gender/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    expect(screen.getAllByRole('option')).toHaveLength(2)
  })

  it('calls onChange when an option is selected', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<CustomDropdown {...defaultProps} onChange={onChange} />)
    await user.click(screen.getByRole('button', { name: /gender/i }))
    await user.click(screen.getByRole('option', { name: /female/i }))
    expect(onChange).toHaveBeenCalledWith('Female')
  })

  it('closes dropdown after selection', async () => {
    const user = userEvent.setup()
    render(<CustomDropdown {...defaultProps} />)
    await user.click(screen.getByRole('button', { name: /gender/i }))
    await user.click(screen.getByRole('option', { name: /female/i }))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('toggles dropdown open/close', async () => {
    const user = userEvent.setup()
    render(<CustomDropdown {...defaultProps} />)
    await user.click(screen.getByRole('button', { name: /gender/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /gender/i }))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('closes dropdown when clicking outside', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <CustomDropdown {...defaultProps} />
        <span data-testid="outside">Outside</span>
      </div>,
    )
    await user.click(screen.getByRole('button', { name: /gender/i }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(screen.getByTestId('outside'))
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('sets aria-expanded on button', async () => {
    const user = userEvent.setup()
    render(<CustomDropdown {...defaultProps} />)
    const button = screen.getByRole('button', { name: /gender/i })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })

  it('marks selected option with aria-selected', async () => {
    const user = userEvent.setup()
    render(<CustomDropdown {...defaultProps} value="Male" />)
    await user.click(screen.getByRole('button', { name: /gender/i }))
    const options = screen.getAllByRole('option')
    const maleOption = options.find((o) => o.textContent === 'Male')
    const femaleOption = options.find((o) => o.textContent === 'Female')
    expect(maleOption).toHaveAttribute('aria-selected', 'true')
    expect(femaleOption).toHaveAttribute('aria-selected', 'false')
  })

  it('shows label as fallback when options are empty', () => {
    render(<CustomDropdown label="Pick One" id="empty" options={[]} value="" onChange={vi.fn()} />)
    expect(screen.getByRole('button', { name: /pick one/i })).toHaveTextContent('Pick One')
  })
})
