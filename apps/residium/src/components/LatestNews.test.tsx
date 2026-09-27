import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestNews } from './LatestNews'

describe('LatestNews', () => {
  it('renders news cards with read more links', () => {
    render(<LatestNews />)
    expect(screen.getByText(/Our Latest News/)).toBeInTheDocument()

    const readMoreLinks = screen.getAllByText('Read more')
    expect(readMoreLinks).toHaveLength(2)

    expect(screen.getByText(/Footprints in Time/)).toBeInTheDocument()
    expect(screen.getByText(/Modern Living Spaces/)).toBeInTheDocument()
  })
})
