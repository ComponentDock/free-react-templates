import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the heading and all four member cards', () => {
    render(<Team />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toBe('Every Dog Needs A Good Owner')

    expect(screen.getByText('Mellisa Howard')).toBeInTheDocument()
    expect(screen.getByText('Mike Richardson')).toBeInTheDocument()
    expect(screen.getByText('Charles White')).toBeInTheDocument()
    expect(screen.getByText('Laura Smith')).toBeInTheDocument()

    expect(screen.getAllByRole('img')).toHaveLength(4)
  })
})
