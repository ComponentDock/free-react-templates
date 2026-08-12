import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { IntroRow } from './IntroRow'

describe('IntroRow', () => {
  it('renders the big number, cause label and Start Donation button', () => {
    render(<IntroRow />)
    expect(screen.getByText('380,000')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Waterless Drinking in Africa' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Start Donation' })).toBeInTheDocument()
  })

  it('renders the quote block beside the call-to-action', () => {
    render(<IntroRow />)
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
  })
})
