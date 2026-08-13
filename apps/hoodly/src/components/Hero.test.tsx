import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'
import { hero } from '../data'

describe('Hero', () => {
  it('renders the big city heading with a dark overlay', () => {
    const { container } = render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: hero.city })).toBeInTheDocument()
    expect(container.querySelector('.bg-black\\/40')).toBeInTheDocument()
    const image = container.querySelector('img')
    expect(image).toHaveAttribute('src', hero.image)
    expect(image).toHaveAttribute('alt', '')
  })

  it('renders the search panel with category and location dropdowns', () => {
    render(<Hero />)
    const category = screen.getByRole('combobox', { name: 'Search Category' })
    expect(category).toHaveDisplayValue(hero.categories[0])
    expect(screen.getByRole('combobox', { name: 'Your Location' })).toHaveDisplayValue('New York')
    expect(screen.getByRole('button', { name: hero.searchLabel })).toBeInTheDocument()
  })

  it('shows a success state after submitting the search', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: hero.searchLabel }))
    expect(screen.getByRole('status')).toHaveTextContent(hero.successMessage)
    expect(screen.queryByRole('combobox', { name: 'Search Category' })).not.toBeInTheDocument()
  })
})
