import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Courses } from './Courses'

describe('Courses', () => {
  it('shows the heading and the five course cards with price, rating and student count', () => {
    render(<Courses />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Master the Markets' }),
    ).toBeInTheDocument()

    const titles = [
      'Crypto Trading Masterclass: From Zero to Hero',
      'Day Trading Stocks: The Complete System',
      'Options Trading: The Wheel Strategy',
      'Algorithmic Trading with Python',
      'Technical Analysis: Complete Price Action',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
      expect(screen.getByAltText(`${title} thumbnail`)).toHaveAttribute(
        'src',
        expect.stringContaining('picsum.photos/seed/ticker-'),
      )
    }

    // $67 and $79 each appear on two course cards
    expect(screen.getAllByText('$67')).toHaveLength(2)
    expect(screen.getAllByText('$79')).toHaveLength(2)
    expect(screen.getByText('$99')).toBeInTheDocument()
    // 4.9/5 appears on two course cards
    expect(screen.getAllByText('4.9/5')).toHaveLength(2)
    expect(screen.getByText(/18,500 students/)).toBeInTheDocument()

    expect(screen.getAllByRole('link', { name: 'Enroll' })).toHaveLength(5)
  })
})
