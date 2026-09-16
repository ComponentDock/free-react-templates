import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders 6 service items', () => {
    render(<Services />)
    expect(screen.getByText('Pre-Construction')).toBeInTheDocument()
    expect(screen.getByText('New Construction')).toBeInTheDocument()
    expect(screen.getByText('Remodel')).toBeInTheDocument()
    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getByText('Civil & Architecture')).toBeInTheDocument()
    expect(screen.getByText('Engineering')).toBeInTheDocument()
  })

  it('renders right panel heading', () => {
    render(<Services />)
    expect(screen.getByText('Why Choose Our Services')).toBeInTheDocument()
  })
})
