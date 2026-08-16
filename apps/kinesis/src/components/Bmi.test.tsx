import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Bmi } from './Bmi'

describe('Bmi', () => {
  it('renders the heading with Standard and Metric tabs', () => {
    render(<Bmi />)
    expect(screen.getByRole('heading', { level: 2, name: /What is Your BMI/ })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Standard' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: 'Metric' })).toHaveAttribute('aria-selected', 'false')
    expect(screen.getByLabelText(/Your Height/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Your Weight/)).toBeInTheDocument()
  })

  it('computes the BMI in standard units on submit', async () => {
    const user = userEvent.setup()
    render(<Bmi />)
    await user.type(screen.getByLabelText(/Your Height/), '70')
    await user.type(screen.getByLabelText(/Your Weight/), '150')
    await user.click(screen.getByRole('button', { name: 'Calculate BMI' }))
    expect(screen.getByRole('status')).toHaveTextContent('Your BMI is 21.5.')
  })

  it('computes the BMI in metric units after switching tabs', async () => {
    const user = userEvent.setup()
    render(<Bmi />)
    await user.click(screen.getByRole('tab', { name: 'Metric' }))
    expect(screen.getByRole('tab', { name: 'Metric' })).toHaveAttribute('aria-selected', 'true')
    await user.type(screen.getByLabelText(/Your Height/), '175')
    await user.type(screen.getByLabelText(/Your Weight/), '70')
    await user.click(screen.getByRole('button', { name: 'Calculate BMI' }))
    expect(screen.getByRole('status')).toHaveTextContent('Your BMI is 22.9.')
  })

  it('shows a message instead of a result for empty or invalid input', async () => {
    const user = userEvent.setup()
    render(<Bmi />)
    await user.click(screen.getByRole('button', { name: 'Calculate BMI' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'Please enter your height and weight to calculate your BMI.',
    )

    await user.type(screen.getByLabelText(/Your Height/), '70')
    await user.click(screen.getByRole('button', { name: 'Calculate BMI' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'Please enter your height and weight to calculate your BMI.',
    )
  })

  it('rejects non-numeric input', () => {
    render(<Bmi />)
    fireEvent.change(screen.getByLabelText(/Your Height/), { target: { value: 'abc' } })
    fireEvent.change(screen.getByLabelText(/Your Weight/), { target: { value: '70' } })
    fireEvent.click(screen.getByRole('button', { name: 'Calculate BMI' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'Please enter your height and weight to calculate your BMI.',
    )

    fireEvent.change(screen.getByLabelText(/Your Height/), { target: { value: '170' } })
    fireEvent.change(screen.getByLabelText(/Your Weight/), { target: { value: 'abc' } })
    fireEvent.click(screen.getByRole('button', { name: 'Calculate BMI' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'Please enter your height and weight to calculate your BMI.',
    )
  })
})
