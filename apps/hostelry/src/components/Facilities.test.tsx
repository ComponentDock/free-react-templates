import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Facilities } from './Facilities'

describe('Facilities', () => {
  it('shows the heading and six facility cards', () => {
    render(<Facilities />)
    expect(screen.getByRole('heading', { name: 'Royal Facilities', level: 2 })).toBeInTheDocument()
    for (const title of [
      'Restaurant',
      'Sports CLub',
      'Swimming Pool',
      'Rent a Car',
      'Gymnesium',
      'Bar',
    ]) {
      expect(screen.getByRole('heading', { name: title, level: 3 })).toBeInTheDocument()
    }
  })
})
