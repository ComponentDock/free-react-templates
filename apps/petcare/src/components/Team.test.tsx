import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('shows the heading and three doctor member cards', () => {
    render(<Team />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Team Mambers' })).toBeInTheDocument()

    for (const name of ['Mike Janathon', 'Mike J Smith', 'Pule W Smith']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    expect(screen.getAllByText('Doctor')).toHaveLength(3)
  })
})
