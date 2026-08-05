import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Splits } from './Splits'

describe('Splits', () => {
  it('renders at least two split sections with the heading, blurb, and a Learn More button', () => {
    render(<Splits />)

    expect(
      screen.getAllByRole('heading', { level: 2, name: /We Believe that Inner beauty Lasts Long/ }),
    ).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Learn More' })).toHaveLength(3)
    expect(screen.getAllByText(/Modern Daesign Trends/)).toHaveLength(3)
  })
})
