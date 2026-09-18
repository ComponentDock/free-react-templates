import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

it('renders 4 pricing plans', () => {
  render(<Pricing />)
  expect(screen.getByText('Our Plans & Pricing')).toBeInTheDocument()
  expect(screen.getByText('Basic')).toBeInTheDocument()
  expect(screen.getByText('Standard')).toBeInTheDocument()
  expect(screen.getByText('Premium')).toBeInTheDocument()
  expect(screen.getByText('Ultimate')).toBeInTheDocument()
  expect(screen.getByText('$29.00')).toBeInTheDocument()
  expect(screen.getByText('$59.00')).toBeInTheDocument()
  expect(screen.getByText('$79.00')).toBeInTheDocument()
  expect(screen.getByText('$89.50')).toBeInTheDocument()
})

it('has Sign Up buttons', () => {
  render(<Pricing />)
  const signUpButtons = screen.getAllByText('Sign Up')
  expect(signUpButtons).toHaveLength(4)
})
