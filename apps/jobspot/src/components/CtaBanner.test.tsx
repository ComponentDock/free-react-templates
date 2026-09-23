import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the heading', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('heading', { name: /Get Started Your New Job/i })).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/Far far away/i)).toBeInTheDocument()
  })

  it('renders the Get Started button', () => {
    render(<CtaBanner />)
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })
})
