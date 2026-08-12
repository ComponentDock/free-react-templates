import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LearnerOutcomes } from './LearnerOutcomes'

describe('LearnerOutcomes', () => {
  it('renders the heading, three bullet rows, and an image', () => {
    render(<LearnerOutcomes />)

    expect(
      screen.getByRole('heading', { name: 'Learner outcomes on courses you will take' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
    expect(screen.getByRole('img', { name: /learner outcomes/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
