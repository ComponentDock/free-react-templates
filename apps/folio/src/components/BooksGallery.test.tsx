import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BooksGallery } from './BooksGallery'

describe('BooksGallery', () => {
  it('renders section heading and book cards', () => {
    render(<BooksGallery />)
    expect(screen.getByText('Our Books')).toBeInTheDocument()
    expect(screen.getByText("Books that I've Written")).toBeInTheDocument()
    // 8 book cards
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(8)
  })

  it('shows category labels for each book', () => {
    render(<BooksGallery />)
    expect(screen.getAllByText('Novels').length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText('Art').length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText('Music').length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText('Web Design').length).toBeGreaterThanOrEqual(2)
  })
})
