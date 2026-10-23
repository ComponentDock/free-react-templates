import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading, blurb, and the free-trial call to action', () => {
    render(<Features />)

    expect(
      screen.getByRole('heading', { level: 2, name: /A Complete Software Based Website/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Exclusive Stunning Features/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Start Free Trial Now!' })).toBeInTheDocument()
  })
})
