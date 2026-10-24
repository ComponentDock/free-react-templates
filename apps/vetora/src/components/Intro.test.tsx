import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('shows the three service blocks with icons, titles, and copy', () => {
    render(<Intro />)

    for (const title of ['Veterinary Service', 'Pet Grooming', 'Pet Setting']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(/Far far away, behind the word mountains/)).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Read more' })).toHaveLength(3)
  })
})
