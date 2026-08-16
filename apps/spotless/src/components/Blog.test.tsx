import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'
import { describe, expect, it } from 'vitest'

const expectedTitles = [
  'Seasonal Deep Cleaning Checklist for Every Home',
  '5 Eco-Friendly Products That Actually Work',
  'How Often Should You Clean Your Office?',
]

describe('Blog', () => {
  it('renders the section title, View all link, and three news cards', () => {
    render(<Blog />)
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'News And Tricks' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View all/ })).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)
    for (const title of expectedTitles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('shows date, category, and views/comments meta on every card', () => {
    render(<Blog />)
    expect(screen.getAllByText(/25 Views/)).toHaveLength(3)
    expect(screen.getAllByText(/02 Comments/)).toHaveLength(3)
    expect(screen.getByText('Feb 28, 2020')).toBeInTheDocument()
    expect(screen.getByText('Cleaning Tips')).toBeInTheDocument()
    expect(screen.getByText('Eco Living')).toBeInTheDocument()
    expect(screen.getByText('Office Care')).toBeInTheDocument()
  })
})
