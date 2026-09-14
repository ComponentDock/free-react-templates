import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Steps } from './Steps'

describe('Steps', () => {
  it('renders the section heading', () => {
    render(<Steps />)
    expect(screen.getByRole('heading', { name: /How We Work/i })).toBeInTheDocument()
  })

  it('renders all three step titles', () => {
    render(<Steps />)
    expect(screen.getByText('Consultation')).toBeInTheDocument()
    expect(screen.getByText('Choose Service')).toBeInTheDocument()
    expect(screen.getByText('Get Results')).toBeInTheDocument()
  })

  it('renders step numbers', () => {
    render(<Steps />)
    expect(screen.getByText('Step 01')).toBeInTheDocument()
    expect(screen.getByText('Step 02')).toBeInTheDocument()
    expect(screen.getByText('Step 03')).toBeInTheDocument()
  })

  it('renders step descriptions', () => {
    render(<Steps />)
    expect(screen.getByText(/free consultation/i)).toBeInTheDocument()
    expect(screen.getByText(/practice area/i)).toBeInTheDocument()
    expect(screen.getByText(/work diligently/i)).toBeInTheDocument()
  })
})
