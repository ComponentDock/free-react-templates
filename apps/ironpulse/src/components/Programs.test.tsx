import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Programs } from './Programs'

describe('Programs', () => {
  it('renders all 5 program items', () => {
    render(<Programs />)
    for (const name of [
      'Crossfit',
      'Aerobic Classes',
      'Fitness',
      'Yoga Classes',
      'Cardio Training',
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders the program image', () => {
    render(<Programs />)
    expect(screen.getByAltText('Training programs')).toBeInTheDocument()
  })
})
