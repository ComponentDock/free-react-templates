import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the CTA heading', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/Are you Searching For a First-Class Consultant/)).toBeInTheDocument()
  })

  it('renders the Contact Us button', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('link', { name: /Contact Us/i })).toBeInTheDocument()
  })
})
