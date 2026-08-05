import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Achievements } from './Achievements'

describe('Achievements', () => {
  it('renders the heading and three metrics', () => {
    render(<Achievements />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Achievements' })).toBeInTheDocument()

    for (const metric of ['0 M+', '0 K+', '0 K+']) {
      expect(screen.getAllByText(metric).length).toBeGreaterThan(0)
    }

    for (const label of ['Members', 'Likes', 'Share']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
