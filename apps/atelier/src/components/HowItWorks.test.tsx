import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the section header', () => {
    render(<HowItWorks />)
    expect(screen.getByText('How it works')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Working Process' })).toBeInTheDocument()
  })

  it('renders all three steps', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Project Analysis')).toBeInTheDocument()
    expect(screen.getByText('Design & Development')).toBeInTheDocument()
    expect(screen.getByText('Launch & Support')).toBeInTheDocument()
  })

  it('renders step numbers', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Step 01')).toBeInTheDocument()
    expect(screen.getByText('Step 02')).toBeInTheDocument()
    expect(screen.getByText('Step 03')).toBeInTheDocument()
  })

  it('renders step descriptions', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/dive deep into your business/)).toBeInTheDocument()
    expect(screen.getByText(/brings your vision to life/)).toBeInTheDocument()
    expect(screen.getByText(/deploy your project/)).toBeInTheDocument()
  })
})
