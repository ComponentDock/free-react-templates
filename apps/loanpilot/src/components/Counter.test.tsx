import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders all four stat numbers', () => {
    render(<Counter />)
    expect(screen.getByText('2100')).toBeInTheDocument()
    expect(screen.getByText('99%')).toBeInTheDocument()
    expect(screen.getByText('90+')).toBeInTheDocument()
    expect(screen.getByText('70+')).toBeInTheDocument()
  })

  it('renders all four stat labels', () => {
    render(<Counter />)
    expect(screen.getByText('Successful Loan Approval')).toBeInTheDocument()
    expect(screen.getByText('Customer Satisfaction')).toBeInTheDocument()
    expect(screen.getByText('Office National Partners')).toBeInTheDocument()
    expect(screen.getByText('Team Members')).toBeInTheDocument()
  })

  it('renders four icons', () => {
    render(<Counter />)
    const icons = document.querySelectorAll('svg[aria-hidden="true"]')
    expect(icons.length).toBe(4)
  })
})
