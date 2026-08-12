import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sermons } from './Sermons'
import { sermons } from '../data'

describe('Sermons', () => {
  it('renders the section heading and three sermon cards with meta and links', () => {
    render(<Sermons />)

    expect(screen.getByRole('heading', { name: 'Sermons This Week' })).toBeInTheDocument()

    for (const sermon of sermons) {
      expect(screen.getByRole('heading', { name: sermon.title })).toBeInTheDocument()
    }
    // "Pastor James · May 2018" appears on two cards — count, don't single-match.
    expect(screen.getAllByText('Pastor James · May 2018')).toHaveLength(2)
    expect(screen.getAllByText('Pastor Sarah · May 2018')).toHaveLength(1)
    expect(screen.getAllByRole('link', { name: 'View More Details' })).toHaveLength(3)
  })
})
