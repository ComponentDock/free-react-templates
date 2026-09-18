import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowseSpecialism } from './BrowseSpecialism'

describe('BrowseSpecialism', () => {
  it('renders heading and description', () => {
    render(<BrowseSpecialism />)
    expect(screen.getByText('Browse Job by Specialism')).toBeInTheDocument()
    expect(screen.getByText(/Explore job opportunities/)).toBeInTheDocument()
  })
})
