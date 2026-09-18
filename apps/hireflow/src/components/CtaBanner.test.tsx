import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('renders the CTA headline', () => {
    render(<CtaBanner />)
    expect(screen.getByText('Join us today without any hesitation')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<CtaBanner />)
    expect(screen.getByText(/Find your dream job/)).toBeInTheDocument()
  })

  it('renders both CTA buttons', () => {
    render(<CtaBanner />)
    expect(screen.getByText('I am a Candidate')).toBeInTheDocument()
    expect(screen.getByText('Request Free Demo')).toBeInTheDocument()
  })
})
