import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SocialStep } from './SocialStep'
import { INITIAL_DATA } from '../types'

describe('SocialStep', () => {
  const defaultProps = {
    data: INITIAL_DATA,
    onChange: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders all form fields', () => {
    render(<SocialStep {...defaultProps} />)
    expect(screen.getByPlaceholderText('Twitter')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Facebook')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Google Plus')).toBeInTheDocument()
  })

  it('renders heading', () => {
    render(<SocialStep {...defaultProps} />)
    expect(screen.getByText('Social profiles')).toBeInTheDocument()
  })

  it('renders text inputs', () => {
    render(<SocialStep {...defaultProps} />)
    expect(screen.getByPlaceholderText('Twitter')).toHaveAttribute('type', 'text')
    expect(screen.getByPlaceholderText('Facebook')).toHaveAttribute('type', 'text')
    expect(screen.getByPlaceholderText('Google Plus')).toHaveAttribute('type', 'text')
  })

  it('calls onChange when twitter is typed', async () => {
    const user = userEvent.setup()
    render(<SocialStep {...defaultProps} />)
    await user.type(screen.getByPlaceholderText('Twitter'), '@')
    expect(defaultProps.onChange).toHaveBeenCalledWith('twitter', '@')
  })

  it('calls onChange when facebook is typed', async () => {
    const user = userEvent.setup()
    render(<SocialStep {...defaultProps} />)
    await user.type(screen.getByPlaceholderText('Facebook'), 'f')
    expect(defaultProps.onChange).toHaveBeenCalledWith('facebook', 'f')
  })

  it('calls onChange when google is typed', async () => {
    const user = userEvent.setup()
    render(<SocialStep {...defaultProps} />)
    await user.type(screen.getByPlaceholderText('Google Plus'), 'g')
    expect(defaultProps.onChange).toHaveBeenCalledWith('google', 'g')
  })

  it('displays provided field values', () => {
    render(
      <SocialStep
        {...defaultProps}
        data={{
          ...INITIAL_DATA,
          twitter: '@handle',
          facebook: 'fbpage',
          google: 'gplus',
        }}
      />,
    )
    expect(screen.getByPlaceholderText('Twitter')).toHaveValue('@handle')
    expect(screen.getByPlaceholderText('Facebook')).toHaveValue('fbpage')
    expect(screen.getByPlaceholderText('Google Plus')).toHaveValue('gplus')
  })
})
