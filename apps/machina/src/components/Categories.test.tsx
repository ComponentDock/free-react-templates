import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'
import { CATEGORIES, CATEGORIES_EYEBROW, CATEGORIES_TITLE } from '../data'

describe('Categories', () => {
  it('renders the eyebrow, heading, and four category cards', () => {
    render(<Categories />)
    expect(screen.getByText(CATEGORIES_EYEBROW)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(CATEGORIES_TITLE)
    CATEGORIES.forEach((category) => {
      expect(screen.getByRole('heading', { name: category.title })).toBeInTheDocument()
      expect(screen.getByText(category.text)).toBeInTheDocument()
    })
  })
})
