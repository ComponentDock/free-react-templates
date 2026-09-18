import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the heading and pricing table', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { name: 'Pricing' })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: 'Service Names' })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: 'Stage' })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: 'Price' })).toBeInTheDocument()
  })

  it('shows at least 8 pricing rows', () => {
    render(<Pricing />)

    expect(screen.getByText('Teeth Whitening Service at home')).toBeInTheDocument()
    expect(screen.getByText('$115.00')).toBeInTheDocument()
    expect(screen.getByText('$600.00')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read More' })).toBeInTheDocument()
  })
})
