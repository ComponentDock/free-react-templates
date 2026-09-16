import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders three feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Connect With God')).toBeInTheDocument()
    expect(screen.getByText('Come As You Are')).toBeInTheDocument()
    expect(screen.getByText('Fellowship')).toBeInTheDocument()
  })

  it('has accessible label', () => {
    render(<Features />)
    expect(screen.getByLabelText('Features')).toBeInTheDocument()
  })
})
