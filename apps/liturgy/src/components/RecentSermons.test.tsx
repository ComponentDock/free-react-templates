import { render, screen } from '@testing-library/react'
import { RecentSermons } from './RecentSermons'

describe('RecentSermons', () => {
  it('renders the section heading', () => {
    render(<RecentSermons />)
    expect(screen.getByText('Recent Sermons')).toBeInTheDocument()
  })

  it('renders the subheading', () => {
    render(<RecentSermons />)
    expect(screen.getByText('Listen Our Sermons')).toBeInTheDocument()
  })

  it('renders sermon titles', () => {
    render(<RecentSermons />)
    expect(screen.getByText('Arise, Shine')).toBeInTheDocument()
    expect(screen.getByText('Filled in Him')).toBeInTheDocument()
    expect(screen.getByText('Jehovah the Creator')).toBeInTheDocument()
  })

  it('renders sermon metadata', () => {
    render(<RecentSermons />)
    expect(screen.getAllByText(/by Luis Matthew/)).toHaveLength(3)
  })

  it('renders audio players', () => {
    render(<RecentSermons />)
    const audios = document.querySelectorAll('audio')
    expect(audios).toHaveLength(3)
  })

  it('renders sermon cards in a grid', () => {
    render(<RecentSermons />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(3)
  })
})
