import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CaseStudy } from './CaseStudy'
import { caseStudy } from '../data'

describe('CaseStudy', () => {
  it('shows the centered heading and four overlay cards', () => {
    render(<CaseStudy />)

    expect(screen.getByText(caseStudy.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: caseStudy.heading })).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(4)
    for (const card of cards) {
      expect(card.querySelector('img')).toHaveAttribute(
        'src',
        expect.stringContaining('picsum.photos/id/'),
      )
      expect(card.querySelector('[class*="from-black/70"]')).toBeInTheDocument()
      expect(screen.getAllByText(caseStudy.tag)).toHaveLength(4)
      expect(screen.getAllByRole('heading', { level: 3, name: caseStudy.title })).toHaveLength(4)
    }
  })
})
