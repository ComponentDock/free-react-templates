import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Shows } from './Shows'

describe('Shows', () => {
  it('shows the heading, intro and four show cards', () => {
    render(<Shows />)
    expect(screen.getByRole('heading', { name: 'Upcoming Shows' })).toBeInTheDocument()
    expect(screen.getByText(/Catch the freshest mixes/i)).toBeInTheDocument()

    for (const title of ['This Is The Day', 'Electro Party', 'Classic Hits', 'Classic Songs']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByText('Friday 1:00pm — 2:30pm')).toHaveLength(4)
    for (const host of ['Wendy Matos', 'Gaby Tenda', 'James Tenda', 'Troy Peters']) {
      expect(screen.getByText(`with ${host}`)).toBeInTheDocument()
    }
  })
})
