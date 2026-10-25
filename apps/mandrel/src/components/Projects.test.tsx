import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Projects } from './Projects'
import { PROJECTS, PROJECTS_COPY } from '../content'

describe('Projects', () => {
  it('renders three job cards', () => {
    render(<Projects />)
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
    PROJECTS.forEach((project) => {
      expect(screen.getByRole('heading', { level: 3, name: project.title })).toBeInTheDocument()
    })
  })

  it('ends every card in a value band and a duration', () => {
    render(<Projects />)
    expect(screen.getAllByText(PROJECTS_COPY.valueLabel)).toHaveLength(3)
    expect(screen.getAllByText(PROJECTS_COPY.durationLabel)).toHaveLength(3)
    PROJECTS.forEach((project) => {
      expect(screen.getByText(project.value)).toBeInTheDocument()
      expect(screen.getByText(project.duration)).toBeInTheDocument()
    })
  })

  it('keeps the sector eyebrow, blurb and link grammar', () => {
    render(<Projects />)
    expect(screen.getByText('Healthcare')).toBeInTheDocument()
    expect(screen.getByText('Food and beverage')).toBeInTheDocument()
    expect(screen.getByText(PROJECTS[0]!.blurb)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: PROJECTS[0]!.title })).toHaveAttribute('href', '#contact')
  })

  it('uses one 4:3 placeholder per card and a lazy load', () => {
    render(<Projects />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
    images.forEach((image) => {
      expect(image.className).toContain('aspect-[4/3]')
      expect(image.getAttribute('loading')).toBe('lazy')
    })
    expect(images[1]!.getAttribute('src')).toContain('seed/mandrel-dairy/800/600')
  })

  it('sits on the grey ground with the band copy above the list', () => {
    const { container } = render(<Projects />)
    expect((container.querySelector('section') as HTMLElement).className).toContain('bg-ink-50')
    expect(screen.getByRole('heading', { level: 2, name: PROJECTS_COPY.heading })).toBeVisible()
    expect(screen.getByText(PROJECTS_COPY.lede)).toBeInTheDocument()
  })
})
