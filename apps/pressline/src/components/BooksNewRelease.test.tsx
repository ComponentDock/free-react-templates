import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BooksNewRelease } from './BooksNewRelease'

describe('BooksNewRelease', () => {
  it('renders section heading', () => {
    render(<BooksNewRelease />)
    expect(screen.getByText('Books New Release')).toBeInTheDocument()
  })

  it('renders all book cards with titles and authors', () => {
    render(<BooksNewRelease />)
    expect(screen.getByText('You Are Your Only Limit')).toBeInTheDocument()
    expect(screen.getByText('101 Essays That Will Change Your Mind')).toBeInTheDocument()
    expect(screen.getByText('Your Soul Is A River')).toBeInTheDocument()
    expect(screen.getByText('All The Letters I Should Have Sent')).toBeInTheDocument()
    expect(screen.getByText('Happy')).toBeInTheDocument()
  })

  it('displays sale prices and regular prices', () => {
    render(<BooksNewRelease />)
    // Sale price for first book
    expect(screen.getByText('$8.00')).toBeInTheDocument()
    // Regular prices
    const twelveDollar = screen.getAllByText('$12.00')
    expect(twelveDollar.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('$9.00')).toBeInTheDocument()
    expect(screen.getByText('$10.00')).toBeInTheDocument()
  })

  it('displays star ratings', () => {
    render(<BooksNewRelease />)
    expect(screen.getAllByLabelText('4 out of 5 stars')[0]).toBeInTheDocument()
    expect(screen.getAllByLabelText('5 out of 5 stars')[0]).toBeInTheDocument()
    expect(screen.getAllByLabelText('3 out of 5 stars')[0]).toBeInTheDocument()
  })
})
