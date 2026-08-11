import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { TravelVideos } from './TravelVideos'
import { playLabel, travelFeatured, travelHeading, travelRows } from '../data'

describe('TravelVideos', () => {
  it('renders the section heading and the featured card with play overlay', () => {
    render(<TravelVideos />)
    const section = screen.getByRole('region', { name: 'Travel videos' })
    expect(within(section).getByRole('heading', { name: travelHeading })).toBeInTheDocument()
    expect(within(section).getByRole('heading', { name: travelFeatured.title })).toBeInTheDocument()
    expect(
      within(section).getByRole('link', { name: playLabel(travelFeatured.title) }),
    ).toBeInTheDocument()
    expect(within(section).getAllByText(travelFeatured.meta.author).length).toBeGreaterThan(0)
  })

  it('renders the horizontal travel post rows with meta', () => {
    render(<TravelVideos />)
    const section = screen.getByRole('region', { name: 'Travel videos' })
    for (const row of travelRows) {
      expect(within(section).getByRole('heading', { name: row.title })).toBeInTheDocument()
    }
    expect(within(section).getAllByText(travelRows[0]!.meta.date).length).toBeGreaterThan(0)
    expect(within(section).getAllByText(travelRows[0]!.meta.likes).length).toBeGreaterThan(0)
  })
})
