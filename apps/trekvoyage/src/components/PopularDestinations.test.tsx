import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { PopularDestinations } from './PopularDestinations'

const activeTitle = () =>
  screen.getAllByRole('figure').find((figure) => figure.dataset.active === 'true')?.textContent

describe('PopularDestinations', () => {
  it('renders the centered title with three photo cards and hover washes', () => {
    const { container } = render(<PopularDestinations />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Popular Destination' }),
    ).toBeInTheDocument()

    const figures = screen.getAllByRole('figure')
    expect(figures).toHaveLength(3)
    expect(figures[0]).toHaveAttribute('data-active', 'true')
    expect(screen.getByText('The White City')).toBeInTheDocument()
    expect(screen.getByText('Santorini, Greece')).toBeInTheDocument()
    expect(screen.getByText('Byodo-In Temple Ahuimanu')).toBeInTheDocument()
    expect(screen.getByText('Kaafu Atoll')).toBeInTheDocument()

    const images = container.querySelectorAll('figure img')
    expect(images[0]!).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/trekvoyage-dest-1/700/700',
    )
    expect(images[0]!.className).toContain('group-hover:scale-[1.07]')

    const washes = container.querySelectorAll('.teal-wash')
    expect(washes).toHaveLength(3)
    expect(washes[0]!.className).toContain('opacity-0')
  })

  it('pages through the cards with the arrows and wraps in both directions', () => {
    render(<PopularDestinations />)

    expect(activeTitle()).toContain('The White City')

    fireEvent.click(screen.getByRole('button', { name: 'Next destination' }))
    expect(activeTitle()).toContain('Byodo-In Temple Ahuimanu')

    fireEvent.click(screen.getByRole('button', { name: 'Next destination' }))
    fireEvent.click(screen.getByRole('button', { name: 'Next destination' }))
    expect(activeTitle()).toContain('The White City')

    fireEvent.click(screen.getByRole('button', { name: 'Previous destination' }))
    expect(activeTitle()).toContain('Kaafu Atoll')

    fireEvent.click(screen.getByRole('button', { name: 'Previous destination' }))
    expect(activeTitle()).toContain('Byodo-In Temple Ahuimanu')
  })
})
