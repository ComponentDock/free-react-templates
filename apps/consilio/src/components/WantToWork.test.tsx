import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WantToWork } from './WantToWork'

describe('WantToWork', () => {
  it('shows the heading and the More About Us button', () => {
    render(<WantToWork />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Are you Searching For a First-Class Consultant?',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'More About Us' })).toBeInTheDocument()
  })
})
