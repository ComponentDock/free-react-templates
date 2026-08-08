import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Programs } from './Programs'

describe('Programs', () => {
  it('renders the heading and all six program cards', () => {
    render(<Programs />)

    expect(
      screen.getByRole('heading', { name: 'Training Programs for Every Goal' }),
    ).toBeInTheDocument()

    for (const title of [
      'Strength Training',
      'HIIT',
      'Yoga & Flexibility',
      'Boxing & MMA',
      'CrossFit',
      'Personal Training',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
