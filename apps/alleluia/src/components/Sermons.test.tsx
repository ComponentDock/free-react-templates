import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Sermons } from './Sermons'

describe('Sermons', () => {
  it('renders section heading', () => {
    render(<Sermons />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Recent Sermons')
  })

  it('renders sermon titles', () => {
    render(<Sermons />)
    expect(screen.getByText('Walking in Faith')).toBeInTheDocument()
    expect(screen.getByText('The Power of Prayer')).toBeInTheDocument()
    expect(screen.getByText('Grace Upon Grace')).toBeInTheDocument()
  })

  it('renders preacher names', () => {
    render(<Sermons />)
    expect(screen.getByText('Pastor John Brighton')).toBeInTheDocument()
    expect(screen.getByText('Pastor Julia Amber')).toBeInTheDocument()
    expect(screen.getByText('Pastor Ashley Young')).toBeInTheDocument()
  })

  it('renders sermon images', () => {
    render(<Sermons />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })

  it('renders dates', () => {
    render(<Sermons />)
    expect(screen.getByText('September 10, 2025')).toBeInTheDocument()
  })
})
