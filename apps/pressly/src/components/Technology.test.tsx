import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Technology } from './Technology'
import {
  technologyTitle,
  techLeft,
  techCenter,
  techRight,
  playVideoLabel,
  viewAllLabel,
} from '../data'

describe('Technology', () => {
  it('renders the section heading and View All link', () => {
    render(<Technology />)
    expect(screen.getByRole('heading', { name: technologyTitle })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: viewAllLabel })).toBeInTheDocument()
  })

  it('renders left and right small articles', () => {
    render(<Technology />)
    for (const article of [...techLeft, ...techRight]) {
      expect(screen.getByText(article.title)).toBeInTheDocument()
    }
  })

  it('renders the center slider with play button', () => {
    render(<Technology />)
    expect(screen.getByText(techCenter.title)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: playVideoLabel })).toBeInTheDocument()
  })
})
