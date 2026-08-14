import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CoachesSection } from './CoachesSection'
import { COACHES } from '../data'

describe('CoachesSection', () => {
  it('renders the heading and four coach cards with names and positions', () => {
    const { container } = render(<CoachesSection />)

    expect(screen.getByRole('heading', { name: 'Our Coaches' })).toBeInTheDocument()
    for (const coach of COACHES) {
      expect(screen.getByRole('heading', { name: coach.name })).toBeInTheDocument()
      expect(screen.getByText(coach.position)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('img')).toHaveLength(COACHES.length)
  })
})
