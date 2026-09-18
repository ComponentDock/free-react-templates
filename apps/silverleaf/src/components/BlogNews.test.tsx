import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogNews } from './BlogNews'

describe('BlogNews', () => {
  it('renders three blog posts', () => {
    render(<BlogNews />)
    expect(screen.getByText('The Importance of Social Activities for Seniors')).toBeInTheDocument()
    expect(screen.getByText('Nutrition Tips for Healthy Aging')).toBeInTheDocument()
    expect(screen.getByText('Creating a Safe Home Environment')).toBeInTheDocument()
  })

  it('renders meta information', () => {
    render(<BlogNews />)
    expect(screen.getByText('Sep 10, 2025')).toBeInTheDocument()
    expect(screen.getAllByText('Admin').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('renders excerpts', () => {
    render(<BlogNews />)
    expect(screen.getByText(/social engagement contributes/)).toBeInTheDocument()
  })
})
