import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders six sponsor marks inside the dark card', () => {
    const { container } = render(<Brands />)

    expect(screen.getByRole('region', { name: 'Sponsors' })).toBeInTheDocument()

    expect(screen.getByText('Vertex')).toBeInTheDocument()
    expect(screen.getByText('Pixelforged')).toBeInTheDocument()
    expect(screen.getByText('Northwind')).toBeInTheDocument()
    expect(screen.getByText('Gridwork')).toBeInTheDocument()
    expect(screen.getByText('Hexaform')).toBeInTheDocument()
    expect(screen.getByText('Studio Nine')).toBeInTheDocument()

    expect(container.querySelectorAll('svg')).toHaveLength(6)
  })
})
