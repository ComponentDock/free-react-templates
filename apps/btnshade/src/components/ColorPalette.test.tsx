import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ColorPalette } from './ColorPalette'

describe('ColorPalette', () => {
  it('renders the section heading', () => {
    render(<ColorPalette />)
    expect(screen.getByRole('heading', { name: /Button Colors/i })).toBeInTheDocument()
  })

  it('renders all 18 color variant buttons', () => {
    render(<ColorPalette />)
    const expectedColors = [
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
    for (const color of expectedColors) {
      expect(screen.getByRole('button', { name: color })).toBeInTheDocument()
    }
  })

  it('renders three rows of buttons', () => {
    render(<ColorPalette />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(18)
  })

  it('each button uses rounded-full pill shape', () => {
    render(<ColorPalette />)
    const primary = screen.getByRole('button', { name: 'Primary' })
    expect(primary.className).toContain('rounded-full')
  })
})
