import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the pricing heading and 3 plan cards', () => {
    render(<Pricing />)
    expect(
      screen.getByRole('heading', { level: 2, name: /choose the perfect plan/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('Standard')).toBeInTheDocument()
    expect(screen.getByText('Business')).toBeInTheDocument()
    expect(screen.getByText('Ultimate')).toBeInTheDocument()
  })

  it('displays prices and purchase buttons', () => {
    render(<Pricing />)
    expect(screen.getByText('£199')).toBeInTheDocument()
    expect(screen.getByText('£399')).toBeInTheDocument()
    expect(screen.getByText('£499')).toBeInTheDocument()
    const buttons = screen.getAllByText('Purchase Plan')
    expect(buttons.length).toBe(3)
  })
})
