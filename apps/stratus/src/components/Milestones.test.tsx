import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Milestones } from './Milestones'

describe('Milestones', () => {
  it('renders the four stats on the slate band', () => {
    const { container } = render(<Milestones />)
    const section = container.querySelector('section')
    expect(section?.className).toContain('bg-slate')
    const stats: Array<[string, string]> = [
      ['31k', 'Clients'],
      ['98k', 'Domains'],
      ['14k', 'Awards'],
      ['362', 'VPS'],
    ]
    for (const [value, label] of stats) {
      expect(screen.getByText(value)).toBeInTheDocument()
      expect(screen.getByText(label)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('svg')).toHaveLength(4)
  })
})
