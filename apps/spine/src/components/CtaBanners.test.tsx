import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CtaBanners } from './CtaBanners'
import { ctaBanners } from '../data'

describe('CtaBanners', () => {
  it('renders two banner cards with their headlines and View Details buttons', () => {
    const { container } = render(<CtaBanners />)

    expect(container.querySelectorAll('img')).toHaveLength(0)
    expect(container.querySelectorAll('section > div > div > div')).toHaveLength(ctaBanners.length)

    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings).toHaveLength(2)
    expect(headings[0]!.textContent).toMatch(/The History of Phipino/)
    expect(headings[1]!.textContent).toMatch(/Wilma Mumduya/)

    expect(screen.getAllByRole('link', { name: 'View Details' })).toHaveLength(2)
  })
})
