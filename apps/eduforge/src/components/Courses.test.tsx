import { render, screen } from '@testing-library/react'
import { Courses } from './Courses'

describe('Courses', () => {
  it('renders section heading', () => {
    render(<Courses />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Explore Courses')
  })

  it('renders 8 course cards', () => {
    render(<Courses />)
    const titles = screen.getAllByText(
      /beginner|introduction|ultimate|complete|tips|need|started|typography/i,
    )
    expect(titles.length).toBeGreaterThanOrEqual(8)
  })

  it('renders course titles', () => {
    render(<Courses />)
    expect(
      screen.getByText('Beginner to Pro in Excel: Financial Modeling and Valuation'),
    ).toBeInTheDocument()
    expect(screen.getByText('Introduction to CSS')).toBeInTheDocument()
  })

  it('renders category badges', () => {
    render(<Courses />)
    expect(screen.getByText('Business')).toBeInTheDocument()
    expect(screen.getAllByText('Web Design').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Photography')).toBeInTheDocument()
  })

  it('renders price badges', () => {
    render(<Courses />)
    const freeBadges = screen.getAllByText('Free')
    expect(freeBadges.length).toBeGreaterThanOrEqual(5)
    const premiumBadges = screen.getAllByText('Premium')
    expect(premiumBadges.length).toBeGreaterThanOrEqual(2)
  })

  it('renders More Courses button', () => {
    render(<Courses />)
    expect(screen.getByRole('link', { name: /more courses/i })).toBeInTheDocument()
  })
})
