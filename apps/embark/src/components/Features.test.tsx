import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('shows the heading and four feature cards', () => {
    render(<Features />)

    expect(
      screen.getByRole('heading', { level: 2, name: /Advantage of using our products/ }),
    ).toBeInTheDocument()
    for (const title of [
      'Grow Your Business',
      'Build Products',
      'Success Every Day',
      'Bring Ideas to Life',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })
})
