import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading and four text-only feature tiles', () => {
    render(<Features />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Top Rated Features' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 3, name: 'Unique Design' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Appropriate UX' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Perfect Visual' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Different Layout' })).toBeInTheDocument()

    expect(screen.getAllByRole('article')).toHaveLength(4)
  })
})
