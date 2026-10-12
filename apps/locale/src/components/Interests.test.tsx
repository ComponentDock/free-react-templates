import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Interests } from './Interests'
import {
  INTEREST_CTA_LABEL,
  INTERESTS,
  INTERESTS_SUBTITLE,
  INTERESTS_TITLE,
  LISTINGS_ID,
} from '../lib/site'

describe('Interests', () => {
  it('renders the heading and the subtext of the band', () => {
    render(<Interests />)

    expect(screen.getByRole('heading', { level: 2, name: INTERESTS_TITLE })).toBeInTheDocument()
    expect(screen.getByText(INTERESTS_SUBTITLE)).toBeInTheDocument()
  })

  it('renders the four stacked cards around the tall centre card', () => {
    render(<Interests />)

    expect(screen.getAllByTestId('interest-card')).toHaveLength(
      INTERESTS.left.length + INTERESTS.right.length,
    )
    expect(screen.getAllByRole('heading', { level: 3, name: 'Restaurant & Bar' })).toHaveLength(2)
    expect(screen.getAllByRole('heading', { level: 3, name: 'Outdoor' })).toHaveLength(2)
  })

  it('gives the centre card its description and an Explore call to action', () => {
    render(<Interests />)

    expect(screen.getByTestId('interest-feature')).toBeInTheDocument()
    expect(screen.getByTestId('interest-feature-description')).toHaveTextContent(
      String(INTERESTS.feature.description),
    )
    expect(screen.getByRole('link', { name: INTEREST_CTA_LABEL })).toHaveAttribute(
      'href',
      `#${LISTINGS_ID}`,
    )
  })
})
