import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SeasonalTips } from './SeasonalTips'

describe('SeasonalTips', () => {
  it('renders the section heading', () => {
    render(<SeasonalTips />)

    expect(screen.getByRole('heading', { name: 'Seasonal Lawn Care Tips' })).toBeInTheDocument()
  })

  it('renders all four seasonal tip cards', () => {
    render(<SeasonalTips />)

    expect(screen.getByText('Spring')).toBeInTheDocument()
    expect(screen.getByText('Summer')).toBeInTheDocument()
    expect(screen.getByText('Autumn')).toBeInTheDocument()
    expect(screen.getByText('Winter')).toBeInTheDocument()
  })

  it('renders card titles and descriptions', () => {
    render(<SeasonalTips />)

    expect(screen.getByText('Spring Lawn Revival')).toBeInTheDocument()
    expect(screen.getByText('Summer Maintenance')).toBeInTheDocument()
    expect(screen.getByText('Fall Preparation')).toBeInTheDocument()
    expect(screen.getByText('Winter Protection')).toBeInTheDocument()
  })

  it('renders all four seasonal images', () => {
    render(<SeasonalTips />)

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
  })
})
