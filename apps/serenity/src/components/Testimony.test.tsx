import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimony } from './Testimony'

describe('Testimony', () => {
  it('shows the Successful Stories heading', () => {
    render(<Testimony />)
    expect(screen.getByText('Testimony')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Successful Stories' })).toBeInTheDocument()
  })

  it('renders the three stories with author names', () => {
    render(<Testimony />)
    for (const name of ['Gabby Smith', 'Floyd Weather', 'James Dee']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })
})
