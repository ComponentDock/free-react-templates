import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Engineering } from './Engineering'

describe('Engineering', () => {
  it('renders the section heading', () => {
    render(<Engineering />)
    expect(screen.getByText('We Are Reliable Engineering In House')).toBeInTheDocument()
  })

  it('renders all four engineering items', () => {
    render(<Engineering />)
    expect(screen.getByText('Green Energy')).toBeInTheDocument()
    expect(screen.getByText('Precision Mechanics')).toBeInTheDocument()
    expect(screen.getByText('Construction Machines')).toBeInTheDocument()
    expect(screen.getByText('Reliable and Stable')).toBeInTheDocument()
  })

  it('renders the engineering image', () => {
    render(<Engineering />)
    expect(screen.getByAltText('Engineering facility')).toBeInTheDocument()
  })
})
