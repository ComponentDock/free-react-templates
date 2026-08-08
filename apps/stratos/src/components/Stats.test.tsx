import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders the four headline statistics with labels', () => {
    render(<Stats />)

    expect(screen.getByText('500K+')).toBeInTheDocument()
    expect(screen.getByText('40+')).toBeInTheDocument()
    expect(screen.getByText('99.99%')).toBeInTheDocument()
    expect(screen.getByText('10K+')).toBeInTheDocument()
    for (const label of ['Deployments', 'Global Regions', 'Uptime SLA', 'Active Teams']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
