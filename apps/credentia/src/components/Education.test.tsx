import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Education } from './Education'

describe('Education', () => {
  it('renders the section heading', () => {
    render(<Education />)
    expect(screen.getByText('Education')).toBeInTheDocument()
  })

  it('renders 2 education entries', () => {
    render(<Education />)
    expect(screen.getByText('2008')).toBeInTheDocument()
    expect(screen.getByText('2006')).toBeInTheDocument()
  })

  it('renders diploma and school for each entry', () => {
    render(<Education />)
    expect(screen.getByText('UI/UX Diploma')).toBeInTheDocument()
    expect(screen.getByText('Web Design Diploma')).toBeInTheDocument()
    expect(screen.getAllByText('Design College California')).toHaveLength(2)
  })
})
