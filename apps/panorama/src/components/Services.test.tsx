import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
  })

  it('renders all six service cards', () => {
    render(<Services />)
    const titles = [
      'Graphic Design',
      'Marketing Strategy',
      'Web Design',
      'SEO',
      'Market Leading',
      'Pixel Perfect Design',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders the view all button', () => {
    render(<Services />)
    expect(screen.getByRole('link', { name: /View All Services/i })).toBeInTheDocument()
  })
})
