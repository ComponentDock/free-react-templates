import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CaseStudy } from './CaseStudy'
import { caseStudies } from '../data'

describe('CaseStudy', () => {
  it('renders the section header and three tagged case cards', () => {
    const { container } = render(<CaseStudy />)
    const section = screen.getByRole('region', { name: 'Our Case Study' })
    expect(
      within(section).getByRole('heading', { level: 2, name: 'We work with global brands' }),
    ).toBeInTheDocument()

    const cards = within(section).getAllByRole('article')
    expect(cards).toHaveLength(caseStudies.length)
    cards.forEach((card, idx) => {
      const item = caseStudies[idx]!
      expect(within(card).getByText(item.tag)).toBeInTheDocument()
      expect(within(card).getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument()
      expect(card).toHaveTextContent(item.blurb)
      expect(within(card).getByRole('link', { name: 'Learn More' })).toHaveAttribute(
        'href',
        '#contact',
      )
      expect(card.querySelector('img')).toHaveAttribute('src', item.image)
    })
    expect(container.querySelectorAll('img').length).toBe(caseStudies.length)
  })
})
