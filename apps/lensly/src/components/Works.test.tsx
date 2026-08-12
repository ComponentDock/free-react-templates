import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WORKS } from '../data'
import { Works } from './Works'

describe('Works', () => {
  it('renders the centered header with amber eyebrow and serif heading', () => {
    render(<Works />)
    expect(screen.getByText('My Works')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'See My Works' })).toBeInTheDocument()
  })

  it('renders twelve portfolio tiles with images and hover overlays', () => {
    const { container } = render(<Works />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(WORKS.length)
    for (const work of WORKS) {
      expect(screen.getByAltText(work.label)).toBeInTheDocument()
    }

    const firstOverlay = container
      .querySelector('img')
      ?.parentElement?.querySelector('.bg-black\\/0')
    expect(firstOverlay?.className).toContain('group-hover:bg-black/40')
    expect(firstOverlay?.className).toContain('group-focus-within:bg-black/40')
    expect(container.querySelector('img')?.className).toContain('group-hover:scale-110')
  })

  it('shows a centered icon and label that fade in on hover', () => {
    render(<Works />)
    const label = screen.getByText('Wedding Photography')
    expect(label.className).toContain('text-white')
    const fadeLayer = label.parentElement
    expect(fadeLayer?.className).toContain('group-hover:opacity-100')
    expect(fadeLayer?.className).toContain('opacity-0')
  })
})
