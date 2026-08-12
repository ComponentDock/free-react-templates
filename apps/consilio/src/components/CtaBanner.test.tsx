import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CtaBanner } from './CtaBanner'

describe('CtaBanner', () => {
  it('shows the heading and both buttons', () => {
    render(<CtaBanner />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Ready to Transform Your Business?' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Free Consultation' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View Our Services' })).toBeInTheDocument()
  })
})
