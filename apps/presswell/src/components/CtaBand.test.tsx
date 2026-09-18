import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('renders the call-to-action heading', () => {
    render(<CtaBand />)
    expect(screen.getByRole('heading', { name: /Call us for a service/i })).toBeInTheDocument()
  })

  it('renders the Learn More button', () => {
    render(<CtaBand />)
    expect(screen.getByRole('link', { name: /Learn More/i })).toBeInTheDocument()
  })

  it('renders the subtext', () => {
    render(<CtaBand />)
    expect(screen.getByText(/We deliver the goods/i)).toBeInTheDocument()
  })
})
