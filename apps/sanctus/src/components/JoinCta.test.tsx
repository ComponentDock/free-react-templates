import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { JoinCta } from './JoinCta'
import { join } from '../data'

describe('JoinCta', () => {
  it('renders the heading and the Join Us pill button', () => {
    render(<JoinCta />)
    expect(screen.getByRole('heading', { level: 2, name: join.heading })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: join.ctaLabel })).toBeInTheDocument()
  })
})
