import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Parallax } from './Parallax'

describe('Parallax', () => {
  it('renders both image tiles with titles and captions', () => {
    render(<Parallax />)
    expect(screen.getByRole('heading', { name: 'Peak Collection' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Night Market' })).toBeInTheDocument()
    expect(screen.getByText(/Outerwear built for the mountains/i)).toBeInTheDocument()
    expect(screen.getByText(/Evening looks with texture/i)).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(2)
  })
})
