import { render, screen } from '@testing-library/react'
import { RemarkableWorks } from './RemarkableWorks'
import { describe, expect, it } from 'vitest'

describe('RemarkableWorks', () => {
  it('renders section title', () => {
    render(<RemarkableWorks />)
    expect(screen.getByText('Remarkable Works')).toBeInTheDocument()
  })

  it('renders three portfolio items with View Project links', () => {
    render(<RemarkableWorks />)
    const viewLinks = screen.getAllByText('View Project')
    expect(viewLinks).toHaveLength(3)
  })

  it('renders three images', () => {
    const { container } = render(<RemarkableWorks />)
    const imgs = container.querySelectorAll('img')
    expect(imgs.length).toBe(3)
  })

  it('renders Vector Illustration titles', () => {
    render(<RemarkableWorks />)
    const titles = screen.getAllByText('Vector Illustration')
    expect(titles.length).toBe(3)
  })
})
