import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RecentNews } from './RecentNews'

describe('RecentNews', () => {
  it('renders section heading', () => {
    render(<RecentNews />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Recent News')
  })

  it('renders three blog posts', () => {
    render(<RecentNews />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)
  })

  it('renders post titles', () => {
    render(<RecentNews />)
    expect(screen.getByText(/Creative Design Shapes/)).toBeInTheDocument()
    expect(screen.getByText(/Minimalist Web Design/)).toBeInTheDocument()
    expect(screen.getByText(/Scalable Design Systems/)).toBeInTheDocument()
  })

  it('renders author info', () => {
    render(<RecentNews />)
    expect(screen.getAllByText('Lora Palmer')).toHaveLength(3)
  })
})
