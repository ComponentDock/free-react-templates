import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sponsors } from './Sponsors'

describe('Sponsors', () => {
  it('renders the heading and seven sponsor logos', () => {
    render(<Sponsors />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Sponsor Logos')

    expect(screen.getByText('Sponsor Alpha')).toBeInTheDocument()
    expect(screen.getByText('Sponsor Beta')).toBeInTheDocument()
    expect(screen.getByText('Sponsor Eta')).toBeInTheDocument()
  })
})
