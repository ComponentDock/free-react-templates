import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContentSection } from './ContentSection'

describe('ContentSection', () => {
  it('shows instruction text', () => {
    render(<ContentSection />)
    expect(
      screen.getByText('Please click the search icon toggle button top right.'),
    ).toBeInTheDocument()
  })

  it('text has light font weight', () => {
    render(<ContentSection />)
    const text = screen.getByText('Please click the search icon toggle button top right.')
    expect(text.className).toContain('font-light')
  })
})
