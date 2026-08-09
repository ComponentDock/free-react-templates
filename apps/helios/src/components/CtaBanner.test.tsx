import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the heading, subtext, and both actions', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('heading', { name: 'Ready to Go Solar?' })).toBeInTheDocument()
    expect(screen.getByText(/free, no-obligation quote/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Free Quote' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Call \(555\) 123-4567/i })).toBeInTheDocument()
  })
})
