import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders the heading, paragraph, Learn More link and three counters', () => {
    render(<Stats />)

    expect(
      screen.getByRole('heading', { level: 2, name: /Partner for your business/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/complexities of modern markets/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#contact')

    expect(screen.getByText('2500')).toBeInTheDocument()
    expect(screen.getByText('350')).toBeInTheDocument()
    expect(screen.getByText('20')).toBeInTheDocument()
    expect(screen.getAllByText('+')).toHaveLength(3)
  })
})
