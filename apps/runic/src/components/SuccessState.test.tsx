import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SuccessState } from './SuccessState'

describe('SuccessState', () => {
  it('renders completion heading', () => {
    render(<SuccessState />)
    expect(screen.getByText(/onboarding complete/i)).toBeInTheDocument()
  })

  it('renders success message', () => {
    render(<SuccessState />)
    expect(screen.getByText(/account has been set up successfully/i)).toBeInTheDocument()
  })
})
