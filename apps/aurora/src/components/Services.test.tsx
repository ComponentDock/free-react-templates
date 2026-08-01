import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and at least three service cards with titles and descriptions', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { level: 2, name: /services/i })).toBeInTheDocument()

    const titles = screen.getAllByRole('heading', { level: 3 })
    expect(titles.length).toBeGreaterThanOrEqual(3)

    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText(/responsive websites and apps built with react/i)).toBeInTheDocument()
    expect(screen.getByText('UI/UX Design')).toBeInTheDocument()
    expect(screen.getByText('Brand Identity')).toBeInTheDocument()
    expect(screen.getByText('Performance & SEO')).toBeInTheDocument()
  })
})
