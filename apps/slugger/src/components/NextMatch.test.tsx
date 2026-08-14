import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { NextMatch } from './NextMatch'

describe('NextMatch', () => {
  it('renders the heading, image, and four schedule cards', () => {
    render(<NextMatch />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/next match/i)
    expect(screen.getByRole('img', { name: 'Stadium ahead of the next match' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: /sluggers vs jacksonville/i }).length).toBe(4)
    expect(screen.getAllByText(/home @ arena - june/i).length).toBe(4)
    expect(screen.getAllByRole('link', { name: 'Watch Game' }).length).toBe(4)
  })
})
