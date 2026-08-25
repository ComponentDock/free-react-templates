import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PracticeArea } from './PracticeArea'

describe('PracticeArea', () => {
  it('renders section heading', () => {
    render(<PracticeArea />)
    expect(screen.getByText('Practice Area')).toBeInTheDocument()
  })

  it('renders all 12 practice area items', () => {
    render(<PracticeArea />)
    const items = screen.getAllByText(
      /Asset Searches|Background Investigations|Business Due Diligence|Civil Investigations|Criminal Defense Investigations/,
    )
    expect(items.length).toBe(12)
  })

  it('renders numbered indicators', () => {
    render(<PracticeArea />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
  })

  it('has a section with id practice-area', () => {
    render(<PracticeArea />)
    expect(document.getElementById('practice-area')).toBeInTheDocument()
  })
})
