import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders heading and 6 service items', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getByText('Innovative Structure')).toBeInTheDocument()
    expect(screen.getByText('Architectural Design')).toBeInTheDocument()
    expect(screen.getByText('Interior Design')).toBeInTheDocument()
    expect(screen.getByText('Space Planning')).toBeInTheDocument()
    expect(screen.getByText('Expert Architects')).toBeInTheDocument()
    expect(screen.getByText('Construction Management')).toBeInTheDocument()
  })
})
