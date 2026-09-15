import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders 4 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Business Strategy')).toBeInTheDocument()
    expect(screen.getByText('Data Analysis')).toBeInTheDocument()
    expect(screen.getByText('Graphic Design')).toBeInTheDocument()
    expect(screen.getByText('Creative')).toBeInTheDocument()
  })

  it('each card has a description', () => {
    render(<Services />)
    const descriptions = screen.getAllByText(/Even the all-powerful Pointing/)
    expect(descriptions).toHaveLength(4)
  })
})
