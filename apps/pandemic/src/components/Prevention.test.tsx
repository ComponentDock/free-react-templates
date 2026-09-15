import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Prevention } from './Prevention'

describe('Prevention', () => {
  it('renders the heading', () => {
    render(<Prevention />)
    expect(screen.getByText(/how to prevent/i)).toBeInTheDocument()
  })

  it('renders all four prevention items', () => {
    render(<Prevention />)
    expect(screen.getByText('Stay at home')).toBeInTheDocument()
    expect(screen.getByText('Wear facemask')).toBeInTheDocument()
    expect(screen.getByText('Keep social distancing')).toBeInTheDocument()
    expect(screen.getByText('Wash your hands')).toBeInTheDocument()
  })

  it('renders descriptions for each prevention item', () => {
    render(<Prevention />)
    expect(screen.getByText(/feel unwell/i)).toBeInTheDocument()
    expect(screen.getByText(/facemask in public/i)).toBeInTheDocument()
    expect(screen.getByText(/1 meter distance/i)).toBeInTheDocument()
    expect(screen.getByText(/soap and water/i)).toBeInTheDocument()
  })
})
