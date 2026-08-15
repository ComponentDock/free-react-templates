import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AdsRow } from './AdsRow'
import {
  adsLargeText,
  adsLargeTitle,
  adsLinkLabel,
  adsSmallBadge,
  adsSmallBadgeLabel,
  adsSmallBadgeUnit,
  adsSmallTitle,
} from '../data'

describe('AdsRow', () => {
  it('renders the small banner with discount badge, title and See More link', () => {
    render(<AdsRow />)
    expect(screen.getByText(adsSmallBadge)).toBeInTheDocument()
    expect(screen.getByText(adsSmallBadgeUnit)).toBeInTheDocument()
    expect(screen.getByText(adsSmallBadgeLabel)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: adsSmallTitle })).toBeInTheDocument()
    expect(screen.getByAltText('Smart phones promotion')).toBeInTheDocument()
  })

  it('renders the large banner with title, paragraph and See More link', () => {
    render(<AdsRow />)
    expect(screen.getByRole('heading', { level: 3, name: adsLargeTitle })).toBeInTheDocument()
    expect(screen.getByText(adsLargeText)).toBeInTheDocument()
    expect(screen.getByAltText('Professional cameras promotion')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: adsLinkLabel })).toHaveLength(2)
  })
})
