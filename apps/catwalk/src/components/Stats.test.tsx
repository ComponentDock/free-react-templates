import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders the four counters from the original template', () => {
    render(<Stats />)
    for (const label of ['Models', 'Agency', 'Awards', 'Events']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
    expect(screen.getByText('1,200')).toBeInTheDocument()
    expect(screen.getByText('60')).toBeInTheDocument()
    expect(screen.getByText('45')).toBeInTheDocument()
    expect(screen.getByText('32')).toBeInTheDocument()
  })
})
