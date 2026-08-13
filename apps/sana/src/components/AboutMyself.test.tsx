import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AboutMyself } from './AboutMyself'

describe('AboutMyself', () => {
  it('shows the heading and four activity cards with stats and labels', () => {
    render(<AboutMyself />)
    expect(screen.getByRole('heading', { name: 'About Myself' })).toBeInTheDocument()
    expect(screen.getByText('$2.5 M')).toBeInTheDocument()
    expect(screen.getByText('1465')).toBeInTheDocument()
    expect(screen.getAllByText('3965').length).toBe(2)
    for (const label of ['Total Donation', 'Total Project', 'Total Volunteers']) {
      expect(screen.getAllByText(label).length).toBeGreaterThanOrEqual(1)
    }
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(4)
  })
})
