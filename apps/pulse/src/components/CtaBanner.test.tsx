import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the subtitle', () => {
    render(<CtaBanner />)
    expect(screen.getByText('Prepare For Takeoff')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<CtaBanner />)
    expect(
      screen.getByRole('heading', { name: /Looking for business opportunity/i }),
    ).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<CtaBanner />)
    expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/Let's collaborate and take your business/i)).toBeInTheDocument()
  })
})
