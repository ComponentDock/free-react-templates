import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SelectPet } from './SelectPet'

describe('SelectPet', () => {
  it('renders the prompt heading and the adoption-form button', () => {
    render(<SelectPet />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(
      'Please select your favourite pet',
    )
    expect(screen.getByRole('button', { name: 'Fill Adoption Form' })).toBeInTheDocument()
  })
})
