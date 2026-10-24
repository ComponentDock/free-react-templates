import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the centred heading and four features', () => {
    render(<Services />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Services Includes...' }),
    ).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', { level: 3, name: 'Reduce costs to a minimum' }),
    ).toHaveLength(4)
    expect(screen.getAllByText(/Separated they live in Bookmarksgrove/)).toHaveLength(4)
    expect(document.querySelectorAll('svg')).toHaveLength(4)
  })
})
