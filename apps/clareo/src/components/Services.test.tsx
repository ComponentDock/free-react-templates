import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Services from './Services'

describe('Services', () => {
  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Photography')).toBeInTheDocument()
    expect(screen.getByText('Image Processing')).toBeInTheDocument()
    expect(screen.getByText('Videography')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Professional photography services/)).toBeInTheDocument()
    expect(screen.getByText(/Expert photo editing/)).toBeInTheDocument()
    expect(screen.getByText(/High-quality video production/)).toBeInTheDocument()
  })
})
