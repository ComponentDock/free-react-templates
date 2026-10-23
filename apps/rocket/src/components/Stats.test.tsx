import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders the five key figures with their labels', () => {
    render(<Stats />)

    const figures = [
      ['100K+', 'Total Downloads'],
      ['10K+', 'Positive Reviews'],
      ['50K+', 'Daily Visitors'],
      ['0.02%', 'Uninstallation Rate'],
      ['15K+', 'Pro User'],
    ] as const

    for (const [figure, label] of figures) {
      expect(screen.getByRole('heading', { level: 2, name: figure })).toBeInTheDocument()
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
