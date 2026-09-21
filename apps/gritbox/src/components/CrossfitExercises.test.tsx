import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CrossfitExercises } from './CrossfitExercises'

describe('CrossfitExercises', () => {
  it('renders the section heading', () => {
    render(<CrossfitExercises />)
    expect(screen.getByText('Crossfit Exercises')).toBeInTheDocument()
  })

  it('renders all 6 exercise cards', () => {
    render(<CrossfitExercises />)
    expect(screen.getByText('Weight Lifting')).toBeInTheDocument()
    expect(screen.getByText('Walking Exercise')).toBeInTheDocument()
    expect(screen.getByText('Belly Crunches')).toBeInTheDocument()
    expect(screen.getByText('Partner Training')).toBeInTheDocument()
    expect(screen.getByText('Exercise Rolling')).toBeInTheDocument()
    expect(screen.getByText('Lunge Plank')).toBeInTheDocument()
  })

  it('renders Learn More links for each exercise', () => {
    render(<CrossfitExercises />)
    const links = screen.getAllByText('Learn More')
    expect(links.length).toBe(6)
  })

  it('renders exercise descriptions', () => {
    render(<CrossfitExercises />)
    expect(screen.getByText(/Build raw strength/)).toBeInTheDocument()
    expect(screen.getByText(/Low-impact cardio/)).toBeInTheDocument()
  })
})
