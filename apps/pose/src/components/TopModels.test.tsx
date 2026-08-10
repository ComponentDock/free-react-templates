import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TopModels } from './TopModels'

describe('TopModels', () => {
  it('renders the section heading', () => {
    render(<TopModels />)

    expect(screen.getByRole('heading', { level: 2, name: "Our Tops Model's" })).toBeInTheDocument()
  })

  it('renders ten model tiles', () => {
    render(<TopModels />)

    for (const name of [
      'Andrea',
      'Cassy',
      'Angela',
      'May',
      'Nicole',
      'Jannah',
      'Mariel',
      'Maria',
      'Ozawa',
      'Maine',
    ]) {
      expect(screen.getAllByRole('heading', { level: 3, name }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders a model photo per tile', () => {
    const { container } = render(<TopModels />)

    const images = Array.from(container.querySelectorAll('img'))
    expect(images.length).toBe(10)
  })
})
