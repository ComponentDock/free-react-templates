import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { introCards } from '../data'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders all six intro cards with titles and subtitles', () => {
    const { container } = render(<Intro />)
    expect(introCards).toHaveLength(6)
    for (const card of introCards) {
      expect(screen.getByRole('heading', { level: 2, name: card.title })).toBeInTheDocument()
    }
    expect(screen.getAllByText('Donec quis metus ac arcu luctus accumsan.')).toHaveLength(6)
    expect(container.querySelectorAll('img')).toHaveLength(6)
  })
})
