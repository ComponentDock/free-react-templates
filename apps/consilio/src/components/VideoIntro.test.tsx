import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { VideoIntro } from './VideoIntro'

describe('VideoIntro', () => {
  it('shows the thumbnail, play button, heading, and paragraph', () => {
    render(<VideoIntro />)

    expect(screen.getByRole('img', { name: /transformation plan/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'See How We Transform Businesses' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Watch how our teams move a company/)).toBeInTheDocument()
  })

  it('lists the four features with check icons', () => {
    render(<VideoIntro />)

    expect(screen.getByText(/Full diagnostic of your current operating model/)).toBeInTheDocument()
    expect(screen.getByText(/prioritized roadmap/)).toBeInTheDocument()
    expect(screen.getByText(/Benchmarks against best-in-class peers/)).toBeInTheDocument()
    expect(screen.getByText(/Quarterly reviews/)).toBeInTheDocument()
  })
})
