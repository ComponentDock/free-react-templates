import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the consultation text', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/Schedule your appointment/i)).toBeInTheDocument()
  })

  it('renders the Learn More button', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('link', { name: /Learn More/i })).toBeInTheDocument()
  })
})
