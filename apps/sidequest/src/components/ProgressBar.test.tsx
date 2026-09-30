import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProgressBar from './ProgressBar'

describe('ProgressBar', () => {
  it('renders the percentage label', () => {
    render(<ProgressBar percentage={25} />)
    expect(screen.getByText('25%')).toBeInTheDocument()
  })

  it('renders with correct width style', () => {
    render(<ProgressBar percentage={50} />)
    const fill = screen.getByText('50%').previousElementSibling?.firstElementChild as HTMLElement
    expect(fill).toHaveStyle({ width: '50%' })
  })

  it('renders 0% correctly', () => {
    render(<ProgressBar percentage={0} />)
    expect(screen.getByText('0%')).toBeInTheDocument()
  })

  it('renders 100% correctly', () => {
    render(<ProgressBar percentage={100} />)
    expect(screen.getByText('100%')).toBeInTheDocument()
  })
})
