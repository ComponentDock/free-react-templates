import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Speakers } from './Speakers'

describe('Speakers', () => {
  it('renders the section title and four speaker cards with names, roles and photos', () => {
    const { container } = render(<Speakers />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Meet Head Speakers' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Ethel Davis' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Maya Robbins' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Jessica Moore' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Amelia Hart' })).toBeInTheDocument()
    expect(screen.getByText('Managing Director (Sales)')).toBeInTheDocument()

    const photos = container.querySelectorAll('img')
    expect(photos).toHaveLength(4)
    expect(photos[0]).toHaveAttribute('src', expect.stringContaining('picsum.photos/id/1027'))

    // Hover social bar: three brand icons per card.
    expect(screen.getAllByRole('link', { name: 'Facebook' })).toHaveLength(4)
    expect(screen.getAllByRole('link', { name: 'Twitter' })).toHaveLength(4)
    expect(screen.getAllByRole('link', { name: 'LinkedIn' })).toHaveLength(4)
  })
})
