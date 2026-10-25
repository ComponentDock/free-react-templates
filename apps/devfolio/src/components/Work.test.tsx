import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { PROJECTS } from '../content'
import { Work } from './Work'

describe('Work', () => {
  it('renders the section heading and the right-hand lede', () => {
    render(<Work onOpen={vi.fn()} />)
    expect(screen.getByText('SELECTED WORK / 2026')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'From a problemto a working thing.',
    )
    expect(screen.getByText(/Two small frontend projects/)).toBeInTheDocument()
  })

  it('renders both project cards with name, blurb, tags and placeholder art', () => {
    const { container } = render(<Work onOpen={vi.fn()} />)
    PROJECTS.forEach((project) => {
      expect(screen.getByRole('heading', { level: 3, name: project.name })).toBeInTheDocument()
      expect(screen.getByText(project.blurb)).toBeInTheDocument()
      project.tags.forEach((tag) => {
        expect(screen.getAllByText(tag).length).toBeGreaterThan(0)
      })
    })

    const images = Array.from(container.querySelectorAll('img'))
    expect(images).toHaveLength(2)
    expect(images[0]).toHaveAttribute('src', 'https://picsum.photos/seed/devfolio-1/1200/833')
    expect(images[0]).toHaveAttribute('alt', '')
  })

  it('opens the case study for the card that was clicked', () => {
    const onOpen = vi.fn()
    render(<Work onOpen={onOpen} />)

    const buttons = screen.getAllByRole('button', { name: /Read the case study/ })
    fireEvent.click(buttons[1]!)

    expect(onOpen).toHaveBeenCalledWith(PROJECTS[1], 'case', buttons[1])
  })

  it('opens the working demo for the card that was clicked', () => {
    const onOpen = vi.fn()
    render(<Work onOpen={onOpen} />)

    const buttons = screen.getAllByRole('button', { name: 'Try the demo' })
    fireEvent.click(buttons[0]!)

    expect(onOpen).toHaveBeenCalledWith(PROJECTS[0], 'demo', buttons[0])
  })
})
