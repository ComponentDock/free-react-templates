import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders all stat figures and labels', () => {
    render(<Stats />)

    for (const label of [
      'Total Downloads',
      'Positive Reviews',
      'Daily Visitors',
      'Uninstallation Rate',
      'Pro User',
    ]) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }

    expect(screen.getByText('100K+')).toBeInTheDocument()
    expect(screen.getByText('10K+')).toBeInTheDocument()
    expect(screen.getByText('50K+')).toBeInTheDocument()
  })
})
