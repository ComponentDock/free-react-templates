import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BmiCalculator } from './BmiCalculator'

describe('BmiCalculator', () => {
  it('renders the heading and form inputs', () => {
    render(<BmiCalculator />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /Calculate Your Body Mass Index/i,
    )
    expect(screen.getByLabelText(/Height/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Weight/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Calculate/i })).toBeInTheDocument()
  })

  it('calculates BMI when form is submitted', async () => {
    const user = userEvent.setup()
    render(<BmiCalculator />)
    await user.type(screen.getByLabelText(/Height/i), '70')
    await user.type(screen.getByLabelText(/Weight/i), '170')
    await user.click(screen.getByRole('button', { name: /Calculate/i }))
    expect(screen.getByText(/Your BMI:/i)).toBeInTheDocument()
  })

  it('does not show result when inputs are zero', async () => {
    render(<BmiCalculator />)
    fireEvent.change(screen.getByLabelText(/Height/i), { target: { value: '0' } })
    fireEvent.change(screen.getByLabelText(/Weight/i), { target: { value: '0' } })
    fireEvent.submit(screen.getByRole('button', { name: /Calculate/i }))
    expect(screen.queryByText(/Your BMI:/i)).not.toBeInTheDocument()
  })

  it('does not show result when height is positive but weight is zero', async () => {
    render(<BmiCalculator />)
    fireEvent.change(screen.getByLabelText(/Height/i), { target: { value: '70' } })
    fireEvent.change(screen.getByLabelText(/Weight/i), { target: { value: '0' } })
    fireEvent.submit(screen.getByRole('button', { name: /Calculate/i }))
    expect(screen.queryByText(/Your BMI:/i)).not.toBeInTheDocument()
  })

  it('shows result with one decimal place', async () => {
    const user = userEvent.setup()
    render(<BmiCalculator />)
    await user.type(screen.getByLabelText(/Height/i), '70')
    await user.type(screen.getByLabelText(/Weight/i), '170')
    await user.click(screen.getByRole('button', { name: /Calculate/i }))
    // BMI = (170 / (70*70)) * 703 = 24.4
    expect(screen.getByText(/24.4/)).toBeInTheDocument()
  })
})
