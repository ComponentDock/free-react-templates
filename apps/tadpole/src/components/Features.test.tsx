import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders section heading', () => {
    render(<Features />)
    expect(screen.getByText('Our Special Features')).toBeInTheDocument()
  })

  it('renders all three feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Playful Learning')).toBeInTheDocument()
    expect(screen.getByText('Creative Arts')).toBeInTheDocument()
    expect(screen.getByText('Nature Exploration')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/Engaging curriculum/)).toBeInTheDocument()
    expect(screen.getByText(/Express yourself/)).toBeInTheDocument()
    expect(screen.getByText(/Outdoor adventures/)).toBeInTheDocument()
  })
})
