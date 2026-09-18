import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Volunteers } from './Volunteers'

describe('Volunteers', () => {
  it('renders the section heading', () => {
    render(<Volunteers />)
    expect(screen.getByText('Expert Volunteers')).toBeInTheDocument()
    expect(screen.getByText('Volunteers')).toBeInTheDocument()
  })

  it('renders all 4 volunteer cards', () => {
    render(<Volunteers />)
    expect(screen.getByText('David Phillips')).toBeInTheDocument()
    expect(screen.getByText('Linda Rudolph')).toBeInTheDocument()
    expect(screen.getByText('Samuel Gardner')).toBeInTheDocument()
    expect(screen.getByText('Angela Morrison')).toBeInTheDocument()
  })

  it('renders roles for each volunteer', () => {
    render(<Volunteers />)
    expect(screen.getByText('Project Manager')).toBeInTheDocument()
    expect(screen.getByText('Field Supervisor')).toBeInTheDocument()
    expect(screen.getByText('Co Founder')).toBeInTheDocument()
    expect(screen.getByText('Community Lead')).toBeInTheDocument()
  })
})
