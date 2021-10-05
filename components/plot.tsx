import { ethers } from 'ethers'
import { FONT_WIDTH, FONT_HEIGHT, FONT_SCALE_FACTOR, MASK } from '../utils/constants'
import { ascii } from '../utils/encoding'

const SIZE = 4

const SCALE = 10

export default function Plot(props: { value: string }) {
  const buf = Buffer.from(
    ethers.BigNumber.from(props.value).toHexString().replace(/^0x/, ''),
    'hex',
  )
  console.log(buf)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${(FONT_WIDTH + 2) * SIZE} ${FONT_HEIGHT * SIZE}`}
      width={(FONT_WIDTH + 2) * FONT_SCALE_FACTOR * SCALE * SIZE}
      height={FONT_HEIGHT * FONT_SCALE_FACTOR * SCALE * SIZE}
    >
      {Array.from({ length: SIZE }).map((_, y) =>
        Array.from({ length: SIZE }).map((_, x) => (
          <PlotDot
            key={`${x}-${y}`}
            value={ascii[buf.readUInt8(y * SIZE + x)]}
            x={(x + 0.75) * FONT_WIDTH}
            y={y * FONT_HEIGHT}
          />
        )),
      )}
    </svg>
  )
}

function PlotDot(props: { value: bigint; x: number; y: number }) {
  const { value } = props
  const pixel = value >> 0x10n

  return (
    <>
      {MASK.map((line, y) =>
        line.map((n, x) =>
          n & pixel ? (
            <rect
              key={`${props.x + x}-${props.y + y}`}
              x={props.x + x}
              y={props.y + y}
              width={1}
              height={1}
            />
          ) : null,
        ),
      )}
      <rect x={props.x} y={props.y} width={FONT_WIDTH} height={FONT_HEIGHT} fill="none" />
    </>
  )
}
