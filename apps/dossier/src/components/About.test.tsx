import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'
import { aboutBio, skills } from '../data'

describe('About', () => {
  it('renders a white card over the photo background with the label, bio, and button', () => {
    render(<About />)
    const section = screen.getByRole('region', { name: 'About' })
    expect(section.style.backgroundImage).toContain('dossier-desk')

    expect(screen.getByText(/ABOUT MYSELF/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: aboutBio })).toBeInTheDocument()
    const download = screen.getByRole('link', { name: 'Download Resume' })
    expect(download).toHaveAttribute('href', '#contact')
    expect(download.className).toContain('bg-brand-green')
    expect(screen.getByText(/turn fuzzy ideas into sharp/)).toBeInTheDocument()
  })

  it('renders four labeled progress bars with the matching values', () => {
    render(<About />)
    skills.forEach((skill) => {
      const bar = screen.getByRole('progressbar', { name: skill.label })
      expect(bar).toHaveAttribute('aria-valuenow', String(skill.value))
      expect(bar).toHaveAttribute('aria-valuemax', '100')
    })
    expect(screen.getAllByRole('progressbar')).toHaveLength(4)
    expect(screen.getByText('90%')).toBeInTheDocument()
    expect(screen.getByText('80%')).toBeInTheDocument()
    expect(screen.getByText('75%')).toBeInTheDocument()
    expect(screen.getByText('85%')).toBeInTheDocument()
  })
})
