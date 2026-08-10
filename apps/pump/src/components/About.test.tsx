import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('shows the Welcome To Our Gym heading and copy', () => {
    render(<About />)

    expect(screen.getByText('About Pump')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Welcome To Our Gym' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/On her way she met a copy/)).toBeInTheDocument()
  })

  it('lists the gym highlights', () => {
    render(<About />)

    for (const item of [
      'Certified personal trainers',
      'Modern strength & cardio equipment',
      'Flexible membership options',
    ]) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }
  })
})
