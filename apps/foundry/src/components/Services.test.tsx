import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and all six services', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { name: /We Offer Services/ })).toBeInTheDocument()
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(6)
    const titles = [
      'General Constructing',
      'Building Modeling',
      'Design Build',
      'Construction Services',
      'Pre-Construction Design',
      'Construction Management',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
