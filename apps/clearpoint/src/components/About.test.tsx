import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the About Me heading, description and skill bars', () => {
    render(<About />)

    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Professional.*Passionate Designer/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/dedicated UI\/UX designer/i)).toBeInTheDocument()

    for (const skill of ['UI/UX Design', 'Web Development', 'Branding & Identity', 'Mobile Apps']) {
      expect(screen.getByText(skill)).toBeInTheDocument()
    }

    const image = document.querySelector('img[alt*="About John Clearpoint"]')
    expect(image).toBeInTheDocument()
  })

  it('displays skill percentages', () => {
    render(<About />)
    expect(screen.getByText('95%')).toBeInTheDocument()
    expect(screen.getByText('90%')).toBeInTheDocument()
    expect(screen.getByText('85%')).toBeInTheDocument()
    expect(screen.getByText('88%')).toBeInTheDocument()
  })
})
