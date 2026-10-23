import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and three plans with features and purchase buttons', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { level: 2, name: 'Affordable Price' })).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 3, name: 'Basic' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Standard' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Unlimited' })).toBeInTheDocument()

    expect(screen.getByText('$20')).toBeInTheDocument()
    expect(screen.getByText('$39')).toBeInTheDocument()
    expect(screen.getByText('$59')).toBeInTheDocument()

    expect(screen.getAllByText('100 MB Disk Space')).toHaveLength(3)
    expect(screen.getAllByText('Customer Support 24/7')).toHaveLength(3)

    expect(screen.getAllByRole('button', { name: 'Purchase' })).toHaveLength(3)
  })
})
