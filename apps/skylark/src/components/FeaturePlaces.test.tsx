import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { FeaturePlaces } from './FeaturePlaces'
import { FEATURE_PLACES } from '../data'

describe('FeaturePlaces', () => {
  it('renders the section title and the first page of destinations', () => {
    render(<FeaturePlaces />)

    expect(screen.getByRole('heading', { level: 2, name: 'Feature Places' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: FEATURE_PLACES[0]!.name }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: FEATURE_PLACES[1]!.name }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: FEATURE_PLACES[2]!.name }),
    ).toBeInTheDocument()
  })

  it('shows the rating and review count for a featured place', () => {
    render(<FeaturePlaces />)

    const first = FEATURE_PLACES[0]!
    expect(screen.getByText(first.rating)).toBeInTheDocument()
    expect(screen.getByText(first.reviews)).toBeInTheDocument()
  })

  it('pages forward and backward with the arrows', () => {
    render(<FeaturePlaces />)

    fireEvent.click(screen.getByRole('button', { name: 'Next page' }))
    expect(
      screen.getByRole('heading', { level: 3, name: FEATURE_PLACES[3]!.name }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: FEATURE_PLACES[4]!.name }),
    ).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Previous page' }))
    expect(
      screen.getByRole('heading', { level: 3, name: FEATURE_PLACES[0]!.name }),
    ).toBeInTheDocument()
  })

  it('wraps around: previous on the first page shows the last page', () => {
    render(<FeaturePlaces />)

    fireEvent.click(screen.getByRole('button', { name: 'Previous page' }))
    expect(
      screen.getByRole('heading', {
        level: 3,
        name: FEATURE_PLACES[FEATURE_PLACES.length - 1]!.name,
      }),
    ).toBeInTheDocument()
  })

  it('jumps to a page via the dots', () => {
    render(<FeaturePlaces />)

    const dot = screen.getByRole('button', { name: 'Go to page 2' })
    fireEvent.click(dot)
    expect(dot).toHaveAttribute('aria-current', 'true')
    expect(
      screen.getByRole('heading', { level: 3, name: FEATURE_PLACES[3]!.name }),
    ).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Go to page 1' }))
    expect(
      screen.getByRole('heading', { level: 3, name: FEATURE_PLACES[0]!.name }),
    ).toBeInTheDocument()
  })
})
