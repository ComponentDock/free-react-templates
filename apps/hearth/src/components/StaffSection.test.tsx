import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StaffSection } from './StaffSection'

describe('StaffSection', () => {
  it('shows the Chef heading pair and the four staff cards', () => {
    render(<StaffSection />)

    // Script label "Chef" + the two "Chef" role spans.
    expect(screen.getAllByText('Chef')).toHaveLength(3)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Master Chef')

    for (const name of ['John Smooth', 'Rebeca Welson', 'Kharl Branyt', 'Luke Simon']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
      expect(screen.getByRole('img', { name: `Portrait of ${name}` })).toBeInTheDocument()
    }

    expect(screen.getByText('CEO, Co Founder')).toBeInTheDocument()
    expect(screen.getAllByText('Head Chef')).toHaveLength(1)
    // Script label + the two Chef roles.
    expect(screen.getAllByText('Chef')).toHaveLength(3)
    expect(screen.getAllByText(/I am an ambitious workaholic/)).toHaveLength(4)
  })
})
