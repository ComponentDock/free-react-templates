import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Classes } from './Classes'

describe('Classes', () => {
  it('shows the section heading and all ten class cards', () => {
    render(<Classes />)
    expect(screen.getByText('Fitness Class')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Classes' })).toBeInTheDocument()

    const names = [
      'Power Lifting',
      'HIIT Circuit',
      'Spin Cycling',
      'Boxing Basics',
      'Core Strength',
      'Zumba Dance',
      'CrossFit WOD',
      'Pilates Flow',
      'Kickboxing',
      'Yoga Stretch',
    ]
    for (const name of names) {
      const card = screen.getByRole('heading', { name }).closest('article')
      expect(card).toBeInTheDocument()
      expect(card!.textContent).toMatch(/By /)
      expect(card!.textContent).toMatch(/30 minutes/)
    }
  })
})
