import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BmiCalculator } from './BmiCalculator'

describe('BmiCalculator', () => {
  it('computes the BMI with a category label on submit', async () => {
    const user = userEvent.setup()
    render(<BmiCalculator />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Calculate your BMI/)

    await user.type(screen.getByLabelText('Weight (kg)'), '70')
    await user.type(screen.getByLabelText('Height (m)'), '1.75')
    await user.click(screen.getByRole('button', { name: 'Calculate' }))

    expect(screen.getByLabelText('Your BMI')).toHaveValue('22.86 — Normal')
  })

  it('labels the result Underweight below 18.5', async () => {
    const user = userEvent.setup()
    render(<BmiCalculator />)
    await user.type(screen.getByLabelText('Weight (kg)'), '50')
    await user.type(screen.getByLabelText('Height (m)'), '1.80')
    await user.click(screen.getByRole('button', { name: 'Calculate' }))
    expect(screen.getByLabelText('Your BMI')).toHaveValue('15.43 — Underweight')
  })

  it('labels the result Overweight from 25 up to 30', async () => {
    const user = userEvent.setup()
    render(<BmiCalculator />)
    await user.type(screen.getByLabelText('Weight (kg)'), '85')
    await user.type(screen.getByLabelText('Height (m)'), '1.75')
    await user.click(screen.getByRole('button', { name: 'Calculate' }))
    expect(screen.getByLabelText('Your BMI')).toHaveValue('27.76 — Overweight')
  })

  it('labels the result Obese above 30', async () => {
    const user = userEvent.setup()
    render(<BmiCalculator />)
    await user.type(screen.getByLabelText('Weight (kg)'), '110')
    await user.type(screen.getByLabelText('Height (m)'), '1.75')
    await user.click(screen.getByRole('button', { name: 'Calculate' }))
    expect(screen.getByLabelText('Your BMI')).toHaveValue('35.92 — Obese')
  })

  it('shows an error when the inputs are invalid', async () => {
    const user = userEvent.setup()
    render(<BmiCalculator />)
    await user.click(screen.getByRole('button', { name: 'Calculate' }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid weight and height/i)
  })
})
