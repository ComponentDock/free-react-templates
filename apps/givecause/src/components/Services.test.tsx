import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Services')
  })

  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Donation')).toBeInTheDocument()
    expect(screen.getByText('Education')).toBeInTheDocument()
    expect(screen.getByText('Volunteering')).toBeInTheDocument()
  })

  it('renders descriptions for each service', () => {
    render(<Services />)
    expect(screen.getByText(/help collect and distribute/)).toBeInTheDocument()
    expect(screen.getByText(/educational resources/)).toBeInTheDocument()
    expect(screen.getByText(/passionate volunteers/)).toBeInTheDocument()
  })
})
