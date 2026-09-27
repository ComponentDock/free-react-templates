import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Partners } from './Partners'

describe('Partners', () => {
  it('renders the section heading', () => {
    render(<Partners />)

    expect(screen.getByText('Our Partners')).toBeInTheDocument()
  })

  it('renders all partner names', () => {
    render(<Partners />)

    expect(screen.getByLabelText('Zillow')).toBeInTheDocument()
    expect(screen.getByLabelText('Realtor')).toBeInTheDocument()
    expect(screen.getByLabelText('Redfin')).toBeInTheDocument()
    expect(screen.getByLabelText('Trulia')).toBeInTheDocument()
    expect(screen.getByLabelText('Compass')).toBeInTheDocument()
    expect(screen.getByLabelText('Coldwell')).toBeInTheDocument()
  })

  it('has an aria-label', () => {
    render(<Partners />)

    expect(screen.getByLabelText('Partners')).toBeInTheDocument()
  })
})
