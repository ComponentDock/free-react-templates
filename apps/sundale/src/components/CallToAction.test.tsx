import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CallToAction } from './CallToAction'

describe('CallToAction', () => {
  it('renders heading', () => {
    render(<CallToAction />)
    expect(screen.getByText('Are you looking for a place to rent?')).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<CallToAction />)
    expect(screen.getByText(/Suspendisse dictum/)).toBeInTheDocument()
  })

  it('renders search button', () => {
    render(<CallToAction />)
    expect(screen.getByRole('link', { name: 'Search' })).toBeInTheDocument()
  })

  it('search button links to properties section', () => {
    render(<CallToAction />)
    const link = screen.getByRole('link', { name: 'Search' })
    expect(link).toHaveAttribute('href', '#properties')
  })
})
