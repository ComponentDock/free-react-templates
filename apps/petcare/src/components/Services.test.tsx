import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('shows the heading and the three pet service cards', () => {
    render(<Services />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Best Pet Care Services' }),
    ).toBeInTheDocument()

    for (const title of ['Pet Boarding', 'Pet Treatment', 'Vaccinations']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(3)
  })
})
