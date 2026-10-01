import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section title', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2, name: /our services/i })).toBeInTheDocument()
  })

  it('renders all six service cards', () => {
    render(<Services />)
    const titles = [
      'Rental Car',
      'Car Repair',
      'Taxi Service',
      'Life Insurance',
      'Car Wash',
      'Call Driver',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(
      screen.getAllByText(
        /transparent repairs|airport runs|every journey|deep-clean|chauffeur|weekend getaways/,
      ),
    ).toHaveLength(6)
  })
})
