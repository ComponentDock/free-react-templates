import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Trainers } from './Trainers'

describe('Trainers', () => {
  it('shows the section heading and four trainer cards with position and bio', () => {
    render(<Trainers />)
    expect(screen.getAllByText('Trainer').length).toBeGreaterThanOrEqual(5)
    expect(screen.getByRole('heading', { name: 'Our Trainers' })).toBeInTheDocument()

    const names = ['Justin Daniel', 'Matthew Davidson', 'Anna Stevens', 'Sofia Lopez']
    for (const name of names) {
      const card = screen.getByRole('heading', { name }).closest('article')
      expect(card).toBeInTheDocument()
      expect(card!.textContent).toContain('Trainer')
      expect(card!.querySelector('img')).toHaveAttribute('alt', name)
    }
  })
})
