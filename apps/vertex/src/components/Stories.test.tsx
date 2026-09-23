import { render, screen } from '@testing-library/react'
import { Stories } from './Stories'

describe('Stories', () => {
  it('renders the section heading', () => {
    render(<Stories />)
    expect(screen.getByRole('heading', { level: 2, name: /stories/i })).toBeInTheDocument()
    // 04 appears in section heading and in a blog post — use getAllByText
    const fours = screen.getAllByText('04')
    expect(fours.length).toBeGreaterThanOrEqual(1)
  })

  it('renders all four blog posts', () => {
    render(<Stories />)
    // Robert Williams appears twice — use getAllByText
    const rw = screen.getAllByText('Robert Williams')
    expect(rw).toHaveLength(2)
    expect(screen.getByText('Jim Davis')).toBeInTheDocument()
    expect(screen.getByText('Ann Peterson')).toBeInTheDocument()
  })

  it('renders category tags', () => {
    render(<Stories />)
    expect(screen.getByText('Branding')).toBeInTheDocument()
    expect(screen.getByText('Tech')).toBeInTheDocument()
    const crafting = screen.getAllByText('Crafting')
    expect(crafting.length).toBeGreaterThanOrEqual(1)
  })

  it('renders a Go To Blog button', () => {
    render(<Stories />)
    expect(screen.getByRole('button', { name: /go to blog/i })).toBeInTheDocument()
  })
})
