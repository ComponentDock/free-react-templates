import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestNews } from './LatestNews'

describe('LatestNews', () => {
  it('renders the section heading', () => {
    render(<LatestNews />)
    expect(screen.getByText(/Latest/)).toBeInTheDocument()
  })

  it('renders all 3 blog post cards', () => {
    render(<LatestNews />)
    expect(screen.getByText("Benjamin Franklin's Method Of Habit Formation")).toBeInTheDocument()
    expect(screen.getByText('How To Set Intentions That Energize You')).toBeInTheDocument()
    expect(screen.getByText('Burning Desire: Golden Key Or Red Herring')).toBeInTheDocument()
  })

  it('displays post metadata', () => {
    render(<LatestNews />)
    expect(screen.getByText('By Polly Williams')).toBeInTheDocument()
    expect(screen.getByText('By Mattie Ramirez')).toBeInTheDocument()
    expect(screen.getByText('By Nicholas Brewer')).toBeInTheDocument()
  })

  it('displays dates and comment counts', () => {
    render(<LatestNews />)
    const dates = screen.getAllByText('Dec 19, 2024')
    expect(dates.length).toBe(3)
    const comments = screen.getAllByText('3 Comments')
    expect(comments.length).toBe(3)
  })
})
