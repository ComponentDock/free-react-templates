import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AppSection } from './AppSection'
import { appSection } from '../data'

describe('AppSection', () => {
  it('renders the heading, subline, and description', () => {
    render(<AppSection />)
    expect(screen.getByRole('heading', { level: 2, name: appSection.eyebrow })).toBeInTheDocument()
    expect(screen.getByText(appSection.subline)).toBeInTheDocument()
    expect(screen.getByText(appSection.description)).toBeInTheDocument()
  })

  it('renders three pink check bullets and the store badges', () => {
    const { container } = render(<AppSection />)
    for (const bullet of appSection.bullets) {
      expect(screen.getByText(bullet)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('.bg-brand').length).toBe(3)
    expect(screen.getByRole('link', { name: /App Store/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Google Play/ })).toBeInTheDocument()
  })
})
