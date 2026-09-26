import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders all four service titles', () => {
    render(<Services />)
    expect(screen.getByText('Nature Photography')).toBeInTheDocument()
    expect(screen.getByText('Portrait Photography')).toBeInTheDocument()
    expect(screen.getByText('Wedding Photography')).toBeInTheDocument()
    expect(screen.getByText('Food & Drink Photography')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    const descriptions = screen.getAllByText(/Saepe pariatur/)
    expect(descriptions.length).toBe(4)
  })

  it('renders service icons', () => {
    render(<Services />)
    expect(screen.getByText('Nature Photography').closest('div')?.querySelector('svg')).toBeTruthy()
  })
})
