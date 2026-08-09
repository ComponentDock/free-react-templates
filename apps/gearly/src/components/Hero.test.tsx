import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the overline, the level-1 headline, and both CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Best options for you')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /Drive safe & get license/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact us' })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: 'See Courses' })).toHaveAttribute('href', '#courses')
  })
})
