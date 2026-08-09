import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EditorialList } from './EditorialList'

describe('EditorialList', () => {
  it('renders eleven alternating article rows with read-more pills', () => {
    render(<EditorialList />)

    expect(screen.getAllByRole('article')).toHaveLength(11)
    expect(screen.getAllByRole('link', { name: /Read more/i })).toHaveLength(11)
  })

  it('shows the author chip, headline, excerpt, and pill button on each row', () => {
    render(<EditorialList />)

    expect(screen.getAllByText('Jamie Jonson')).toHaveLength(11)
    expect(screen.getAllByText('fashion.com')).toHaveLength(11)

    const firstRow = screen.getByRole('heading', {
      name: 'Make Peace With Your Broken Pieces',
    })
    expect(firstRow).toBeInTheDocument()
    expect(screen.getByText(/beauty of imperfection/i)).toBeInTheDocument()
  })

  it('shows a circular avatar and blue-gray pill button in the first row', () => {
    render(<EditorialList />)

    const readMore = screen.getAllByRole('link', { name: /Read more/i })[0]
    expect(readMore).toHaveClass('rounded-full')
    expect(readMore).toHaveClass('bg-primary-500')

    const avatar = document.querySelector('img[src*="pulp-avatar-1"]')
    expect(avatar).toHaveClass('rounded-full')
  })

  it('inverts the third and tenth rows onto a dark band with the image as a circle on the right', () => {
    render(<EditorialList />)

    const darkTitles = ['Why Print Is Making a Bold Comeback', 'How to Build a Capsule Wardrobe']
    for (const title of darkTitles) {
      const heading = screen.getByRole('heading', { name: title })
      const row = heading.closest('article')
      expect(row).toHaveClass('bg-night')
      expect(heading).toHaveClass('text-white')
    }

    const printImage = document.querySelector('img[src*="pulp-article-3"]')!
    expect(printImage).toHaveClass('rounded-full')
    expect(printImage.parentElement).toHaveClass('md:order-last')
  })

  it('keeps the light rows on a white background', () => {
    render(<EditorialList />)

    const heading = screen.getByRole('heading', { name: 'The Quiet Power of a Well-Dressed Man' })
    expect(heading.closest('article')).toHaveClass('bg-white')
  })
})
