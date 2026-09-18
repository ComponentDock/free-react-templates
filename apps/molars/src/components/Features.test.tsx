import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders all six feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Periodontology')).toBeInTheDocument()
    expect(screen.getByText('Tooth Whitening')).toBeInTheDocument()
    expect(screen.getByText('Preventative Care')).toBeInTheDocument()
    expect(screen.getByText('General Checkup')).toBeInTheDocument()
    expect(screen.getByText('First Aid Treatment')).toBeInTheDocument()
    expect(screen.getByText('Tooth Alignment')).toBeInTheDocument()
  })

  it('each feature has a description', () => {
    render(<Features />)
    expect(screen.getByText(/Expert gum disease treatment/)).toBeInTheDocument()
    expect(screen.getByText(/Professional whitening treatments/)).toBeInTheDocument()
    expect(screen.getByText(/Regular check-ups and cleanings/)).toBeInTheDocument()
    expect(screen.getByText(/Comprehensive oral examinations/)).toBeInTheDocument()
    expect(screen.getByText(/Emergency dental care/)).toBeInTheDocument()
    expect(screen.getByText(/Orthodontic solutions/)).toBeInTheDocument()
  })
})
