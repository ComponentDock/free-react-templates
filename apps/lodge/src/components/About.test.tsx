import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { aboutParagraphs, aboutQuote, aboutSectionLabel } from '../data'

describe('About', () => {
  it('renders the serif quote banner above two columns of copy', () => {
    render(<About />)
    expect(screen.getByRole('region', { name: aboutSectionLabel })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(aboutQuote)
    for (const paragraph of aboutParagraphs) {
      expect(screen.getByText(paragraph)).toBeInTheDocument()
    }
  })
})
