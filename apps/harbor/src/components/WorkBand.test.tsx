import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WorkBand } from './WorkBand'

describe('WorkBand', () => {
  it('renders the overlapping band with a white title', () => {
    const { container } = render(<WorkBand />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toBe('How to build your website online today?')
    expect(heading.className).toContain('text-white')
    expect((container.firstElementChild as HTMLElement).className).toContain('-mt-[405px]')
  })

  it('renders the two builder and store items with a Read More CTA each', () => {
    render(<WorkBand />)
    expect(screen.getByText('Create your own website with our')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Web site builder' })).toBeInTheDocument()
    expect(screen.getByText('Easy create, manage & sell')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Online store' })).toBeInTheDocument()
    expect(screen.getByText(/needs no code/)).toBeInTheDocument()
    expect(screen.getByText(/Business plan and above/)).toBeInTheDocument()

    const ctas = screen.getAllByRole('link', { name: 'Read More' })
    expect(ctas).toHaveLength(2)
    expect(ctas[0]).toHaveAttribute('href', '#choose-plan')
  })
})
