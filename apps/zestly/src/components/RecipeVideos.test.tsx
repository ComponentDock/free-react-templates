import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RecipeVideos } from './RecipeVideos'

describe('RecipeVideos', () => {
  it('renders heading, description, and play button', () => {
    render(<RecipeVideos />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/Recipe videos/)
    expect(screen.getByText(/step-by-step cooking videos/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Watch Video' })).toBeInTheDocument()
    expect(screen.getByText('Watch Video')).toBeInTheDocument()
    expect(screen.getByText('You will love our execution')).toBeInTheDocument()
  })
})
