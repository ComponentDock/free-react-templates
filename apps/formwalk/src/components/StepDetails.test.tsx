import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { StepDetails } from './StepDetails'

describe('StepDetails', () => {
  it('renders Subject select', () => {
    render(<StepDetails />)
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
  })

  it('renders Comment input', () => {
    render(<StepDetails />)
    expect(screen.getByLabelText('Comment')).toBeInTheDocument()
  })

  it('has Finance option', async () => {
    const user = userEvent.setup()
    render(<StepDetails />)
    const select = screen.getByLabelText('Subject')
    await user.selectOptions(select, 'Finance')
    expect(select).toHaveValue('Finance')
  })

  it('has Marketing option', async () => {
    const user = userEvent.setup()
    render(<StepDetails />)
    const select = screen.getByLabelText('Subject')
    await user.selectOptions(select, 'Marketing')
    expect(select).toHaveValue('Marketing')
  })

  it('has IT Support option', async () => {
    const user = userEvent.setup()
    render(<StepDetails />)
    const select = screen.getByLabelText('Subject')
    await user.selectOptions(select, 'IT Support')
    expect(select).toHaveValue('IT Support')
  })
})
