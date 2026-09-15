import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders booking text', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/Book now to build your dream home/)).toBeInTheDocument()
  })

  it('renders Book Now button', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('link', { name: /book now/i })).toBeInTheDocument()
  })
})
