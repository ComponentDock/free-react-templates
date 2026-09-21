import { render, screen } from '@testing-library/react'
import { Programs } from './Programs'
import { describe, expect, it } from 'vitest'

describe('Programs', () => {
  it('renders heading, CTA, and all 5 program items', () => {
    render(<Programs />)
    expect(screen.getByText('Fitness Programs')).toBeInTheDocument()
    expect(screen.getByText('View Full Programs')).toBeInTheDocument()
    for (const name of [
      'Body Building',
      'Aerobic Classes',
      'Weight Lifting',
      'Yoga Classes',
      'Cardio Training',
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })
})
