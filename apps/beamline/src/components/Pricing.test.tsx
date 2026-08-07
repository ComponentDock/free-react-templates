import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section heading', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { level: 2, name: 'Price & Plans' })).toBeInTheDocument()
  })

  it('shows three plans with monthly prices and Get Started buttons', () => {
    render(<Pricing />)

    expect(screen.getAllByRole('heading', { level: 3, name: 'Planning Solution' })).toHaveLength(3)
    expect(screen.getAllByText('/mos')).toHaveLength(3)
    expect(screen.getAllByRole('button', { name: 'Get Started' })).toHaveLength(3)
  })
})
