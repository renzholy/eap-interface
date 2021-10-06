import { css, cx } from '@emotion/css'
import { CSSProperties, useMemo } from 'react'
import useSWR from 'swr'
import svgToMiniDataURI from 'mini-svg-data-uri'
import { FONT_HEIGHT, FONT_WIDTH, FONT_SCALE_FACTOR, MASK, COLOR, ASCII } from '../utils/constants'

export default function AsciiDot(props: {
  value?: number
  top?: number
  right?: number
  bottom?: number
  left?: number
}) {
  const { data } = useSWR(
    props.value === undefined ? null : `/ascii-dot/${props.value}`,
    (url) => fetch(url).then((response) => response.text()),
    { revalidateOnFocus: false },
  )
  const style = useMemo(
    () => ({
      top: props?.top === undefined ? undefined : props.top * FONT_SCALE_FACTOR * FONT_HEIGHT,
      right: props?.right === undefined ? undefined : props.right * FONT_SCALE_FACTOR * FONT_WIDTH,
      bottom:
        props?.bottom === undefined ? undefined : props.bottom * FONT_SCALE_FACTOR * FONT_HEIGHT,
      left: props?.left === undefined ? undefined : props.left * FONT_SCALE_FACTOR * FONT_WIDTH,
    }),
    [props.bottom, props.left, props.right, props.top],
  )
  const backgroundImage = useMemo(
    () => (data === undefined ? undefined : `url("${svgToMiniDataURI(data)}")`),
    [data],
  )
  const className = cx(
    css`
      display: inline-block;
      width: ${FONT_WIDTH * FONT_SCALE_FACTOR}px;
      height: ${FONT_HEIGHT * FONT_SCALE_FACTOR}px;
      background-repeat: no-repeat;
      background-position: 0 0;
    `,
    props.top !== undefined ||
      props.right !== undefined ||
      props.bottom !== undefined ||
      props.left !== undefined
      ? css`
          position: absolute;
        `
      : undefined,
  )

  return props.value === undefined ? null : backgroundImage === undefined ? (
    <AsciiDotSvg style={style} value={props.value} className={className} />
  ) : (
    <i style={{ ...style, backgroundImage }} className={className} />
  )
}

/**
 * 16 bit:
 * 0~7: ascii
 * 8~11: foreground
 * 12~15: background
 */
export function AsciiDotSvg(props: { value: number; style?: CSSProperties; className?: string }) {
  const { value } = props
  const pixel = ASCII[(value & 0xff00) >> 0x8] >> 0x10n
  const foreground = (value & 0xf0) >> 0x4
  const background = value & 0xf

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${FONT_WIDTH} ${FONT_HEIGHT}`}
      fill={COLOR[foreground]}
      width={FONT_WIDTH * FONT_SCALE_FACTOR}
      height={FONT_HEIGHT * FONT_SCALE_FACTOR}
      style={{
        ...props.style,
        backgroundColor: COLOR[background],
      }}
      className={props.className}
    >
      {MASK.map((line, y) =>
        line.map((n, x) =>
          n & pixel ? <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} /> : null,
        ),
      )}
    </svg>
  )
}
