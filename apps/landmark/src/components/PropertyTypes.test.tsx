import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PropertyTypes } from './PropertyTypes'
import { PROPERTY_TYPES } from '../data'

describe('PropertyTypes', () => {
  it('renders the heading, paragraph, View All Property button and category cards', () => {
    render(<PropertyTypes />)

    expect(screen.getByRole('heading', { name: /Explore/ })).toBeInTheDocument()
    expect(screen.getByText(/Browse our catalogue/)).toBeInTheDocument()

    const button = screen.getByRole('link', { name: 'View All Property' })
    expect(button).toHaveAttribute('href', '#properties')

    for (const category of PROPERTY_TYPES) {
      expect(screen.getByRole('heading', { name: category.title })).toBeInTheDocument()
    }

    const section = screen.getByText(/Browse our catalogue/).closest('section')!
    expect(section.className).toContain('bg-light')
  })

  it('falls back to a default icon for unknown category icon keys', () => {
    render(<PropertyTypes categories={[...PROPERTY_TYPES, { icon: 'odd', title: 'Penthouse' }]} />)
    expect(screen.getByRole('heading', { name: 'Penthouse' })).toBeInTheDocument()
  })
})
