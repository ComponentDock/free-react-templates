import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Causes } from './Causes'

describe('Causes', () => {
  it('renders the section heading', () => {
    render(<Causes />)
    expect(screen.getByText('Popular Causes')).toBeInTheDocument()
  })

  it('renders all three cause cards', () => {
    render(<Causes />)
    expect(screen.getByText('Clean Water for Rural Communities')).toBeInTheDocument()
    expect(screen.getByText('Education for Underprivileged Children')).toBeInTheDocument()
    expect(screen.getByText('Emergency Medical Relief Fund')).toBeInTheDocument()
  })

  it('renders donation amounts and donate buttons', () => {
    render(<Causes />)
    expect(screen.getByText('Raised: $15,330')).toBeInTheDocument()
    expect(screen.getByText('Goal: $25,000')).toBeInTheDocument()
    const donateButtons = screen.getAllByText('Donate')
    expect(donateButtons.length).toBeGreaterThanOrEqual(3)
  })

  it('renders progress percentages', () => {
    render(<Causes />)
    expect(screen.getAllByText('61%')).toHaveLength(2)
    expect(screen.getByText('63%')).toBeInTheDocument()
  })
})
