import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the gallery heading and project cards', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /Our latest Projects/i })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: /Download Free Song For Ipod/i })).toHaveLength(3)
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })
})
