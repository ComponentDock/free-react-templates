import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the heading', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Your Dream Job is Waiting')
  })

  it('renders the description text', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/Join thousands of job seekers/)).toBeDefined()
  })

  it('renders the browse jobs button', () => {
    render(<CtaBanner />)
    expect(screen.getByText('Browse Jobs')).toBeDefined()
  })
})
