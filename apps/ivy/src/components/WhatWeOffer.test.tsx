import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhatWeOffer } from './WhatWeOffer'
import { FEATURES, OFFER_HEADLINE } from '../data'

describe('WhatWeOffer', () => {
  it('renders the heading and the framed photo', () => {
    render(<WhatWeOffer />)
    expect(screen.getByRole('heading', { level: 2, name: OFFER_HEADLINE })).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'Students collaborating on campus' }),
    ).toBeInTheDocument()
  })

  it('renders all six feature rows', () => {
    render(<WhatWeOffer />)
    for (const feature of FEATURES) {
      expect(screen.getByRole('heading', { level: 3, name: feature.title })).toBeInTheDocument()
    }
    // all six rows share the same blurb copy
    expect(screen.getAllByText(FEATURES[0]!.blurb)).toHaveLength(FEATURES.length)
  })
})
