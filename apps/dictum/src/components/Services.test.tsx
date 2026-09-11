import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section subtitle and heading', () => {
    render(<Services />)
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders all six service cards', () => {
    render(<Services />)
    const titles = [
      'Business Consulting',
      'Market Analysis',
      'User Monitoring',
      'Insurance Consulting',
      'Financial Investment',
      'Financial Management',
    ]
    for (const title of titles) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText(/Separated they live in Bookmarksgrove/)).toBeInTheDocument()
  })
})
