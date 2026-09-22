import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BmiCalculator, computeBmi } from './BmiCalculator'

describe('computeBmi', () => {
  it('returns null for zero height', () => {
    expect(computeBmi(0, 170)).toBeNull()
  })

  it('returns null for zero weight', () => {
    expect(computeBmi(70, 0)).toBeNull()
  })

  it('returns null for negative height', () => {
    expect(computeBmi(-5, 170)).toBeNull()
  })

  it('returns null for negative weight', () => {
    expect(computeBmi(70, -10)).toBeNull()
  })

  it('returns null when both are zero', () => {
    expect(computeBmi(0, 0)).toBeNull()
  })

  it('returns BMI string for valid inputs', () => {
    expect(computeBmi(70, 170)).toBe('24.4')
  })
})

describe('BmiCalculator', () => {
  it('renders the heading and input fields', () => {
    render(<BmiCalculator />)
    expect(
      screen.getByRole('heading', { level: 2, name: /calculate your body mass index/i }),
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/height/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/weight/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /calculate your bmi/i })).toBeInTheDocument()
  })

  it('calculates and displays BMI result for valid inputs', async () => {
    const user = userEvent.setup()
    render(<BmiCalculator />)
    await user.type(screen.getByLabelText(/height/i), '70')
    await user.type(screen.getByLabelText(/weight/i), '170')
    await user.click(screen.getByRole('button', { name: /calculate your bmi/i }))
    expect(screen.getByText(/your bmi is/i)).toBeInTheDocument()
    expect(screen.getByText('24.4')).toBeInTheDocument()
  })

  it('does not display BMI result when height is zero', async () => {
    const user = userEvent.setup()
    render(<BmiCalculator />)
    await user.type(screen.getByLabelText(/height/i), '0')
    await user.type(screen.getByLabelText(/weight/i), '170')
    await user.click(screen.getByRole('button', { name: /calculate your bmi/i }))
    expect(screen.queryByText(/your bmi is/i)).not.toBeInTheDocument()
  })

  it('does not display BMI result when weight is zero', async () => {
    const user = userEvent.setup()
    render(<BmiCalculator />)
    await user.type(screen.getByLabelText(/height/i), '70')
    await user.type(screen.getByLabelText(/weight/i), '0')
    await user.click(screen.getByRole('button', { name: /calculate your bmi/i }))
    expect(screen.queryByText(/your bmi is/i)).not.toBeInTheDocument()
  })
})
