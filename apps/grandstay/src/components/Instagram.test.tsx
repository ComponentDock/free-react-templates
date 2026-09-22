import { render, screen } from '@testing-library/react'
import { Instagram } from './Instagram'
import { INSTAGRAM } from '../data'
import { describe, expect, it } from 'vitest'

describe('Instagram', () => {
  it('renders the heading', () => {
    render(<Instagram />)
    expect(screen.getByRole('heading', { level: 2, name: INSTAGRAM.heading })).toBeInTheDocument()
  })
})
