import { render, screen } from '@testing-library/react'
import { TopHeader } from './TopHeader'

describe('TopHeader', () => {
  it('renders breaking news items', () => {
    render(<TopHeader />)
    expect(screen.getByText('Hello World!')).toBeInTheDocument()
    expect(screen.getByText('Welcome to the Palatable Family.')).toBeInTheDocument()
    expect(screen.getByText('Hello Delicious!')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<TopHeader />)
    expect(screen.getByLabelText('Pinterest')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Behance')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })
})
