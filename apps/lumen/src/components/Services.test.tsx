import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('What We Do')).toBeInTheDocument()
  })

  it('renders all six service items', () => {
    render(<Services />)
    const titles = [
      'Brand Identity',
      'Illustration',
      'Marketing',
      'Web Design',
      'Packaging Design',
      'Web Development',
    ]
    for (const title of titles) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })
})
