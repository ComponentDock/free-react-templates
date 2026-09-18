import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Sermons } from './Sermons'

describe('Sermons', () => {
  it('renders section heading', () => {
    render(<Sermons />)
    expect(screen.getByText('Latest Sermons')).toBeInTheDocument()
  })

  it('renders 3 sermon cards', () => {
    render(<Sermons />)
    expect(screen.getByText('Start a New Way of Living')).toBeInTheDocument()
    expect(screen.getByText('What Must I Do To Be Saved')).toBeInTheDocument()
    expect(screen.getByText('The Second Coming of Christ')).toBeInTheDocument()
  })

  it('renders media action icons for each sermon', () => {
    render(<Sermons />)
    const videoLinks = screen.getAllByLabelText('Video')
    expect(videoLinks).toHaveLength(3)
    const audioLinks = screen.getAllByLabelText('Audio')
    expect(audioLinks).toHaveLength(3)
    const docsLinks = screen.getAllByLabelText('Docs')
    expect(docsLinks).toHaveLength(3)
    const downloadLinks = screen.getAllByLabelText('Download')
    expect(downloadLinks).toHaveLength(3)
  })

  it('renders sermon metadata for each sermon', () => {
    render(<Sermons />)
    const speakers = screen.getAllByText(/Jorge Malone/)
    expect(speakers).toHaveLength(3)
    const categories = screen.getAllByText(/God, Pray/)
    expect(categories).toHaveLength(3)
  })

  it('renders date badges', () => {
    render(<Sermons />)
    expect(screen.getByText('10')).toBeInTheDocument()
    const mayBadges = screen.getAllByText('MAY')
    expect(mayBadges.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('MAR')).toBeInTheDocument()
  })

  it('has data-testid', () => {
    render(<Sermons />)
    expect(screen.getByTestId('sermons')).toBeInTheDocument()
  })
})
