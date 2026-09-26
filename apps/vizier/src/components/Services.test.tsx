import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders all four services', () => {
    render(<Services />)
    expect(screen.getByTestId('services')).toBeInTheDocument()
    expect(screen.getByText('Fashion Shows')).toBeInTheDocument()
    expect(screen.getByText('Special Events')).toBeInTheDocument()
    expect(screen.getByText('Commercial Photo')).toBeInTheDocument()
    expect(screen.getByText('Model School')).toBeInTheDocument()
  })
})
