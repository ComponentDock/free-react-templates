import { render, screen } from '@testing-library/react'
import Instructors from './Instructors'

describe('Instructors', () => {
  it('renders the section heading', () => {
    render(<Instructors />)
    expect(screen.getByRole('heading', { level: 2, name: /meet our team/i })).toBeInTheDocument()
  })

  it('renders 3 instructor cards', () => {
    render(<Instructors />)
    expect(screen.getByText('Maria Garcia')).toBeInTheDocument()
    expect(screen.getByText('Takeshi Yamada')).toBeInTheDocument()
    expect(screen.getByText('Sophie Laurent')).toBeInTheDocument()
  })

  it('displays Teacher title for each instructor', () => {
    render(<Instructors />)
    const teacherTitles = screen.getAllByText('Teacher')
    expect(teacherTitles).toHaveLength(3)
  })

  it('displays instructor bios', () => {
    render(<Instructors />)
    expect(screen.getByText(/native spanish speaker/i)).toBeInTheDocument()
    expect(screen.getByText(/former business consultant/i)).toBeInTheDocument()
    expect(screen.getByText(/passionate about making french/i)).toBeInTheDocument()
  })

  it('displays instructor images', () => {
    render(<Instructors />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})
