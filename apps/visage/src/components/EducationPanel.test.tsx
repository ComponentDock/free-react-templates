import { render, screen } from '@testing-library/react'
import { EducationPanel } from './EducationPanel'

describe('EducationPanel', () => {
  it('renders the section heading', () => {
    render(<EducationPanel />)
    expect(screen.getByText('Education')).toBeInTheDocument()
  })

  it('renders all education items', () => {
    render(<EducationPanel />)
    expect(screen.getByText('B.Sc. Computer Science')).toBeInTheDocument()
    expect(screen.getByText('M.Sc. Web Technologies')).toBeInTheDocument()
  })

  it('displays school names', () => {
    render(<EducationPanel />)
    expect(screen.getByText('University of London')).toBeInTheDocument()
    expect(screen.getByText('Imperial College London')).toBeInTheDocument()
  })

  it('displays year ranges', () => {
    render(<EducationPanel />)
    expect(screen.getByText('2013 – 2017')).toBeInTheDocument()
    expect(screen.getByText('2017 – 2019')).toBeInTheDocument()
  })
})
