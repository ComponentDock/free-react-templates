import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the heading and four priced rows', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { name: 'Pricing List' })).toBeInTheDocument()
    expect(screen.getByText('Stylish hair cut')).toBeInTheDocument()
    expect(screen.getByText('Hair color')).toBeInTheDocument()
    expect(screen.getByText('Wedding style')).toBeInTheDocument()
    expect(screen.getByText('Hair straight')).toBeInTheDocument()
    expect(screen.getByText('$40')).toBeInTheDocument()
  })
})
