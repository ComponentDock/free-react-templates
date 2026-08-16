import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { aboutPoints } from '../data'

describe('About', () => {
  it('renders the eyebrow and the section heading', () => {
    render(<About />)
    expect(screen.getByText('Information About Us')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Kinesis A Crossfit/ }),
    ).toBeInTheDocument()
  })

  it('renders a photo and the three training list items', () => {
    render(<About />)
    expect(screen.getByAltText('Athlete training at the Kinesis studio')).toBeInTheDocument()
    for (const point of aboutPoints) {
      expect(screen.getByText(point.label)).toBeInTheDocument()
    }
  })
})
