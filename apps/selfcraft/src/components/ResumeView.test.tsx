import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ResumeView } from './ResumeView'

describe('ResumeView', () => {
  it('displays the Experience heading', () => {
    render(<ResumeView />)

    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings[0]).toHaveTextContent('Experience')
  })

  it('displays the Education heading', () => {
    render(<ResumeView />)

    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings[1]).toHaveTextContent('Education')
  })

  it('renders experience entries', () => {
    render(<ResumeView />)

    expect(screen.getByText('Senior Web Designer')).toBeInTheDocument()
    expect(screen.getByText('Web Designer')).toBeInTheDocument()
    expect(screen.getByText('Junior Designer')).toBeInTheDocument()
  })

  it('renders education entries', () => {
    render(<ResumeView />)

    expect(screen.getByText('Bachelor of Fine Arts')).toBeInTheDocument()
  })

  it('displays dates for entries', () => {
    render(<ResumeView />)

    expect(screen.getByText('2020 — Present')).toBeInTheDocument()
    expect(screen.getByText('2017 — 2020')).toBeInTheDocument()
    expect(screen.getByText('2015 — 2017')).toBeInTheDocument()
    expect(screen.getByText('2011 — 2015')).toBeInTheDocument()
  })

  it('displays company names', () => {
    render(<ResumeView />)

    expect(screen.getByText(/Creative Studio/)).toBeInTheDocument()
    expect(screen.getByText(/Digital Agency/)).toBeInTheDocument()
    expect(screen.getByText(/Startup Inc./)).toBeInTheDocument()
    expect(screen.getByText(/Design University/)).toBeInTheDocument()
  })
})
