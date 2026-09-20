import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CTACover } from './CTACover'

describe('CTACover', () => {
  it('renders the heading', () => {
    render(<CTACover />)
    expect(screen.getByText(/Sign Up And Get a 7-day Free Trial/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<CTACover />)
    expect(screen.getByText('Sign Up Now')).toBeInTheDocument()
  })

  it('has a section landmark', () => {
    render(<CTACover />)
    expect(screen.getByRole('region')).toBeInTheDocument()
  })
})
