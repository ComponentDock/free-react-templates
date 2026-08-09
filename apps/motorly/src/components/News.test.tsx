import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { News } from './News'

describe('News', () => {
  it('renders the section title and three post cards with continue reading links', () => {
    render(<News />)
    expect(screen.getByRole('heading', { name: /Latest News/i })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: /Benjamin Franlin Method/i })).toHaveLength(3)
    expect(screen.getAllByText(/By Brian Gardner on April 1, 2017/i)).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: /Continue Reading/i })).toHaveLength(3)
  })
})
