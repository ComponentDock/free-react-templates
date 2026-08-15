import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Classes } from './Classes'
import { classCards, classesEyebrow, classesLead, classesTitle } from '../data'

describe('Classes', () => {
  it('renders the eyebrow, heading, intro paragraph, and five class cards', () => {
    const { container } = render(<Classes />)
    expect(screen.getByText(classesEyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(classesTitle)
    expect(screen.getByText(classesLead)).toBeInTheDocument()
    for (const card of classCards) {
      expect(screen.getByRole('heading', { level: 3, name: card.title })).toBeInTheDocument()
    }
    expect(screen.getAllByText('By Ava Martinez').length).toBe(classCards.length)
    expect(screen.getAllByText('30 minutes').length).toBe(classCards.length)
    expect(container.querySelectorAll('img').length).toBe(classCards.length)
  })
})
