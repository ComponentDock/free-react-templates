import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders headline and Contact Us button', () => {
    render(<CtaBanner />)
    expect(screen.getByText('Small Business Insurance Company')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })
})
