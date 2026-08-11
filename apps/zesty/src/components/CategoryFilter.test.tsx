import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CategoryFilter } from './CategoryFilter'
import { categoryCards, categoryPills } from '../data'

describe('CategoryFilter', () => {
  it('renders four filter pills with Vegetarian active and five cards', () => {
    const { container } = render(<CategoryFilter />)
    for (const pill of categoryPills) {
      expect(screen.getByRole('button', { name: pill.label })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Vegetarian' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Meat Lover' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
    for (const card of categoryCards) {
      expect(screen.getByRole('heading', { level: 5, name: card.title })).toBeInTheDocument()
    }
    expect(container.querySelectorAll('img')).toHaveLength(5)
  })

  it('filters the grid when a pill is activated and restores it on Vegetarian', async () => {
    const user = userEvent.setup()
    render(<CategoryFilter />)

    await user.click(screen.getByRole('button', { name: 'Meat Lover' }))
    expect(screen.getByRole('button', { name: 'Meat Lover' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(
      screen.getByRole('heading', { level: 5, name: categoryCards[1]!.title }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 5, name: categoryCards[3]!.title }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { level: 5, name: categoryCards[0]!.title }),
    ).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Vegetarian' }))
    for (const card of categoryCards) {
      expect(screen.getByRole('heading', { level: 5, name: card.title })).toBeInTheDocument()
    }
  })

  it('shows only the most popular card on the Most popular pill', async () => {
    const user = userEvent.setup()
    render(<CategoryFilter />)

    await user.click(screen.getByRole('button', { name: 'Most popular' }))
    expect(
      screen.getByRole('heading', { level: 5, name: categoryCards[0]!.title }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { level: 5, name: categoryCards[1]!.title }),
    ).not.toBeInTheDocument()
  })

  it('shows only gluten-free cards on the Gluten Free pill', async () => {
    const user = userEvent.setup()
    render(<CategoryFilter />)

    await user.click(screen.getByRole('button', { name: 'Gluten Free' }))
    expect(
      screen.getByRole('heading', { level: 5, name: categoryCards[2]!.title }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 5, name: categoryCards[4]!.title }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { level: 5, name: categoryCards[0]!.title }),
    ).not.toBeInTheDocument()
  })
})
