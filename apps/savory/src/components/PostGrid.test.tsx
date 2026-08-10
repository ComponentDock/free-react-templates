import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PostGrid } from './PostGrid'

describe('PostGrid', () => {
  it('renders a grid of small post cards with thumbnail, tag, title and meta', () => {
    render(<PostGrid />)

    expect(screen.getAllByRole('article')).toHaveLength(9)
    expect(screen.getByText('Mushrooms with pork chop')).toBeInTheDocument()
    expect(screen.getByText('Avocado toast with egg')).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(9)
  })
})
