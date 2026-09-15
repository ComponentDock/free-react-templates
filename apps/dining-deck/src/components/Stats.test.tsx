import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders all 4 stat items with values and labels', () => {
    render(<Stats />)
    expect(screen.getByText('15+')).toBeInTheDocument()
    expect(screen.getByText('Years of Experience')).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getByText('Branches Worldwide')).toBeInTheDocument()
    expect(screen.getByText('100+')).toBeInTheDocument()
    expect(screen.getByText('Menu Items')).toBeInTheDocument()
    expect(screen.getByText('30+')).toBeInTheDocument()
    expect(screen.getByText('Expert Staff')).toBeInTheDocument()
  })
})
