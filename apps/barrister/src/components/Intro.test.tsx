import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'
import { INTRO } from '../data'

describe('Intro', () => {
  it('renders the promise heading, paragraphs, and signature text', () => {
    const { container } = render(<Intro />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(INTRO.heading)
    for (const paragraph of INTRO.paragraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
    expect(screen.getByText(INTRO.signature)).toHaveClass('italic')
    expect(container.querySelector('.h-\\[160px\\]')).toBeInTheDocument()
  })
})