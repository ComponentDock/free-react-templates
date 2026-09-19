import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PickedForYou } from './PickedForYou'

describe('PickedForYou', () => {
  it('renders section title', () => {
    render(<PickedForYou />)
    expect(screen.getByText('Picked For You')).toBeInTheDocument()
  })

  it('renders all products', () => {
    render(<PickedForYou />)
    expect(screen.getByText('Desk Organizer')).toBeInTheDocument()
    expect(screen.getByText('Mechanical Keyboard')).toBeInTheDocument()
    expect(screen.getByText('Mouse Pad XL')).toBeInTheDocument()
    expect(screen.getByText('Webcam HD')).toBeInTheDocument()
  })
})
