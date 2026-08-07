import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('shows the three counter numbers with their labels', () => {
    render(<Stats />)

    for (const value of ['1500', '500', '1200']) {
      expect(screen.getByText(value)).toBeInTheDocument()
    }
    expect(
      screen.getByText('Of customers are satisfied with our professional support'),
    ).toBeInTheDocument()
    expect(screen.getByText('Amazing preset options to be mixed and combined')).toBeInTheDocument()
    expect(
      screen.getByText('Average response time on live chat support channel'),
    ).toBeInTheDocument()
  })
})
