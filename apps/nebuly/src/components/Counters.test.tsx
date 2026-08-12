import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counters } from './Counters'

describe('Counters', () => {
  it('renders the heading and four white stat counters', () => {
    render(<Counters />)
    expect(
      screen.getByRole('heading', { name: 'We Always Try To Understand Users Expectation' }),
    ).toBeInTheDocument()
    const stats: Array<[string, string]> = [
      ['1,284', 'Download'],
      ['120', 'Awards Won'],
      ['300', 'Contributors'],
      ['5,620', 'Satisfied Customers'],
    ]
    for (const [value, label] of stats) {
      expect(screen.getByText(value)).toHaveClass('text-white')
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
