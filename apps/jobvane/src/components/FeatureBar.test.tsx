import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureBar } from './FeatureBar'

describe('FeatureBar', () => {
  it('renders all four feature cards', () => {
    render(<FeatureBar />)
    expect(screen.getByText('Search Millions of Jobs')).toBeInTheDocument()
    expect(screen.getByText('Easy To Manage Jobs')).toBeInTheDocument()
    expect(screen.getByText('Top Careers')).toBeInTheDocument()
    expect(screen.getByText('Search Expert Candidates')).toBeInTheDocument()
  })
})
