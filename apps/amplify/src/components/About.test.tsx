import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'
import { aboutParagraphs } from '../data'

describe('About', () => {
  it('renders a photo with a play-button overlay, heading, paragraphs, and CTA', () => {
    const { container } = render(<About />)
    expect(container.querySelector('img')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Play video' })).toHaveAttribute(
      'href',
      expect.stringContaining('youtube.com'),
    )
    expect(
      screen.getByRole('heading', { level: 2, name: /Agency Team & Digital Marketing/ }),
    ).toBeInTheDocument()
    for (const paragraph of aboutParagraphs) {
      expect(screen.getByText(new RegExp(paragraph.slice(0, 30)))).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Start Exploring' })).toBeInTheDocument()
  })
})
