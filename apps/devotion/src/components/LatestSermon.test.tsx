import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LatestSermon } from './LatestSermon'

describe('LatestSermon', () => {
  it('renders the section label', () => {
    render(<LatestSermon />)
    expect(screen.getByText('Latest Sermon')).toBeInTheDocument()
  })

  it('displays the sermon title', () => {
    render(<LatestSermon />)
    expect(screen.getByText('God is Love')).toBeInTheDocument()
  })

  it('shows the speaker name', () => {
    render(<LatestSermon />)
    expect(screen.getByText(/Ptr\. Johnson/)).toBeInTheDocument()
  })

  it('has a Watch Video link', () => {
    render(<LatestSermon />)
    expect(screen.getByText('Watch Video')).toBeInTheDocument()
  })
})
