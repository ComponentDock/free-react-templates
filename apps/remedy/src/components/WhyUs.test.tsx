import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { WhyUs } from './WhyUs'

describe('WhyUs', () => {
  it('renders the section heading', () => {
    render(<WhyUs />)
    expect(screen.getByText('Why Us')).toBeInTheDocument()
  })

  it('renders all three reasons', () => {
    render(<WhyUs />)
    expect(screen.getByText('Quality Assured')).toBeInTheDocument()
    expect(screen.getByText('Expert Guidance')).toBeInTheDocument()
    expect(screen.getByText('Best Prices')).toBeInTheDocument()
  })

  it('renders numbered items', () => {
    render(<WhyUs />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })
})
