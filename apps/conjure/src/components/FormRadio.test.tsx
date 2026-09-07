import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FormRadio } from './FormRadio'

describe('FormRadio', () => {
  const options = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ]

  it('renders both options', () => {
    render(<FormRadio name="gender" options={options} />)
    expect(screen.getByLabelText('Male')).toBeInTheDocument()
    expect(screen.getByLabelText('Female')).toBeInTheDocument()
  })

  it('defaults to the first option', () => {
    render(<FormRadio name="gender" options={options} />)
    expect(screen.getByLabelText('Male')).toBeChecked()
  })

  it('selects a different option on click', async () => {
    const user = userEvent.setup()
    render(<FormRadio name="gender" options={options} />)
    await user.click(screen.getByLabelText('Female'))
    expect(screen.getByLabelText('Female')).toBeChecked()
    expect(screen.getByLabelText('Male')).not.toBeChecked()
  })

  it('has a screen-reader legend', () => {
    render(<FormRadio name="gender" options={options} />)
    expect(screen.getByText('gender')).toBeInTheDocument()
  })
})
