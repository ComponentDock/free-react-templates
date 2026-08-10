import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Coaches } from './Coaches'

describe('Coaches', () => {
  it('shows the Our Coaches heading', () => {
    render(<Coaches />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Coaches' })).toBeInTheDocument()
  })

  it('renders the four coach cards', () => {
    render(<Coaches />)

    for (const name of ['Mark Brook', 'Sarah Henderson', 'George Hump', 'Victor Hump']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }
    expect(screen.getByText('Owner / Head Coach')).toBeInTheDocument()
  })
})
