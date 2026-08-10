import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the asymmetric featured grid with one card per hero post', () => {
    const { container } = render(<Hero />)

    expect(screen.getByRole('region', { name: 'Featured posts' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(5)
    expect(container.querySelectorAll('img')).toHaveLength(5)
  })

  it('shows every headline and date over the card images', () => {
    render(<Hero />)

    expect(
      screen.getAllByRole('link', { name: /The AI magically removes moving objects/ }),
    ).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: /The 20 Biggest Fintech/ })).toHaveLength(2)
    expect(screen.getAllByText('July 19, 2019')).toHaveLength(5)
  })

  it('shows the category pills only on the middle tall card', () => {
    render(<Hero />)

    expect(screen.getByText('Travel')).toBeInTheDocument()
    expect(screen.getByText('Food')).toBeInTheDocument()
    // left and right columns have no category pills
    expect(screen.queryByText('Politics')).not.toBeInTheDocument()
  })

  it('links every card headline to the article', () => {
    render(<Hero />)

    const aiLinks = screen.getAllByRole('link', {
      name: /The AI magically removes moving objects/,
    })
    const fintechLinks = screen.getAllByRole('link', {
      name: /The 20 Biggest Fintech/,
    })
    expect(aiLinks).toHaveLength(3)
    expect(fintechLinks).toHaveLength(2)
  })
})
