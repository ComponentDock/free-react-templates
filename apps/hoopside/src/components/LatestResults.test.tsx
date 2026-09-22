import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestResults } from './LatestResults'

describe('LatestResults', () => {
  it('renders the section heading', () => {
    render(<LatestResults />)
    expect(screen.getByText('Latest Results')).toBeInTheDocument()
  })

  it('renders match data', () => {
    render(<LatestResults />)
    expect(screen.getAllByText('Costa Caribe').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Brooklyn Nets').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('119:86').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Join Our Team button', () => {
    render(<LatestResults />)
    expect(screen.getByText('Join Our Team')).toBeInTheDocument()
  })

  it('renders multiple match rows', () => {
    render(<LatestResults />)
    expect(screen.getByText('Jinotega')).toBeInTheDocument()
    expect(screen.getByText('San Isidro')).toBeInTheDocument()
  })
})
