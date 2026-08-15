import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GradientStrip } from './GradientStrip'
import { gradientStripHeading } from '../data'

describe('GradientStrip', () => {
  it('renders the white headline on the gradient band', () => {
    render(<GradientStrip />)
    expect(
      screen.getByRole('heading', { level: 3, name: gradientStripHeading }),
    ).toBeInTheDocument()
  })
})
