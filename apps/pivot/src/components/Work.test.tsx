import { render, screen } from '@testing-library/react'
import { Work } from './Work'

describe('Work', () => {
  it('renders the section heading', () => {
    render(<Work />)
    expect(screen.getByText('Work')).toBeInTheDocument()
    expect(screen.getByText('Happy spending my time to this projects')).toBeInTheDocument()
  })

  it('renders portfolio items with titles and tags', () => {
    render(<Work />)
    expect(screen.getAllByText('Playtime Website Manager').length).toBe(2)
    expect(screen.getByText('Race Mobile Application')).toBeInTheDocument()
    expect(screen.getAllByText('UI/UX, Art Direction').length).toBe(3)
  })

  it('renders See details buttons', () => {
    render(<Work />)
    const buttons = screen.getAllByText('See details')
    expect(buttons.length).toBeGreaterThan(0)
  })
})
