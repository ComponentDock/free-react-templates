import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ColorPalette } from './ColorPalette'

describe('ColorPalette', () => {
  it('renders the section heading', () => {
    render(<ColorPalette />)
    const headings = screen.getAllByRole('heading')
    const sectionHeading = headings.find((h) => h.textContent === 'Color Scheme')
    expect(sectionHeading).toBeInTheDocument()
  })

  it('renders 9 color swatches', () => {
    render(<ColorPalette />)
    const names = [
      'Primary',
      'Secondary',
      'Success',
      'Info',
      'Warning',
      'Danger',
      'Indigo',
      'Dark',
      'Teal',
    ]
    for (const name of names) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('applies correct background colors to swatches', () => {
    render(<ColorPalette />)
    const primary = screen.getByText('Primary')
    const swatch = primary.parentElement?.querySelector('div')
    expect(swatch).toHaveStyle({ backgroundColor: 'rgb(14, 165, 233)' })
  })
})
