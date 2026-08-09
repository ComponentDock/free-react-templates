import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Tours } from './Tours'

describe('Tours', () => {
  it('renders the eyebrow, heading and subtext', () => {
    render(<Tours />)
    expect(screen.getByText('Featured Tours')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Unforgettable Experiences' }),
    ).toBeInTheDocument()
  })

  it('renders all four tour cards with pricing', () => {
    render(<Tours />)
    expect(
      screen.getByRole('heading', { level: 3, name: 'Bali Cultural Journey' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Greek Island Hopping' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Peru Discovery' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Japan Explorer' })).toBeInTheDocument()
    expect(screen.getByText('7 days')).toBeInTheDocument()
    expect(screen.getByText('10 days')).toBeInTheDocument()
    expect(screen.getByText('8 days')).toBeInTheDocument()
    expect(screen.getByText('12 days')).toBeInTheDocument()
    expect(screen.getByText('$1299')).toBeInTheDocument()
    expect(screen.getByText('$2199')).toBeInTheDocument()
    expect(screen.getByText('$1899')).toBeInTheDocument()
    expect(screen.getByText('$3499')).toBeInTheDocument()
    expect(screen.getAllByText('$1599').length).toBe(1)
    expect(screen.getAllByText('$2499').length).toBe(1)
    expect(screen.getAllByText('$3999').length).toBe(1)
    expect(screen.getByText('Temple visits')).toBeInTheDocument()
    expect(screen.getByText('Santorini sunset')).toBeInTheDocument()
    expect(screen.getByText('Machu Picchu')).toBeInTheDocument()
    expect(screen.getByText('Kyoto temples')).toBeInTheDocument()
  })

  it('renders country chips and View buttons', () => {
    render(<Tours />)
    expect(screen.getByText('Bali, Indonesia')).toBeInTheDocument()
    expect(screen.getByText('Greece')).toBeInTheDocument()
    expect(screen.getByText('Peru')).toBeInTheDocument()
    expect(screen.getByText('Japan')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'View' }).length).toBe(4)
  })
})
