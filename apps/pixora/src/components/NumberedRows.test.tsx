import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NumberedRows } from './NumberedRows'
import { numberedRows } from '../data'

describe('NumberedRows', () => {
  it('renders every numbered row with a dash-prefixed title and a blurb', () => {
    render(<NumberedRows />)
    for (const row of numberedRows) {
      expect(screen.getByText(row.count)).toBeInTheDocument()
      const heading = screen.getByRole('heading', { name: new RegExp(row.title) })
      expect(heading).toHaveTextContent(`-${row.title}`)
      expect(screen.getByText(row.blurb)).toBeInTheDocument()
    }
  })
})
