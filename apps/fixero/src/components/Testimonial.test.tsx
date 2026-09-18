import { render, screen } from '@testing-library/react'
import { Testimonial, type TestimonialProps } from './Testimonial'

const props: TestimonialProps = {
  quote: 'Great work!',
  name: 'John Smith',
  role: 'Homeowner',
  avatar: 'https://picsum.photos/seed/test/100/100',
}

describe('Testimonial', () => {
  it('renders the quote', () => {
    render(<Testimonial {...props} />)
    expect(screen.getByText(/Great work!/)).toBeInTheDocument()
  })

  it('renders name and role', () => {
    render(<Testimonial {...props} />)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('Homeowner')).toBeInTheDocument()
  })

  it('renders the avatar image', () => {
    render(<Testimonial {...props} />)
    const img = screen.getByRole('img', { name: 'John Smith' })
    expect(img).toHaveAttribute('src', props.avatar)
  })
})
