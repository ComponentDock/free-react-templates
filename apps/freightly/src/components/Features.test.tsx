import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading, four feature cards and the stats row', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Shipping Made Simple' })).toBeInTheDocument()
    for (const title of ['On-Time Delivery', 'Global Network', 'Cargo Insurance', '24/7 Support']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getByText('98.5%')).toBeInTheDocument()
    expect(screen.getByText('150+')).toBeInTheDocument()
    expect(screen.getByText('2,847')).toBeInTheDocument()
    expect(screen.getByText('Active Routes')).toBeInTheDocument()
    expect(screen.getByText('3,247')).toBeInTheDocument()
    expect(screen.getByText('Deliveries Today')).toBeInTheDocument()
  })
})
