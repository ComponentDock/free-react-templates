import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Best Services')).toBeInTheDocument()
  })

  it('renders all six service cards', () => {
    render(<Services />)
    expect(screen.getByText('Business Analysis')).toBeInTheDocument()
    expect(screen.getByText('Business Consulting')).toBeInTheDocument()
    expect(screen.getByText('Business Insurance')).toBeInTheDocument()
    expect(screen.getByText('Global Investigation')).toBeInTheDocument()
    expect(screen.getByText('Audit & Evaluation')).toBeInTheDocument()
    expect(screen.getByText('Marketing Strategy')).toBeInTheDocument()
  })
})
