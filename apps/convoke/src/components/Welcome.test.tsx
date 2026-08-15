import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('renders the subheading, heading, paragraph, and Learn More button', () => {
    render(<Welcome />)
    expect(screen.getByText('Welcome To')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'The Biggest Design Conference of the Year 2019',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#speakers')
  })
})
