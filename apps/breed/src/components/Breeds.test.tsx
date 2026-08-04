import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Breeds } from './Breeds'

describe('Breeds', () => {
  it('renders the heading and the six breed cards', () => {
    render(<Breeds />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toBe('Dog Breed Collections')

    expect(screen.getByText('German Shepherd')).toBeInTheDocument()
    expect(screen.getByText('Labrador')).toBeInTheDocument()
    expect(screen.getByText('Bulldog')).toBeInTheDocument()
    expect(screen.getByText('Rottweiler')).toBeInTheDocument()
    expect(screen.getByText('Beagle')).toBeInTheDocument()
    expect(screen.getByText('Golden Retriever')).toBeInTheDocument()

    expect(screen.getAllByRole('img')).toHaveLength(6)
  })
})
