import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { level: 2, name: 'Services' })).toBeInTheDocument()
  })

  it('renders six service cards with Read More links', () => {
    render(<Services />)

    for (const title of [
      'Plans and Projects',
      'Conceptual Architecture',
      'Apartment Buildings',
      'Skyscrapers Buildings',
      'Documentation',
      'Restauration Projects',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(6)
  })
})
