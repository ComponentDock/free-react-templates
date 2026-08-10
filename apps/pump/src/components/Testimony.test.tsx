import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimony } from './Testimony'

describe('Testimony', () => {
  it('shows the Successful Stories heading', () => {
    render(<Testimony />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Successful Stories' }),
    ).toBeInTheDocument()
  })

  it('renders customer quotes with names and roles', () => {
    render(<Testimony />)

    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText('Gabby Smith')).toBeInTheDocument()
    expect(screen.getByText('Customer')).toBeInTheDocument()
  })
})
