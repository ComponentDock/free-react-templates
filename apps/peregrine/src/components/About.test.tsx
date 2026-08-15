import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { aboutImage, aboutText, aboutTitle, counters } from '../data'
import { About } from './About'

describe('About', () => {
  it('renders the photo, heading, paragraph, and four counter boxes', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: aboutTitle })).toBeInTheDocument()
    expect(screen.getByText(aboutText)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /travelers planning/i })).toHaveAttribute(
      'src',
      aboutImage,
    )

    for (const counter of counters) {
      expect(screen.getByText(counter.number)).toBeInTheDocument()
      expect(screen.getByText(counter.label)).toBeInTheDocument()
    }
    expect(screen.getAllByText('30')).toHaveLength(1)
  })
})
