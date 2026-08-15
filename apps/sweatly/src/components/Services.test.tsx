import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('shows the section heading and all twelve service cards', () => {
    render(<Services />)
    expect(screen.getByText('Fitness Services')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()

    const titles = [
      'Strength Training',
      'Indoor Cycling',
      'Cardio Programs',
      'Nutrition Plans',
      'Personal Training',
      'Fat Burn Classes',
      'Kids Fitness',
      'Competition Prep',
      'Meal Prep',
      'Interval Training',
      'Injury Prevention',
      'Group Classes',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
