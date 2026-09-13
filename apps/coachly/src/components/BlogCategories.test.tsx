import { render, screen } from '@testing-library/react'
import { BlogCategories } from './BlogCategories'

describe('BlogCategories', () => {
  it('renders all 3 categories', () => {
    render(<BlogCategories />)
    expect(screen.getByText('Social Life')).toBeInTheDocument()
    expect(screen.getByText('Money & Finance')).toBeInTheDocument()
    expect(screen.getByText('Motivation')).toBeInTheDocument()
  })
})
