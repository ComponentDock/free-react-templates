import { render, screen } from '@testing-library/react'
import { ExperiencePanel } from './ExperiencePanel'

describe('ExperiencePanel', () => {
  it('renders the section heading', () => {
    render(<ExperiencePanel />)
    expect(screen.getByText('Work Experience')).toBeInTheDocument()
  })

  it('renders all experience items', () => {
    render(<ExperiencePanel />)
    expect(screen.getByText('Senior Frontend Developer')).toBeInTheDocument()
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument()
    expect(screen.getByText('Junior Developer')).toBeInTheDocument()
  })

  it('displays company names', () => {
    render(<ExperiencePanel />)
    expect(screen.getByText('TechCorp Inc.')).toBeInTheDocument()
    expect(screen.getByText('Digital Agency Co.')).toBeInTheDocument()
    expect(screen.getByText('StartupLab')).toBeInTheDocument()
  })

  it('displays year ranges', () => {
    render(<ExperiencePanel />)
    expect(screen.getByText('2021 – Present')).toBeInTheDocument()
    expect(screen.getByText('2019 – 2021')).toBeInTheDocument()
    expect(screen.getByText('2017 – 2019')).toBeInTheDocument()
  })
})
