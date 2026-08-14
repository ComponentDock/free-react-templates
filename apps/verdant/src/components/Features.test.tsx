import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders the eyebrow, uppercase heading with green underline and the overlap section', () => {
    render(<Features />)
    expect(screen.getByText('Outstanding Services')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 2, name: 'Love Us Verdant' })
    expect(heading.className).toMatch(/uppercase/)
    expect(heading.className).toMatch(/heading-underline/)
    const section = screen.getByLabelText('Features')
    expect(section.className).toMatch(/-mt-\[150px\]/)
  })

  it('shows a white rotated slant band above the features', () => {
    const { container } = render(<Features />)
    const slant = container.querySelector('.slant')
    expect(slant).not.toBeNull()
    const band = container.querySelector('.slant-band')
    expect(band).not.toBeNull()
    expect(band!.className).toMatch(/rotate-/)
    expect(band!.className).toMatch(/bg-white/)
    expect(band!.className).toMatch(/top-\[-110px\]/)
  })

  it('renders four feature columns with green icons, uppercase titles and blurbs', () => {
    render(<Features />)
    for (const title of ['Increase Revenue', 'Analytics', '3 Years Experience', 'Free Package']) {
      const heading = screen.getByRole('heading', { level: 3, name: title })
      expect(heading.className).toMatch(/uppercase/)
      expect(heading.parentElement!.querySelector('svg')).not.toBeNull()
      expect(heading.parentElement!.querySelector('p')).not.toBeNull()
    }
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(4)
  })
})
