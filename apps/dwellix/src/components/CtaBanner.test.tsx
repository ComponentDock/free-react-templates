import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the heading', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/Download app & join now!/)).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/Download and sign up to receive/)).toBeInTheDocument()
  })

  it('renders app store buttons', () => {
    render(<CtaBanner />)
    expect(screen.getByText('App Store')).toBeInTheDocument()
    expect(screen.getByText('Google Play')).toBeInTheDocument()
  })
})
