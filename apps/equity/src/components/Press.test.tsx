import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Press } from './Press'

describe('Press', () => {
  it('shows three news items with thumbnail, title, date, and excerpt', () => {
    render(<Press />)

    expect(screen.getByRole('heading', { level: 2, name: 'Press Releases' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)

    for (const date of ['Apr 19, 2019', 'Apr 18, 2019', 'Apr 17, 2019']) {
      expect(screen.getByText(date)).toBeInTheDocument()
    }

    expect(
      screen.getAllByRole('link', { name: 'How To Invest In Investing Company' }),
    ).toHaveLength(3)
  })
})
