import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedCourses } from './FeaturedCourses'

describe('FeaturedCourses', () => {
  it('renders the heading and four course cards with full details', () => {
    render(<FeaturedCourses />)

    expect(screen.getByRole('heading', { name: 'Our featured courses' })).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(4)

    expect(screen.getAllByText('User Experience').length).toBeGreaterThan(0)
    expect(screen.getByRole('heading', { name: /Fundamental of UX/ })).toBeInTheDocument()
    expect(screen.getAllByText(/\$135/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/4\.5/).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Find out more' })).toHaveLength(4)
  })
})
