import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SuccessStory } from './SuccessStory'

describe('SuccessStory', () => {
  it('renders the eyebrow, headline and raised total', () => {
    render(<SuccessStory />)
    expect(screen.getByText('Success Stories')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Clean Water Reaches South East Asia' }),
    ).toBeInTheDocument()
    expect(screen.getByText('We have raised $100,000')).toBeInTheDocument()
    expect(screen.getByText(/a third fewer waterborne cases/i)).toBeInTheDocument()
  })

  it('renders the full-story link', () => {
    render(<SuccessStory />)
    expect(screen.getByRole('link', { name: 'Read The Full Story' })).toHaveAttribute(
      'href',
      '#news',
    )
  })
})
