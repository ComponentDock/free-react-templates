import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Sermons } from './Sermons'
import { sermons } from '../data'

describe('Sermons', () => {
  it('renders the section heading', () => {
    render(<Sermons />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Watch our sermons')
  })

  it('renders all sermon cards with unique titles', () => {
    render(<Sermons />)
    sermons.forEach((s) => {
      expect(screen.getByText(s.title)).toBeInTheDocument()
    })
  })

  it('renders speakers for each sermon', () => {
    render(<Sermons />)
    const josephCount = sermons.filter((s) => s.speaker === 'Pastor Joseph Meyer').length
    expect(screen.getAllByText('Pastor Joseph Meyer').length).toBe(josephCount)
    expect(screen.getByText('Dave Zuleger')).toBeInTheDocument()
  })

  it('renders play buttons for each sermon', () => {
    render(<Sermons />)
    const playButtons = screen.getAllByRole('button', { name: /^play/i })
    expect(playButtons.length).toBe(3)
  })

  it('renders the watch all sermons CTA', () => {
    render(<Sermons />)
    expect(screen.getByRole('link', { name: 'Watch all sermons' })).toBeInTheDocument()
  })
})
