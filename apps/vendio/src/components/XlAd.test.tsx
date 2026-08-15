import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { XlAd } from './XlAd'
import { adsLinkLabel, xlAdText, xlAdTitle } from '../data'

describe('XlAd', () => {
  it('renders the full-width banner with title, paragraph and See More link', () => {
    render(<XlAd />)
    expect(screen.getByRole('heading', { level: 2, name: xlAdTitle })).toBeInTheDocument()
    expect(screen.getByText(xlAdText)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: adsLinkLabel })).toBeInTheDocument()
    expect(screen.getByAltText('Amazing devices promotion')).toBeInTheDocument()
  })
})
