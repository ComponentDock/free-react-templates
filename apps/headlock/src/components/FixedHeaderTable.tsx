import { cn } from '@free-react-templates/ui'

export interface FitnessClass {
  name: string
  type: string
  hours: string
  trainer: string
  spots: string
}

/** The 11-row fitness schedule shared by every variant. */
export const schedule: FitnessClass[] = [
  {
    name: 'Like a butterfly',
    type: 'Boxing',
    hours: '9:00 AM - 11:00 AM',
    trainer: 'Aaron Chapman',
    spots: '10',
  },
  {
    name: 'Mind & Body',
    type: 'Yoga',
    hours: '8:00 AM - 9:00 AM',
    trainer: 'Adam Stewart',
    spots: '15',
  },
  {
    name: 'Crit Cardio',
    type: 'Gym',
    hours: '9:00 AM - 10:00 AM',
    trainer: 'Aaron Chapman',
    spots: '10',
  },
  {
    name: 'Wheel Pose Full Posture',
    type: 'Yoga',
    hours: '7:00 AM - 8:30 AM',
    trainer: 'Donna Wilson',
    spots: '15',
  },
  {
    name: "Playful Dancer's Flow",
    type: 'Yoga',
    hours: '8:00 AM - 9:00 AM',
    trainer: 'Donna Wilson',
    spots: '10',
  },
  {
    name: 'Zumba Dance',
    type: 'Dance',
    hours: '5:00 PM - 7:00 PM',
    trainer: 'Donna Wilson',
    spots: '20',
  },
  {
    name: 'Cardio Blast',
    type: 'Gym',
    hours: '5:00 PM - 7:00 PM',
    trainer: 'Randy Porter',
    spots: '10',
  },
  {
    name: 'Pilates Reformer',
    type: 'Gym',
    hours: '8:00 AM - 9:00 AM',
    trainer: 'Randy Porter',
    spots: '10',
  },
  {
    name: 'Supple Spine and Shoulders',
    type: 'Yoga',
    hours: '6:30 AM - 8:00 AM',
    trainer: 'Randy Porter',
    spots: '15',
  },
  {
    name: 'Yoga for Divas',
    type: 'Yoga',
    hours: '9:00 AM - 10:00 AM',
    trainer: 'Donna Wilson',
    spots: '20',
  },
  {
    name: 'Virtual Cycle',
    type: 'Gym',
    hours: '8:00 AM - 9:00 AM',
    trainer: 'Randy Porter',
    spots: '20',
  },
]

/** The source renders each variant with the schedule duplicated twice (22 rows). */
const variantRows: FitnessClass[] = [...schedule, ...schedule]

export const headerLabels = ['Class name', 'Type', 'Hours', 'Trainer', 'Spots']

export interface TableVariant {
  id: string
  blockClass: string
  headWrapClass: string
  bodyWrapClass: string
  tableClass: string
  thClass: string
  tdClass: string
  trClass: string
  col1Class: string
}

const cardShadow = 'shadow-[0_0_40px_0_rgba(0,0,0,0.15)]'
const headBase = 'py-[18px] pr-2.5 text-[18px] font-bold leading-[1.4]'
const bodyBase = 'py-4 pr-2.5 text-[15px] font-normal leading-[1.4] text-cell'
const colWidths = ['w-[33%]', 'w-[13%]', 'w-[22%]', 'w-[19%]', 'w-[13%]']

export const variants: TableVariant[] = [
  {
    id: 'ver1',
    blockClass: cn(
      'relative mb-[110px] pt-[60px] overflow-hidden rounded-[10px] bg-white',
      cardShadow,
    ),
    headWrapClass: 'absolute top-0 left-0 w-full',
    bodyWrapClass: 'max-h-[585px] overflow-auto',
    tableClass: 'w-full text-left border-collapse',
    thClass: cn(headBase, 'text-white bg-head-ver1'),
    tdClass: bodyBase,
    trClass: 'even:bg-zebra',
    col1Class: 'pl-10',
  },
  {
    id: 'ver2',
    blockClass: cn(
      'relative mb-[110px] pt-[60px] overflow-hidden rounded-[10px] bg-white',
      cardShadow,
    ),
    headWrapClass: 'absolute top-0 left-0 w-full shadow-[0_5px_20px_0_rgba(0,0,0,0.1)]',
    bodyWrapClass: 'max-h-[585px] overflow-auto',
    tableClass: 'w-full text-left border-collapse',
    thClass: cn(headBase, 'text-accent-red bg-transparent'),
    tdClass: bodyBase,
    trClass: 'border-b border-hairline',
    col1Class: 'pl-10',
  },
  {
    id: 'ver3',
    blockClass: cn(
      'relative mb-[110px] pt-[60px] overflow-hidden rounded-[10px] bg-card-dark',
      cardShadow,
    ),
    headWrapClass: 'absolute top-0 left-0 w-full',
    bodyWrapClass: 'max-h-[585px] overflow-auto',
    tableClass: 'w-full text-left border-collapse',
    thClass: cn(headBase, 'text-[15px] uppercase text-accent-green bg-card-dark'),
    tdClass: cn(bodyBase, 'bg-row-dark'),
    trClass: '',
    col1Class: 'pl-10',
  },
  {
    id: 'ver4',
    blockClass: 'relative mb-[110px] pt-[60px] -mr-5 overflow-hidden bg-white',
    headWrapClass: 'absolute top-0 left-0 w-full pr-5',
    bodyWrapClass: 'max-h-[585px] overflow-auto pr-5',
    tableClass: 'w-full text-left border-collapse',
    thClass: cn(headBase, 'text-accent-blue bg-transparent border-b-2 border-hairline'),
    tdClass: bodyBase,
    trClass: 'border-b border-hairline',
    col1Class: 'pl-[7px]',
  },
  {
    id: 'ver5',
    blockClass: 'relative mb-[110px] pt-[60px] -mr-[30px] overflow-hidden bg-white',
    headWrapClass: 'absolute top-0 left-0 w-full pr-[30px]',
    bodyWrapClass: 'max-h-[585px] overflow-auto pr-[30px]',
    tableClass: 'w-full text-left border-separate border-spacing-x-0 border-spacing-y-[10px]',
    thClass:
      'py-[25px] pr-2.5 text-[14px] font-bold uppercase leading-[1.4] text-head-gray bg-transparent',
    tdClass:
      'py-[10px] pr-2.5 text-[15px] font-normal leading-[1.4] text-cell bg-row-gray border-x border-transparent first:rounded-l-[10px] last:rounded-r-[10px] hover:bg-row-hover hover:cursor-pointer',
    trClass: 'overflow-hidden rounded-[10px] border-b-[10px] border-white',
    col1Class: 'pl-10',
  },
]

export function FixedHeaderTable() {
  return (
    <>
      {variants.map((variant) => (
        <section key={variant.id} className={variant.blockClass} aria-label={variant.id}>
          {/* SIGNATURE: the header table is absolutely positioned OVER the
              scrollable body — the header stays locked while rows scroll. */}
          <div className={variant.headWrapClass}>
            <table className={variant.tableClass}>
              <thead>
                <tr>
                  {headerLabels.map((label, index) => (
                    <th
                      key={label}
                      scope="col"
                      className={cn(
                        variant.thClass,
                        colWidths[index],
                        index === 0 && variant.col1Class,
                      )}
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
            </table>
          </div>
          <div className={variant.bodyWrapClass}>
            <table className={variant.tableClass}>
              <tbody>
                {variantRows.map((row, rowIndex) => (
                  <tr key={`${variant.id}-${rowIndex}`} className={variant.trClass}>
                    {[row.name, row.type, row.hours, row.trainer, row.spots].map(
                      (value, colIndex) => (
                        <td
                          key={colIndex}
                          className={cn(
                            variant.tdClass,
                            colWidths[colIndex],
                            colIndex === 0 && variant.col1Class,
                          )}
                        >
                          {value}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
    </>
  )
}
