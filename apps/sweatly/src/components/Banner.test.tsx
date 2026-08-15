import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Banner } from './Banner'

describe('Banner', () => {
  it('renders the photo band heading and lead', () => {
    render(
      <Banner
        image="https://picsum.photos/seed/sweatly-banner-1/1600/600"
        heading="Get The Result You Want"
        lead="Consistency beats intensity."
      />,
    )
    expect(screen.getByRole('heading', { name: 'Get The Result You Want' })).toBeInTheDocument()
    expect(screen.getByText('Consistency beats intensity.')).toBeInTheDocument()
  })
})
