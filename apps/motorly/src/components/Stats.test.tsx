import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders the section title and four counters', () => {
    render(<Stats />)
    expect(screen.getByRole('heading', { name: /About Our Statistics/i })).toBeInTheDocument()
    for (const label of ['All Project', 'Project Completed', 'Customers Action', 'Awards Winner']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
    expect(screen.getAllByText('560')).toHaveLength(4)
  })
})
