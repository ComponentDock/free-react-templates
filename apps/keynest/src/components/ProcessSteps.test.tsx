import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProcessSteps } from './ProcessSteps'

describe('ProcessSteps', () => {
  it('renders 4 step titles', () => {
    render(<ProcessSteps />)
    expect(screen.getByText('Choose a category')).toBeInTheDocument()
    expect(screen.getByText('Find real estate')).toBeInTheDocument()
    expect(screen.getByText('Take the keys')).toBeInTheDocument()
    expect(screen.getByText('Live happy')).toBeInTheDocument()
  })

  it('renders step numbers', () => {
    render(<ProcessSteps />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
    expect(screen.getByText('04')).toBeInTheDocument()
  })

  it('renders step descriptions', () => {
    render(<ProcessSteps />)
    const descriptions = screen.getAllByText(/Rhoncus est pellentesque/)
    expect(descriptions).toHaveLength(4)
  })
})
