import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the CTA heading', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('heading', { name: /become a volunteer/i })).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/Join our global network/i)).toBeInTheDocument()
  })

  it('renders the Join with us button', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('button', { name: /join with us/i })).toBeInTheDocument()
  })
})
