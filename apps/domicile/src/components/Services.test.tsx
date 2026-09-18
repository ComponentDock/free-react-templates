import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { describe, expect, it } from 'vitest'
describe('Services', () => {
  it('renders heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()
  })
  it('renders all 3 services', () => {
    render(<Services />)
    expect(screen.getByText('Research Suburbs')).toBeInTheDocument()
    expect(screen.getByText('Sold Houses')).toBeInTheDocument()
    expect(screen.getByText('Security Priority')).toBeInTheDocument()
  })
})
