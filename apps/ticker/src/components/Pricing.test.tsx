import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the heading and the three plans with the Trader plan highlighted', () => {
    render(<Pricing />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Invest in Your Trading Future' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 3, name: 'Free' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Trader' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Elite' })).toBeInTheDocument()

    expect(screen.getByText('$0')).toBeInTheDocument()
    expect(screen.getByText('$79')).toBeInTheDocument()
    expect(screen.getByText('$149')).toBeInTheDocument()

    expect(screen.getByText('Most Popular')).toBeInTheDocument()
    expect(screen.getByText('Live trading room access')).toBeInTheDocument()
    expect(screen.getByText('Weekly mentor Q&A sessions')).toBeInTheDocument()
  })

  it('shows the custom solution card', () => {
    render(<Pricing />)

    expect(
      screen.getByRole('heading', { level: 3, name: 'Need a Custom Solution?' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Sales' })).toBeInTheDocument()
  })
})
