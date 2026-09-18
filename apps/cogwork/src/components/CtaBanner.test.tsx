import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the heading', () => {
    render(<CtaBanner />)
    expect(screen.getByText('Create, Enhance and Sustain')).toBeInTheDocument()
  })

  it('renders the contact button', () => {
    render(<CtaBanner />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/Far far away/)).toBeInTheDocument()
  })
})
