import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProgressBar } from './ProgressBar'

describe('ProgressBar', () => {
  it('renders step 1 and 3 markers on step 1', () => {
    render(<ProgressBar step={0} total={3} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('renders step 2 marker on step 2', () => {
    render(<ProgressBar step={1} total={3} />)
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('renders only step 3 markers on step 3', () => {
    render(<ProgressBar step={2} total={3} />)
    const threes = screen.getAllByText('3')
    expect(threes.length).toBe(2)
    expect(screen.queryByText('2')).not.toBeInTheDocument()
    expect(screen.queryByText('1')).not.toBeInTheDocument()
  })

  it('renders empty current marker when step >= total', () => {
    render(<ProgressBar step={3} total={3} />)
    const spans = screen.getAllByText('3')
    expect(spans.length).toBe(1)
  })
})
