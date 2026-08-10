import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { IntroTeasers } from './IntroTeasers'
import { introTeasers } from '../data'

describe('IntroTeasers', () => {
  it('renders three teaser cards with meta, headline, excerpt and read-more', () => {
    render(<IntroTeasers />)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(introTeasers.length)
    for (const teaser of introTeasers) {
      expect(screen.getByRole('heading', { name: teaser.title })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: teaser.category })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: /Read More/ })).toHaveLength(introTeasers.length)
  })
})
