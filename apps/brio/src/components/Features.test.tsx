import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders feature headings', () => {
    render(<Features />)
    expect(screen.getByText('Reasons To Choose Notebook')).toBeInTheDocument()
    expect(screen.getByText('Facts Why Inkjet Printing')).toBeInTheDocument()
  })

  it('renders feature image', () => {
    render(<Features />)
    expect(screen.getByAltText('Feature illustration')).toBeInTheDocument()
  })
})
