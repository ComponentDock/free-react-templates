import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaBand } from './CtaBand'

describe('CtaBand', () => {
  it('shows the heading, browse button and note', () => {
    render(<CtaBand />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Ready to Start Learning?' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Browse Courses/ })).toHaveAttribute('href', '#courses')
    expect(screen.getByText(/No credit card required. 7-day free Pro trial/)).toBeInTheDocument()
  })
})
