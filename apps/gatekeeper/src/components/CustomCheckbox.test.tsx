import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CustomCheckbox } from './CustomCheckbox'

describe('CustomCheckbox', () => {
  it('renders with the provided label', () => {
    render(<CustomCheckbox label="Remember Me" checked={false} onChange={() => {}} />)
    expect(screen.getByText('Remember Me')).toBeInTheDocument()
  })

  it('renders a checkbox input', () => {
    render(<CustomCheckbox label="Test" checked={false} onChange={() => {}} />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('checkbox is checked when checked prop is true', () => {
    render(<CustomCheckbox label="Test" checked={true} onChange={() => {}} />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('checkbox is unchecked when checked prop is false', () => {
    render(<CustomCheckbox label="Test" checked={false} onChange={() => {}} />)
    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('calls onChange with new value when clicked', async () => {
    const user = userEvent.setup()
    let value = false
    const handleChange = (v: boolean) => {
      value = v
    }
    render(<CustomCheckbox label="Test" checked={value} onChange={handleChange} />)
    await user.click(screen.getByRole('checkbox'))
    expect(value).toBe(true)
  })

  it('displays checkmark SVG when checked', () => {
    const { container } = render(<CustomCheckbox label="Test" checked={true} onChange={() => {}} />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveClass('h-3', 'w-3')
  })

  it('does not display checkmark SVG when unchecked', () => {
    const { container } = render(
      <CustomCheckbox label="Test" checked={false} onChange={() => {}} />,
    )
    const svgs = container.querySelectorAll('svg')
    expect(svgs.length).toBe(0)
  })
})
