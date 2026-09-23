import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Milestones } from './Milestones'

describe('Milestones', () => {
  it('renders 4 statistic items', () => {
    render(<Milestones />)
    expect(screen.getByText('48')).toBeInTheDocument()
    expect(screen.getByText('7')).toBeInTheDocument()
    expect(screen.getByText('23K')).toBeInTheDocument()
    expect(screen.getByText('19')).toBeInTheDocument()
  })

  it('renders all stat labels', () => {
    render(<Milestones />)
    expect(screen.getByText('VIDEO GAMES')).toBeInTheDocument()
    expect(screen.getByText('AWARDS WON')).toBeInTheDocument()
    expect(screen.getByText('Pictures taken')).toBeInTheDocument()
    expect(screen.getByText('Video tutorials')).toBeInTheDocument()
  })

  it('renders icons for each stat', () => {
    render(<Milestones />)
    const icons = document.querySelectorAll('svg')
    expect(icons.length).toBeGreaterThanOrEqual(4)
  })
})
