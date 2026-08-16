import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'
import { features } from '../data'

describe('Features', () => {
  it('renders the section label, heading, and intro copy', () => {
    render(<Features />)

    expect(screen.getByText(features.pill)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: features.heading })).toBeInTheDocument()
    expect(screen.getByText(features.subline)).toBeInTheDocument()
  })

  it('renders a card with an icon, title, and description for every feature', () => {
    render(<Features />)

    for (const item of features.items) {
      expect(screen.getByRole('heading', { name: item.title })).toBeInTheDocument()
      expect(screen.getAllByText(item.description).length).toBeGreaterThan(0)
    }

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)
  })
})
