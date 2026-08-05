import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SplitTwo } from './SplitTwo'

describe('SplitTwo', () => {
  it('renders the heading, blurb, learn-more button, and play button', () => {
    render(<SplitTwo />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Great Application Ever' }),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/Watch how Appy turns a simple idea into a daily habit/),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#features')

    expect(screen.getByRole('button', { name: 'Play the Appy video' })).toBeInTheDocument()
  })
})
