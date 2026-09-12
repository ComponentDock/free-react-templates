import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SecondServices } from './SecondServices'

describe('SecondServices', () => {
  it('renders three additional service cards', () => {
    render(<SecondServices />)
    expect(screen.getByText('Drone Mapping')).toBeInTheDocument()
    expect(screen.getByText('Real Estate')).toBeInTheDocument()
    expect(screen.getByText('Commercial')).toBeInTheDocument()
  })
})
