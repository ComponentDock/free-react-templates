import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Step1BasicInfo } from './Step1BasicInfo'

describe('Step1BasicInfo', () => {
  it('renders first name and last name fields', () => {
    render(<Step1BasicInfo />)
    expect(screen.getByLabelText('First name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last name')).toBeInTheDocument()
  })

  it('renders gender radio buttons', () => {
    render(<Step1BasicInfo />)
    expect(screen.getByDisplayValue('male')).toBeInTheDocument()
    expect(screen.getByDisplayValue('female')).toBeInTheDocument()
  })

  it('renders date of birth section with three selects', () => {
    render(<Step1BasicInfo />)
    expect(screen.getByLabelText('Date of birth')).toBeInTheDocument()
    const selects = screen.getAllByRole('combobox')
    expect(selects.length).toBeGreaterThanOrEqual(3)
  })

  it('renders nationality select', () => {
    render(<Step1BasicInfo />)
    expect(screen.getByLabelText('Nationality')).toBeInTheDocument()
  })

  it('allows typing in first name', async () => {
    const user = userEvent.setup()
    render(<Step1BasicInfo />)
    const input = screen.getByLabelText('First name')
    await user.type(input, 'Nguyen')
    expect(input).toHaveValue('Nguyen')
  })

  it('allows selecting a gender', async () => {
    const user = userEvent.setup()
    render(<Step1BasicInfo />)
    const female = screen.getByDisplayValue('female')
    await user.click(female)
    expect(female).toBeChecked()
  })

  it('prevents default form submission', () => {
    render(<Step1BasicInfo />)
    const form = screen.getByLabelText('First name').closest('form')!
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    const preventDefault = vi.fn()
    Object.defineProperty(submitEvent, 'preventDefault', { value: preventDefault })
    form.dispatchEvent(submitEvent)
    expect(preventDefault).toHaveBeenCalled()
  })
})
