import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Therapies } from './Therapies'

describe('Therapies', () => {
  it('shows the Spa Therapies and Massage Therapies headings', () => {
    render(<Therapies />)
    expect(screen.getByText('Spa Therapies')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Massage Therapies' })).toBeInTheDocument()
  })

  it('renders the four therapy cards', () => {
    render(<Therapies />)
    for (const title of ['Relaxation', 'Athlete', 'Thai', 'Rose']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})
