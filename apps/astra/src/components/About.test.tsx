import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders "01 Who We Are" subhead', () => {
    render(<About />)
    expect(screen.getByText('01 Who We Are')).toBeInTheDocument()
  })

  it('renders heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: /branding agency/i })).toBeInTheDocument()
  })

  it('renders 4 process cards', () => {
    render(<About />)
    const cards = ['Planning', 'Branding', 'Implementation', 'Documentation']
    for (const title of cards) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
