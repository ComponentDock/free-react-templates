import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ExtraDetailsStep } from './ExtraDetailsStep'
import { INITIAL_DATA } from '../types'

describe('ExtraDetailsStep', () => {
  const defaultProps = {
    data: INITIAL_DATA,
    onChange: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the label', () => {
    render(<ExtraDetailsStep {...defaultProps} />)
    expect(screen.getByLabelText('Room description')).toBeInTheDocument()
  })

  it('renders textarea with placeholder', () => {
    render(<ExtraDetailsStep {...defaultProps} />)
    const textarea = screen.getByPlaceholderText('Eg : The room must have air conditional . . .')
    expect(textarea).toBeInTheDocument()
    expect(textarea.tagName).toBe('TEXTAREA')
  })

  it('calls onChange when text is typed', async () => {
    const user = userEvent.setup()
    render(<ExtraDetailsStep {...defaultProps} />)
    await user.type(screen.getByLabelText('Room description'), 'Need a quiet room')
    expect(defaultProps.onChange).toHaveBeenCalledWith('roomDescription', 'N')
  })

  it('displays provided value', () => {
    render(
      <ExtraDetailsStep
        {...defaultProps}
        data={{ ...INITIAL_DATA, roomDescription: 'Test description' }}
      />,
    )
    expect(screen.getByLabelText('Room description')).toHaveValue('Test description')
  })
})
