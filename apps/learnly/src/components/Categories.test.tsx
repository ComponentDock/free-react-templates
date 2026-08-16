import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Categories } from './Categories'
import { categories, sectionHeadings } from '../data'

describe('Categories', () => {
  it('renders the Browse Our Online Courses heading block', () => {
    render(<Categories />)

    expect(screen.getByText(sectionHeadings.categoriesSub)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: sectionHeadings.categoriesTitle }),
    ).toBeInTheDocument()
  })

  it('renders twelve category cards with titles and counts', () => {
    const { container } = render(<Categories />)

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(categories.length)
    for (const category of categories) {
      expect(screen.getByRole('heading', { level: 3, name: category.title })).toBeInTheDocument()
    }
    expect(container.querySelectorAll('[data-category-count]')).toHaveLength(categories.length)
  })

  it('marks Art & Design as the active card', () => {
    const { container } = render(<Categories />)

    const active = container.querySelector('[data-category-active]')
    expect(active).not.toBeNull()
    expect(active!.textContent).toContain('Art & Design')
  })
})
