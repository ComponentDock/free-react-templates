import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SplitOne } from './SplitOne'

describe('SplitOne', () => {
  it('renders the heading, blurb, learn-more button, and illustration', () => {
    render(<SplitOne />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Great Application Ever' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Appy brings together speed, clarity, and polish/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#features')

    expect(screen.getByRole('img', { name: 'Appy split illustration one' })).toBeInTheDocument()
  })
})
