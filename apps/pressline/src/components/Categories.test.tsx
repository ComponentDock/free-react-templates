import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Categories } from './Categories'

describe('Categories', () => {
  it('renders all 4 category cards', () => {
    render(<Categories />)
    expect(screen.getByText("Children's Books")).toBeInTheDocument()
    expect(screen.getByText('Romance')).toBeInTheDocument()
    expect(screen.getByText('Art & Architecture')).toBeInTheDocument()
    expect(screen.getByText('History')).toBeInTheDocument()
  })

  it('renders descriptions for each category', () => {
    render(<Categories />)
    expect(screen.getByText(/Stories that spark imagination/)).toBeInTheDocument()
    expect(screen.getByText(/Tales of love and connection/)).toBeInTheDocument()
    expect(screen.getByText(/Explore the beauty of creative/)).toBeInTheDocument()
    expect(screen.getByText(/Journey through time/)).toBeInTheDocument()
  })
})
