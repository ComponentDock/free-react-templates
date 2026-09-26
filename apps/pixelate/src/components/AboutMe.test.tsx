import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutMe } from './AboutMe'

describe('AboutMe', () => {
  it('renders the section heading', () => {
    render(<AboutMe />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<AboutMe />)
    expect(screen.getByText(/passionate digital product designer/)).toBeInTheDocument()
  })

  it('renders all three skill bars', () => {
    render(<AboutMe />)
    expect(screen.getByText('User Interface Design')).toBeInTheDocument()
    expect(screen.getByText('User Experience')).toBeInTheDocument()
    expect(screen.getByText('Illustration')).toBeInTheDocument()
  })

  it('displays correct skill percentages', () => {
    render(<AboutMe />)
    expect(screen.getByText('60%')).toBeInTheDocument()
    expect(screen.getByText('89%')).toBeInTheDocument()
    expect(screen.getByText('95%')).toBeInTheDocument()
  })

  it('renders progress bars with correct widths', () => {
    render(<AboutMe />)
    const progressBars = screen.getAllByRole('progressbar')
    expect(progressBars).toHaveLength(3)
    expect(progressBars[0]).toHaveStyle({ width: '60%' })
    expect(progressBars[1]).toHaveStyle({ width: '89%' })
    expect(progressBars[2]).toHaveStyle({ width: '95%' })
  })
})
