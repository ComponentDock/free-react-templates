import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ColorButtons } from './ColorButtons'

describe('ColorButtons', () => {
  it('renders all 18 color variant buttons', () => {
    render(<ColorButtons />)

    const colors = [
      'Primary',
      'Secondary',
      'Success',
      'Info',
      'Warning',
      'Danger',
      'Light',
      'Orange',
      'Indigo',
      'Pink',
      'Deep Orange',
      'Aqua',
      'Dark',
      'Black',
      'Purple',
      'Blue',
      'Brown',
      'Blue Gray',
    ]

    for (const color of colors) {
      expect(screen.getByRole('button', { name: color })).toBeInTheDocument()
    }
  })

  it('renders exactly 18 buttons', () => {
    render(<ColorButtons />)

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(18)
  })
})
