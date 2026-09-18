import { render, screen } from '@testing-library/react'
import { Cities } from './Cities'
import { describe, it, expect } from 'vitest'

describe('Cities', () => {
  it('renders section heading', () => {
    render(<Cities />)
    expect(screen.getByRole('heading', { name: 'cities clients prefer' })).toBeInTheDocument()
  })

  it('renders all 6 city names', () => {
    render(<Cities />)
    expect(screen.getByText('Miami')).toBeInTheDocument()
    expect(screen.getByText('Dublin')).toBeInTheDocument()
    expect(screen.getByText('Vienna')).toBeInTheDocument()
    expect(screen.getByText('Marbella')).toBeInTheDocument()
    expect(screen.getByText('New York')).toBeInTheDocument()
    expect(screen.getByText('Geneva')).toBeInTheDocument()
  })

  it('renders navigation arrows', () => {
    render(<Cities />)
    expect(screen.getByLabelText('Previous cities')).toBeInTheDocument()
    expect(screen.getByLabelText('Next cities')).toBeInTheDocument()
  })
})
