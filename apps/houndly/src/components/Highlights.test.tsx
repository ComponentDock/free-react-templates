import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Highlights } from './Highlights'

const features = [
  'Officia quaerat eaque neque',
  'Possimus aut consequuntur incidunt',
  'Lorem ipsum dolor sit amet',
  'Consectetur adipisicing elit',
  'Dolorum esse odio quas architecto sint',
] as const

describe('Highlights', () => {
  it('shows the two highlight columns with feature checklists and images', () => {
    const { container } = render(<Highlights />)

    expect(screen.getByRole('heading', { name: 'Happy Pets' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Modern Equipment' })).toBeInTheDocument()
    for (const feature of features) {
      expect(screen.getAllByText(feature)).toHaveLength(2)
    }
    expect(container.querySelectorAll('img')).toHaveLength(3)
  })

  it('shows the vet intro block', () => {
    render(<Highlights />)

    expect(
      screen.getByRole('heading', { name: 'Meet Jean Smith Our Dog Veterenarian' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/A small river named Duden flows/)).toBeInTheDocument()
  })
})
