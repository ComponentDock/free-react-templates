import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Classes } from './Classes'
import { classItems } from '../data'

describe('Classes', () => {
  it('renders the eyebrow, heading and six class cards', () => {
    render(<Classes />)
    expect(screen.getByText('Our Classes')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Kinesis Workout Classes/ }),
    ).toBeInTheDocument()
    for (const item of classItems) {
      expect(screen.getByRole('heading', { level: 3, name: item.title })).toBeInTheDocument()
      expect(screen.getByAltText(`${item.title} class`)).toBeInTheDocument()
    }
  })

  it('shows a price badge on every card and a view-all link', () => {
    render(<Classes />)
    expect(screen.getAllByText('$100')).toHaveLength(classItems.length)
    expect(screen.getByRole('link', { name: 'View All Classes' })).toBeInTheDocument()
  })
})
