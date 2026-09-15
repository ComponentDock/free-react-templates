import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Partners } from './Partners'

describe('Partners', () => {
  it('renders the section heading', () => {
    render(<Partners />)
    expect(screen.getByText('Worldwide Partners')).toBeInTheDocument()
    expect(screen.getByText('Our Partners')).toBeInTheDocument()
  })

  it('renders all 5 partner logos', () => {
    render(<Partners />)
    const logos = screen.getAllByRole('img')
    expect(logos).toHaveLength(5)
  })
})
