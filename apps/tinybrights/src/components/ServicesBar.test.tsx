import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesBar } from './ServicesBar'

describe('ServicesBar', () => {
  it('renders all four service columns', () => {
    render(<ServicesBar />)
    expect(screen.getByText('Fun Learning')).toBeInTheDocument()
    expect(screen.getByText('Art & Crafts')).toBeInTheDocument()
    expect(screen.getByText('Music & Dance')).toBeInTheDocument()
    expect(screen.getByText('Creative Play')).toBeInTheDocument()
  })

  it('renders descriptions for each service', () => {
    render(<ServicesBar />)
    expect(screen.getByText(/Engaging curriculum/i)).toBeInTheDocument()
    expect(screen.getByText(/Creative workshops/i)).toBeInTheDocument()
    expect(screen.getByText(/Rhythm and movement/i)).toBeInTheDocument()
    expect(screen.getByText(/Safe play areas/i)).toBeInTheDocument()
  })
})
