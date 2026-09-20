import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Speakers } from './Speakers'

describe('Speakers', () => {
  it('renders heading', () => {
    render(<Speakers />)
    expect(screen.getByText('Our Event Speakers')).toBeInTheDocument()
  })

  it('renders all speaker cards', () => {
    render(<Speakers />)
    expect(screen.getAllByTestId('speaker-card')).toHaveLength(5)
    expect(screen.getByText('Alice Johnson')).toBeInTheDocument()
    expect(screen.getByText('Bob Smith')).toBeInTheDocument()
    expect(screen.getByText('Carol White')).toBeInTheDocument()
    expect(screen.getByText('Dave Brown')).toBeInTheDocument()
    expect(screen.getByText('Eve Davis')).toBeInTheDocument()
  })

  it('renders speaker roles', () => {
    render(<Speakers />)
    expect(screen.getByText('Lead Developer')).toBeInTheDocument()
    expect(screen.getByText('Cloud Architect')).toBeInTheDocument()
  })
})
