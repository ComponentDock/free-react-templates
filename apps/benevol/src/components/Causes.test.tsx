import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Causes } from './Causes'
import { CAUSES } from '../data'

describe('Causes', () => {
  it('renders all six cause cards with headings and body copy', () => {
    render(<Causes />)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(6)
    for (const cause of CAUSES) {
      expect(screen.getByRole('heading', { level: 3, name: cause.title })).toBeInTheDocument()
      // The reference design reuses a few paragraph variants across cards.
      expect(screen.getAllByText(cause.body).length).toBeGreaterThan(0)
    }
  })
})
