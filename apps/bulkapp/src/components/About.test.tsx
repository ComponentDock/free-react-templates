import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

const heading = 'We Believe that Interior beautifies the Total Architecture'

describe('About', () => {
  it('renders two about sections with the shared heading, blurbs, and See Details links', () => {
    render(<About />)

    expect(screen.getAllByRole('heading', { level: 2, name: heading })).toHaveLength(2)

    expect(screen.getByText(/women face higher conduct standards/)).toBeInTheDocument()
    expect(screen.getByText(/one video game lover in your neighbor/)).toBeInTheDocument()

    expect(screen.getAllByRole('link', { name: 'See Details' })).toHaveLength(2)
  })

  it('embeds the product tour video with a play button inside the second section', () => {
    render(<About />)

    expect(screen.getByRole('img', { name: 'BulkApp interior dashboard' })).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'BulkApp product tour video thumbnail' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Play the BulkApp video' })).toHaveAttribute(
      'href',
      '#home',
    )
  })
})
