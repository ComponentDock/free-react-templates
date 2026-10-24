import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'
import { features } from '../data'

describe('Features', () => {
  it('renders three cards with an overlapping icon circle each', () => {
    render(<Features />)
    const section = screen.getByRole('region', { name: 'Why train at Stryve' })
    const articles = section.querySelectorAll('article')
    expect(articles).toHaveLength(features.length)

    for (const feature of features) {
      expect(screen.getByRole('heading', { level: 3, name: feature.title })).toBeInTheDocument()
      expect(screen.getByText(feature.copy)).toBeInTheDocument()
      expect(screen.getByRole('img', { name: feature.alt })).toHaveAttribute('src', feature.image)
      expect(section.querySelector(`[data-feature-icon="${feature.icon}"]`)).not.toBeNull()
    }

    for (const icon of section.querySelectorAll('[data-feature-icon]')) {
      expect(icon.className).toContain('-mt-[34px]')
      expect(icon.className).toContain('h-[88px]')
    }
  })
})
