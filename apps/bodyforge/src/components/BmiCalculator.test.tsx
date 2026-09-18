import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BmiCalculator } from './BmiCalculator'

describe('BmiCalculator', () => {
  it('renders the heading, form fields, and submit button', () => {
    render(<BmiCalculator />)

    expect(screen.getByText('Calculate Your BMI')).toBeInTheDocument()
    expect(screen.getByLabelText('Age')).toBeInTheDocument()
    expect(screen.getByLabelText('Weight (kg)')).toBeInTheDocument()
    expect(screen.getByLabelText('Height (cm)')).toBeInTheDocument()
    expect(screen.getByLabelText('Gender')).toBeInTheDocument()
    expect(screen.getByLabelText('Your BMI is')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'What Is BMI' })).toBeInTheDocument()
  })

  it('calculates BMI on form submission', async () => {
    const user = userEvent.setup()
    render(<BmiCalculator />)

    await user.type(screen.getByLabelText('Age'), '30')
    await user.type(screen.getByLabelText('Weight (kg)'), '75')
    await user.type(screen.getByLabelText('Height (cm)'), '175')
    await user.click(screen.getByRole('button', { name: 'What Is BMI' }))

    // BMI = 75 / (1.75^2) = 75 / 3.0625 ≈ 24.5
    expect(screen.getByLabelText('Your BMI is')).toHaveValue('24.5')
  })

  it('does not calculate BMI when weight or height is zero', async () => {
    const user = userEvent.setup()
    render(<BmiCalculator />)

    // Submit with empty fields (default state)
    await user.click(screen.getByRole('button', { name: 'What Is BMI' }))
    expect(screen.getByLabelText('Your BMI is')).toHaveValue('')

    // Submit with zero weight
    await user.type(screen.getByLabelText('Weight (kg)'), '0')
    await user.type(screen.getByLabelText('Height (cm)'), '175')
    await user.click(screen.getByRole('button', { name: 'What Is BMI' }))
    expect(screen.getByLabelText('Your BMI is')).toHaveValue('')
  })

  it('allows selecting gender', async () => {
    const user = userEvent.setup()
    render(<BmiCalculator />)

    await user.selectOptions(screen.getByLabelText('Gender'), 'male')
    expect(screen.getByLabelText('Gender')).toHaveValue('male')
  })

  it('renders the BMI illustration', () => {
    render(<BmiCalculator />)

    expect(screen.getByRole('img', { name: /bmi illustration/i })).toBeInTheDocument()
  })
})
