import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { UtilityBar } from './UtilityBar'

describe('UtilityBar', () => {
  it('renders the insurance link, appointment link, search, and emergency line', () => {
    render(<UtilityBar />)
    expect(screen.getByRole('link', { name: /fees & insurance/i })).toHaveAttribute(
      'href',
      '#departments',
    )
    expect(screen.getByRole('link', { name: /request an appointment/i })).toHaveAttribute(
      'href',
      '#appointment',
    )
    expect(screen.getByPlaceholderText('Search or enter website name')).toBeInTheDocument()
    expect(screen.getByText(/emergency line/i)).toBeInTheDocument()
  })
})
