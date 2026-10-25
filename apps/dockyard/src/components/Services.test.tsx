import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'
import { services } from '../data'

describe('Services', () => {
  it('lists six services in a three-column grid on the grey band', () => {
    const { container } = render(<Services />)

    const section = container.querySelector('#services') as HTMLElement
    expect(section).toHaveClass('bg-surface')

    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(services.length)
    expect(screen.getAllByRole('list')[0]).toHaveClass('lg:grid-cols-3', 'md:grid-cols-2')

    for (const service of services) {
      expect(screen.getByRole('heading', { level: 3, name: service.title })).toHaveClass(
        'uppercase',
        'text-ink',
      )
      expect(screen.getByText(service.blurb)).toBeInTheDocument()
    }
  })

  it('fills a card white with a blue border on hover', () => {
    render(<Services />)

    const card = screen.getAllByRole('listitem')[0] as HTMLElement
    expect(card).toHaveClass('border-transparent', 'hover:bg-white', 'hover:border-brand')
  })

  it('opens with the 48px blue heading that keeps its sentence case', () => {
    render(<Services />)

    const heading = screen.getByRole('heading', { level: 2, name: 'Services' })
    expect(heading).toHaveClass('text-brand', 'normal-case', 'lg:text-[48px]')
  })

  it('renders no carousel dots', () => {
    render(<Services />)

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
