import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders four service cards with circular icon backgrounds', () => {
    render(<Services />)
    for (const title of [
      'Healthy Lifestyle',
      'Body & Mind Balance',
      'Meditation Practice',
      'Edeology',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    const circles = document.querySelectorAll('.h-25')
    expect(circles.length).toBe(4)
  })
})
