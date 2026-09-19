import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CollectionPromo } from './CollectionPromo'

describe('CollectionPromo', () => {
  it('renders the collection promo section', () => {
    render(<CollectionPromo />)
    expect(screen.getByRole('region', { name: /collection promotion/i })).toBeInTheDocument()
  })

  it('displays the heading', () => {
    render(<CollectionPromo />)
    expect(screen.getByText('Our Collection Houses Our First-Ever')).toBeInTheDocument()
  })

  it('displays the limited edition label', () => {
    render(<CollectionPromo />)
    expect(screen.getByText('Limited Edition')).toBeInTheDocument()
  })

  it('renders About Us button', () => {
    render(<CollectionPromo />)
    const link = screen.getByRole('link', { name: /about us/i })
    expect(link).toHaveAttribute('href', '#about')
  })
})
