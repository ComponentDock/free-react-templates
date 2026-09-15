import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders all 4 feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Professional Builder')).toBeInTheDocument()
    expect(screen.getByText('We Deliver Quality')).toBeInTheDocument()
    expect(screen.getByText('Always On Time')).toBeInTheDocument()
    expect(screen.getByText('We Are Passionate')).toBeInTheDocument()
  })

  it('renders descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/Expert construction services/)).toBeInTheDocument()
    expect(screen.getByText(/Premium materials/)).toBeInTheDocument()
    expect(screen.getByText(/We respect your schedule/)).toBeInTheDocument()
    expect(screen.getByText(/Our passion for building/)).toBeInTheDocument()
  })
})
