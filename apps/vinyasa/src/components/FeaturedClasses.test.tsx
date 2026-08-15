import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedClasses } from './FeaturedClasses'

describe('FeaturedClasses', () => {
  it('shows the heading and four class cards with a book link each', () => {
    render(<FeaturedClasses />)
    expect(screen.getByRole('heading', { name: 'Our Featured Classes' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: 'Get into shape now' })).toHaveLength(4)
    expect(screen.getAllByRole('link', { name: /Book an appointment/ })).toHaveLength(4)
  })
})
