import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders the heading, video image and four formatted stats', () => {
    render(<Counter />)
    expect(
      screen.getByRole('heading', { name: /We are church that believes in Jesus Christ/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Watch a sermon' })).toBeInTheDocument()
    for (const [value, label] of [
      ['70,000', 'Members'],
      ['1,000', 'Pastors'],
      ['100,000', 'Donation'],
      ['100', 'Churches'],
    ] as const) {
      expect(screen.getByText(value)).toBeInTheDocument()
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
