import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CheckboxItem } from './CheckboxItem'

describe('CheckboxItem', () => {
  it('renders unchecked by default', () => {
    render(<CheckboxItem label="Task" />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
  })

  it('renders checked when defaultChecked is true', () => {
    render(<CheckboxItem label="Task" defaultChecked />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
  })

  it('toggles from unchecked to checked on click', async () => {
    const user = userEvent.setup()
    render(<CheckboxItem label="Task" />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('toggles from checked to unchecked on click', async () => {
    const user = userEvent.setup()
    render(<CheckboxItem label="Task" defaultChecked />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('displays the label text', () => {
    render(<CheckboxItem label="My Task" />)
    expect(screen.getByText('My Task')).toBeInTheDocument()
  })

  it('shows check icon when checked', () => {
    const { container } = render(<CheckboxItem label="Task" defaultChecked />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('does not show check icon when unchecked', () => {
    const { container } = render(<CheckboxItem label="Task" />)
    const svgs = container.querySelectorAll('svg')
    expect(svgs).toHaveLength(0)
  })

  it('has an accessible label matching the label prop', () => {
    render(<CheckboxItem label="Task One" />)
    const checkbox = screen.getByRole('checkbox', { name: 'Task One' })
    expect(checkbox).toBeInTheDocument()
  })
})
