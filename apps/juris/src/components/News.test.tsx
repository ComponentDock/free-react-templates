import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NEWS } from '../data'
import { News } from './News'

describe('News', () => {
  it('renders the section heading and both news cards', () => {
    render(<News />)
    expect(screen.getByRole('heading', { level: 2, name: 'Recent News' })).toBeInTheDocument()
    for (const item of NEWS) {
      expect(screen.getByText(item.eyebrow)).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument()
      expect(screen.getByText(item.blurb)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(NEWS.length)
  })
})
