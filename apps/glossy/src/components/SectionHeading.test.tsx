import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionHeading } from './SectionHeading'
import { areaHeadingSubtitle } from '../data'

describe('SectionHeading', () => {
  it('renders the title with the coral underline and the subtitle', () => {
    render(<SectionHeading title="Editor Picks" />)
    expect(screen.getByRole('heading', { level: 3, name: 'Editor Picks' })).toBeInTheDocument()
    expect(screen.getByText(areaHeadingSubtitle)).toBeInTheDocument()
  })
})
