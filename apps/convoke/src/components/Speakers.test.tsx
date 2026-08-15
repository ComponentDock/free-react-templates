import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Speakers } from './Speakers'
import { speakers } from '../data'

describe('Speakers', () => {
  it('renders the heading and four speaker cards with names and roles', () => {
    const { container } = render(<Speakers />)
    expect(screen.getByRole('heading', { name: 'Speakers' })).toBeInTheDocument()
    for (const s of speakers) {
      expect(screen.getByText(s.name)).toBeInTheDocument()
      expect(screen.getByText(s.role)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('img')).toHaveLength(speakers.length)
  })

  it('renders hover social overlays on each card', () => {
    const { container } = render(<Speakers />)
    const overlays = container.querySelectorAll('[data-social-overlay]')
    expect(overlays).toHaveLength(speakers.length)
    expect(container.querySelectorAll('svg')).toHaveLength(speakers.length * 4)
  })
})
