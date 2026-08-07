import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the section heading', () => {
    render(<Projects />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Unique Latest Projects' }),
    ).toBeInTheDocument()
  })

  it('shows the project cards with View Portfolio buttons', () => {
    render(<Projects />)

    for (const title of ['Geometric Building', 'Twin Office', 'Cultural Complex Centre']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'View Portfolio' })).toHaveLength(6)
  })
})
