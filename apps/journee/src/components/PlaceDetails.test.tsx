import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { detailsParagraph, detailsTitle, viewAllLabel } from '../data'
import { PlaceDetails } from './PlaceDetails'

describe('PlaceDetails', () => {
  it('renders the text block, two photos, and the view-all square', () => {
    const { container } = render(<PlaceDetails />)
    expect(screen.getByRole('heading', { name: detailsTitle })).toBeInTheDocument()
    expect(screen.getByText(detailsParagraph)).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(2)
    expect(screen.getByRole('link', { name: viewAllLabel })).toBeInTheDocument()
  })
})
