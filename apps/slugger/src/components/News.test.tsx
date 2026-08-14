import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { News } from './News'

describe('News', () => {
  it('renders four news cards with date blocks and More Details links', () => {
    render(<News />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/recent news/i)
    expect(screen.getByRole('heading', { name: /why lead generation is key/i })).toBeInTheDocument()
    expect(screen.getByText('29')).toBeInTheDocument()
    expect(screen.getByText('May')).toBeInTheDocument()
    expect(screen.getAllByText('2019').length).toBe(4)
    expect(screen.getAllByRole('link', { name: 'More Details' }).length).toBe(4)
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(4)
  })
})
