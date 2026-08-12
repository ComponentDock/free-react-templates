import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and the six service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2, name: 'Services' })).toBeInTheDocument()
    for (const title of [
      'Web Design',
      'Photography',
      'Web Developer',
      'App Developing',
      'Branding',
      'Product Strategy',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('renders six icons and the hover-flip styling on cards', () => {
    const { container } = render(<Services />)
    expect(container.querySelectorAll('svg')).toHaveLength(6)
    const firstCard = container.querySelector('article')
    expect(firstCard?.className).toContain('hover:bg-brand')
  })
})
