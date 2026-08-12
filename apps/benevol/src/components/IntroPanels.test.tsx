import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { IntroPanels } from './IntroPanels'
import { INTRO_PANELS } from '../data'

describe('IntroPanels', () => {
  it('renders three panels with headings and body copy', () => {
    render(<IntroPanels />)
    for (const panel of INTRO_PANELS) {
      expect(screen.getByRole('heading', { level: 2, name: panel.heading })).toBeInTheDocument()
      // The reference design repeats the same body copy in all three panels.
      expect(screen.getAllByText(panel.body).length).toBeGreaterThan(0)
    }
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(3)
  })
})
