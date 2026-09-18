import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and four service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /our services/i })).toBeInTheDocument()
    expect(screen.getByText('Vector Illustration')).toBeInTheDocument()
    expect(screen.getByText('Graphics Design')).toBeInTheDocument()
    expect(screen.getByText('Mobile App Design')).toBeInTheDocument()
    expect(screen.getByText('Custom Printing')).toBeInTheDocument()
  })
})
