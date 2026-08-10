import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HighlightSection } from './HighlightSection'
import { highlightHorizontal, highlightVertical, newsletterTitle } from '../data'

describe('HighlightSection', () => {
  it('renders the section title, two vertical posts and three horizontal posts', () => {
    render(<HighlightSection />)
    expect(screen.getByRole('heading', { name: "Today's Highlight" })).toBeInTheDocument()
    for (const post of highlightVertical) {
      expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
    }
    for (const post of highlightHorizontal) {
      expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
    }
  })

  it('includes the sticky newsletter card', () => {
    render(<HighlightSection />)
    expect(screen.getByRole('heading', { name: newsletterTitle })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })
})
