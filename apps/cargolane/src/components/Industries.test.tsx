import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { INDUSTRIES } from '../data/content'
import { Industries } from './Industries'

describe('Industries', () => {
  it('shows the industry tiles with white overlay titles', () => {
    render(<Industries />)
    expect(screen.getByRole('heading', { level: 2, name: 'Industries' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Storage' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Air Transports' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Cargo Transports' })).toBeInTheDocument()
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
    for (const image of images) {
      expect(image.getAttribute('src')).toContain('picsum.photos/seed/cargolane-industry-')
    }
  })

  it('rotates tiles with labeled prev/next controls and wraps around', () => {
    render(<Industries />)
    fireEvent.click(screen.getByRole('button', { name: 'Next industries' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Air Transports' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Cargo Ship' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Previous industries' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Storage' })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Previous industries' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Road Freight' })).toBeInTheDocument()
    expect(INDUSTRIES).toHaveLength(6)
  })

  it('collapses tiles progressively on narrower layouts', () => {
    render(<Industries />)
    const articles = screen.getAllByRole('img').map((img) => img.closest('article'))
    expect(articles[0]?.className).toBe('')
    expect(articles[1]?.className).toContain('hidden sm:block')
    expect(articles[2]?.className).toContain('hidden lg:block')
  })
})
