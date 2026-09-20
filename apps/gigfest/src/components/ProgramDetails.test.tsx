import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProgramDetails } from './ProgramDetails'

describe('ProgramDetails', () => {
  it('renders the heading and four schedule items', () => {
    render(<ProgramDetails />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Program Details')

    const times = screen.getAllByText('3:00-4:00pm')
    expect(times).toHaveLength(4)

    const dates = screen.getAllByText('12 Feb 2020')
    expect(dates).toHaveLength(4)
  })

  it('shows performer images and names in the timeline', () => {
    render(<ProgramDetails />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)

    expect(screen.getByText('Mr. Zosoldos')).toBeInTheDocument()
    expect(screen.getByText('Filaris Habol')).toBeInTheDocument()
  })

  it('has a vertical timeline border', () => {
    const { container } = render(<ProgramDetails />)
    const timeline = container.querySelector('.border-l-2')
    expect(timeline).toBeInTheDocument()
  })
})
