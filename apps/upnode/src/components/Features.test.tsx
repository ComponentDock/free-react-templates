import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'
import { features, featuresSection } from '../data'

describe('Features', () => {
  it('shows the heading on the light blue-grey background with six icon cards', () => {
    const { container } = render(<Features />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-mist')
    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/Overall Features/)
    expect(container.querySelectorAll('svg')).toHaveLength(6)
    for (const feature of features) {
      expect(screen.getByRole('heading', { level: 3, name: feature.title })).toBeInTheDocument()
    }
    expect(screen.getByText(featuresSection.text)).toBeInTheDocument()
  })
})
