import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Classes } from './Classes'
import { classItems, classesTitle, classesSubtitle } from '../data'

describe('Classes', () => {
  it('renders the heading and subtitle', () => {
    render(<Classes />)
    expect(screen.getByRole('heading', { level: 2, name: classesTitle })).toBeInTheDocument()
    expect(screen.getAllByText(classesSubtitle).length).toBeGreaterThan(0)
  })

  it('renders all three class cards with Learn More links', () => {
    render(<Classes />)
    for (const item of classItems) {
      expect(screen.getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument()
      expect(screen.getAllByText(item.description).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByText('Learn More').length).toBe(classItems.length)
  })
})
