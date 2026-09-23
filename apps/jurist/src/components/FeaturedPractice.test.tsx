import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedPractice } from './FeaturedPractice'

describe('FeaturedPractice', () => {
  it('renders the section heading', () => {
    render(<FeaturedPractice />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Featured Practice Area')
  })

  it('renders three practice areas', () => {
    render(<FeaturedPractice />)
    expect(screen.getByText('Business Law')).toBeDefined()
    expect(screen.getByText('Criminal Law')).toBeDefined()
    expect(screen.getByText('Tax Law')).toBeDefined()
  })

  it('renders View All link', () => {
    render(<FeaturedPractice />)
    expect(screen.getByText('View All')).toBeDefined()
  })
})
