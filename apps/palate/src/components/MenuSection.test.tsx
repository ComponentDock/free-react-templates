import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MenuSection } from './MenuSection'
import { MENU_CATEGORIES } from '../data'

describe('MenuSection', () => {
  it('renders the six categories with three distinct items each', () => {
    const { container } = render(<MenuSection />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Menu' })).toBeInTheDocument()
    expect(container.querySelector('.font-script')).toHaveTextContent('Specialties')

    for (const category of MENU_CATEGORIES) {
      expect(screen.getByRole('heading', { level: 3, name: category.name })).toBeInTheDocument()
      for (const item of category.items) {
        expect(screen.getByRole('heading', { level: 4, name: item.name })).toBeInTheDocument()
        expect(screen.getByText(item.tags.join(', '))).toBeInTheDocument()
      }
    }

    // Every item is priced at $29.
    expect(screen.getAllByText('$29')).toHaveLength(18)

    // 18 circular 100px photos.
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(18)
    for (const image of images) {
      expect(image.className).toContain('rounded-full')
    }
  })
})
