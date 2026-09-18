import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Works } from './Works'

describe('Works', () => {
  it('renders "03 Recent Works" subhead', () => {
    render(<Works />)
    expect(screen.getByText('03 Recent Works')).toBeInTheDocument()
  })

  it('renders 8 portfolio items', () => {
    render(<Works />)
    const items = [
      'Brand Refresh',
      'Web Platform',
      'Mobile App',
      'Campaign Design',
      'Product Launch',
      'E-Commerce Site',
      'UI Dashboard',
      'Corporate Identity',
    ]
    for (const title of items) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('renders testimonials section with 3 testimonials', () => {
    render(<Works />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Clients Are Saying/i }),
    ).toBeInTheDocument()
    const authors = ['Sarah Johnson', 'Michael Chen', 'Emily Davis']
    for (const author of authors) {
      expect(screen.getByText(author)).toBeInTheDocument()
    }
  })
})
