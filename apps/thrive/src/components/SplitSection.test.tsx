import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SplitSection } from './SplitSection'

describe('SplitSection', () => {
  it('renders the heading', () => {
    render(<SplitSection />)
    expect(screen.getByText('A better way to run your business')).toBeInTheDocument()
  })

  it('renders 3 checkmark items', () => {
    render(<SplitSection />)
    expect(screen.getByText('Far far away, behind the word mountains')).toBeInTheDocument()
    expect(screen.getByText('Far from the countries Vokalia')).toBeInTheDocument()
    expect(screen.getByText('Separated they live in Bookmarksgrove')).toBeInTheDocument()
  })

  it('renders the Get started button', () => {
    render(<SplitSection />)
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument()
  })

  it('renders the illustration', () => {
    render(<SplitSection />)
    expect(screen.getByAltText('Business split illustration')).toBeInTheDocument()
  })
})
