import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { StepPersonal } from './StepPersonal'

describe('StepPersonal', () => {
  it('renders First Name input', () => {
    render(<StepPersonal />)
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
  })

  it('renders Last Name input', () => {
    render(<StepPersonal />)
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
  })

  it('both inputs are text type', () => {
    render(<StepPersonal />)
    expect(screen.getByLabelText('First Name')).toHaveAttribute('type', 'text')
    expect(screen.getByLabelText('Last Name')).toHaveAttribute('type', 'text')
  })
})
