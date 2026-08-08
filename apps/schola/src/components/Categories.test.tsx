import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders the section heading', () => {
    render(<Categories />)
    expect(screen.getByRole('heading', { name: /Browse by Category/ })).toBeInTheDocument()
  })

  it('shows at least six category cards including the required ones', () => {
    render(<Categories />)
    for (const name of [
      'Software Engineering',
      'Creative Design',
      'Digital Marketing',
      'Data & Analytics',
      'Cloud & DevOps',
      'Cybersecurity',
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })
})
