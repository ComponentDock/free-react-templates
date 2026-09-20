import { render, screen } from '@testing-library/react'
import Events from './Events'

describe('Events', () => {
  it('renders the section heading', () => {
    render(<Events />)
    expect(screen.getByRole('heading', { level: 2, name: /upcoming events/i })).toBeInTheDocument()
  })

  it('renders 3 event cards', () => {
    render(<Events />)
    expect(screen.getByText('Spanish Conversation Night')).toBeInTheDocument()
    expect(screen.getByText('Japanese Calligraphy Workshop')).toBeInTheDocument()
    expect(screen.getByText('French Cinema Screening')).toBeInTheDocument()
  })

  it('displays event dates', () => {
    render(<Events />)
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('22')).toBeInTheDocument()
    expect(screen.getByText('28')).toBeInTheDocument()
    expect(screen.getAllByText('Mar', { exact: true }).length).toBeGreaterThanOrEqual(1)
  })

  it('displays event categories', () => {
    render(<Events />)
    expect(screen.getByText('Social')).toBeInTheDocument()
    expect(screen.getByText('Workshop')).toBeInTheDocument()
    expect(screen.getByText('Culture')).toBeInTheDocument()
  })

  it('renders event images', () => {
    render(<Events />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
