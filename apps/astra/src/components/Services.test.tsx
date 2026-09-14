import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders "02 What We Do" subhead', () => {
    render(<Services />)
    expect(screen.getByText('02 What We Do')).toBeInTheDocument()
  })

  it('renders heading', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { level: 2, name: /results that matter/i }),
    ).toBeInTheDocument()
  })

  it('renders 6 service cards', () => {
    render(<Services />)
    const titles = [
      'Brand Identity',
      'Illustration',
      'Web Design',
      'Product Strategy',
      'UI/UX Design',
      'Mobile Design',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
