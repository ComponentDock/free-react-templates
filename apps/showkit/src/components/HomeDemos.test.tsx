import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HomeDemos } from './HomeDemos'

describe('HomeDemos', () => {
  it('renders the heading and the two onepage demo cards', () => {
    render(<HomeDemos />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Home onepage Demos' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /OnePage - 01/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /OnePage - 02/ })).toBeInTheDocument()
  })
})
