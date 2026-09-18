import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the heading and description', () => {
    render(<CtaBanner />)
    expect(screen.getByText('Volunteer Needed At Your Area')).toBeInTheDocument()
    expect(screen.getByText(/Join thousands of volunteers/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('link', { name: /learn more/i })).toHaveAttribute('href', '#events')
  })
})
