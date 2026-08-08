import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and four service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'What We Do' })).toBeInTheDocument()
    const titles = ['Web Design', 'Mobile Apps', 'Brand Identity', 'Digital Marketing']
    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders feature lists and Learn More links for every card', () => {
    render(<Services />)
    expect(screen.getAllByText('Learn More')).toHaveLength(4)
    expect(screen.getAllByText('Custom Design')).toHaveLength(1)
    expect(screen.getByText('iOS & Android')).toBeInTheDocument()
    expect(screen.getByText('Logo Design')).toBeInTheDocument()
    expect(screen.getByText('Social Media')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem').length).toBeGreaterThanOrEqual(16)
  })
})
