import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogRow } from './BlogRow'

describe('BlogRow', () => {
  it('renders the section header and three post cards', () => {
    render(<BlogRow />)

    expect(screen.getByText("We're Offering these Trip Packages")).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Latest Posts from Blog' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(3)
  })

  it('shows the date and like meta, the serif title link and the excerpt', () => {
    render(<BlogRow />)

    expect(screen.getByText('13th Dec')).toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('27th Jan')).toBeInTheDocument()

    const titleLinks = screen.getAllByRole('link', {
      name: 'Cruise Private Party Booking Available Now',
    })
    expect(titleLinks).toHaveLength(6)
    expect(titleLinks[0]).toHaveAttribute('href', '#blog')

    expect(screen.getAllByText(/private charter feeling small/)).toHaveLength(3)

    expect(screen.getAllByRole('img')[0]).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/outpost-blog-1/600/400',
    )
  })
})
