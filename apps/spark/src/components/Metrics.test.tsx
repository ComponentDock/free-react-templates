import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Metrics } from './Metrics'

describe('Metrics', () => {
  it('renders all four stats', () => {
    render(<Metrics />)
    expect(screen.getByText('50K+')).toBeInTheDocument()
    expect(screen.getByText('250K+')).toBeInTheDocument()
    expect(screen.getByText('4.9')).toBeInTheDocument()
    expect(screen.getByText('120+')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Metrics />)
    expect(screen.getByText('Happy Users')).toBeInTheDocument()
    expect(screen.getByText('Downloads')).toBeInTheDocument()
    expect(screen.getByText('App Rating')).toBeInTheDocument()
    expect(screen.getByText('Countries')).toBeInTheDocument()
  })
})
