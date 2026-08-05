import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureBand } from './FeatureBand'

describe('FeatureBand', () => {
  it('renders the heading, blurb, and the two feature rows', () => {
    render(<FeatureBand />)

    expect(
      screen.getByRole('heading', { level: 2, name: /Easy to Use Mobile Application/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Add New Project' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Generating Leads' })).toBeInTheDocument()
    expect(screen.getByText(/Greater male Shall There faced earth/)).toBeInTheDocument()
  })
})
