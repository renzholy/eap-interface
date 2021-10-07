import invariant from 'tiny-invariant'

export const FONT_HEIGHT = 8

export const FONT_WIDTH = 8

export const FONT_SCALE_FACTOR = 2

export const FONT_MAP_SIZE = 16

export const MASK = [
  [
    0x8000000000000000n,
    0x0080000000000000n,
    0x0000800000000000n,
    0x0000008000000000n,
    0x0000000080000000n,
    0x0000000000800000n,
    0x0000000000008000n,
    0x0000000000000080n,
  ],
  [
    0x4000000000000000n,
    0x0040000000000000n,
    0x0000400000000000n,
    0x0000004000000000n,
    0x0000000040000000n,
    0x0000000000400000n,
    0x0000000000004000n,
    0x0000000000000040n,
  ],
  [
    0x2000000000000000n,
    0x0020000000000000n,
    0x0000200000000000n,
    0x0000002000000000n,
    0x0000000020000000n,
    0x0000000000200000n,
    0x0000000000002000n,
    0x0000000000000020n,
  ],
  [
    0x1000000000000000n,
    0x0010000000000000n,
    0x0000100000000000n,
    0x0000001000000000n,
    0x0000000010000000n,
    0x0000000000100000n,
    0x0000000000001000n,
    0x0000000000000010n,
  ],
  [
    0x0800000000000000n,
    0x0008000000000000n,
    0x0000080000000000n,
    0x0000000800000000n,
    0x0000000008000000n,
    0x0000000000080000n,
    0x0000000000000800n,
    0x0000000000000008n,
  ],
  [
    0x0400000000000000n,
    0x0004000000000000n,
    0x0000040000000000n,
    0x0000000400000000n,
    0x0000000004000000n,
    0x0000000000040000n,
    0x0000000000000400n,
    0x0000000000000004n,
  ],
  [
    0x0200000000000000n,
    0x0002000000000000n,
    0x0000020000000000n,
    0x0000000200000000n,
    0x0000000002000000n,
    0x0000000000020000n,
    0x0000000000000200n,
    0x0000000000000002n,
  ],
  [
    0x0100000000000000n,
    0x0001000000000000n,
    0x0000010000000000n,
    0x0000000100000000n,
    0x0000000001000000n,
    0x0000000000010000n,
    0x0000000000000100n,
    0x0000000000000001n,
  ],
]

export const COLOR = [
  '#000000',
  '#1D2B53',
  '#7E2553',
  '#008751',
  '#AB5236',
  '#5F574F',
  '#C2C3C7',
  '#FFF1E8',
  '#FF004D',
  '#FFA300',
  '#FFEC27',
  '#00E436',
  '#29ADFF',
  '#83769C',
  '#FF77A8',
  '#FFCCAA',
]

invariant(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, 'env NEXT_PUBLIC_CONTRACT_ADDRESS not set')

export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS

export const CHAIN_ID = parseInt(process.env.NEXT_PUBLIC_CHAIN_ID || '1', 10)

invariant(process.env.NEXT_PUBLIC_BASE_URL, 'env NEXT_PUBLIC_BASE_URL not set')

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const JSON_RPC = process.env.NEXT_PUBLIC_JSON_RPC

export const FEE_RECIPIENT = process.env.FEE_RECIPIENT

export const ASCII = [
  0xffffffffffffffffn,
  0x7ed7dbfbfbdbd77en,
  0x7edbd7f7f7d7db7en,
  0x70f8fc7efcf87000n,
  0x10387cfe7c381000n,
  0x3838fafefa383800n,
  0x18387afe7a381800n,
  0x3c7effffffff7e3cn,
  0x3c66c38181c3663cn,
  0x007e7e7e7e7e7e00n,
  0x007e424242427e00n,
  0x0e1f1111bfeec0e0n,
  0x0072fa8f8ffa7200n,
  0x00040e0efc402000n,
  0x040efca0a4aefc00n,
  0x995a24c3c3245a99n,

  0x18181818ff7e3c18n,
  0x183c7eff18181818n,
  0x2444850607c00n,
  0x4022120a063e00n,
  0x60f0fefe80fe8000n,
  0x70faaaaabe1c00n,
  0x3e060a12224000n,
  0x7c605048440200n,
  0x102040fe40201000n,
  0x100804fe04081000n,
  0x1010109254381000n,
  0x1038549210101000n,
  0x1038541054381000n,
  0x2844fe44280000n,
  0x103070ffff703010n,
  0x80c0effff0e0c08n,

  0x000000000000n,
  0xfafa000000n,
  0xe0c000e0c000n,
  0x28fefe28fefe2800n,
  0x207454fe545c0800n,
  0x666c1830664600n,
  0xc5ef2baec5e1200n,
  0xe0c0000000n,
  0x387cc6820000n,
  0x82c67c380000n,
  0x10547c38387c5410n,
  0x8083e3e080800n,
  0x10706000000n,
  0x80808080000n,
  0x202000000n,
  0x60c183060c000n,

  0x7cfe92a2fe7c00n,
  0x40fefe000000n,
  0x4ede9292f66600n,
  0x44c69292fe6c00n,
  0x183868c8fefe0800n,
  0xf4f69292decc00n,
  0x7cfe9292de4c00n,
  0xc0c08e9ef0e000n,
  0x6cfe9292fe6c00n,
  0x64f69292fe7c00n,
  0x1414000000n,
  0x11716000000n,
  0x81c36220000n,
  0x14141414140000n,
  0x22361c080000n,
  0x40c08a9af06000n,

  0x7cfe82baaafa7000n,
  0x3e7ec8c87e3e00n,
  0xfefe9292fe6c00n,
  0x7cfe8282c64400n,
  0xfefe8282fe7c00n,
  0xfefe9292828200n,
  0xfefe9090808000n,
  0x7cfe8292de5c00n,
  0xfefe1010fefe00n,
  0x82fefe820000n,
  0x4060282fefc00n,
  0xfefe1038eec600n,
  0xfefe0202020200n,
  0xfefe603060fefe00n,
  0xfefe6030fefe00n,
  0x7cfe8282fe7c00n,

  0xfefe9090f06000n,
  0x7cfe8286ff7d00n,
  0xfefe9090fe6e00n,
  0x64f69292de4c00n,
  0x8080fefe808000n,
  0xfcfe0202fefc00n,
  0xf8fc0606fcf800n,
  0xfcfe061c06fefc00n,
  0xc6ee3838eec600n,
  0xe0f01e1ef0e000n,
  0x868e9ab2e2c200n,
  0xfefe82820000n,
  0xc06030180c0600n,
  0x8282fefe0000n,
  0x2060c0c0602000n,
  0x202020202020202n,

  0xc0e020000000n,
  0x42e2a2a3e1e00n,
  0xfefe22223e1c00n,
  0x1c3e2222361400n,
  0x1c3e2222fefe00n,
  0x1c3e2a2a3a1800n,
  0x107efe9090c04000n,
  0x183d25253f3e00n,
  0xfefe20203e1e00n,
  0xbcbe020000n,
  0x121bfbe000000n,
  0xfefe081c362200n,
  0xfcfe020000n,
  0x3e3e301e303e1e00n,
  0x3e3e20203e1e00n,
  0x1c3e22223e1c00n,

  0x3f3f24243c1800n,
  0x183c24243f3f00n,
  0x3e3e2020301000n,
  0x103a2a2a2e0400n,
  0x20fcfe22220000n,
  0x3c3e02023e3e00n,
  0x383c06063c3800n,
  0x3c3e020c023e3c00n,
  0x22361c1c362200n,
  0x383d05053f3e00n,
  0x22262e3a322200n,
  0x107cee820000n,
  0xe7e7000000n,
  0x82ee7c100000n,
  0x40c080c040c00n,
  0x384492aaaa443800n,

  0x240000240000n,
  0x8012004401104104n,
  0x55aa55aa55aa55aan,
  0xf000f000f000f000n,
  0x0102040810204080n,
  0x8040201008040201n,
  0xffff000000n,
  0x1818181f1f181818n,
  0x181818ffff000000n,
  0x1f1f181818n,
  0x1818181f1f000000n,
  0x70f1c1818n,
  0x18181c0f07000000n,
  0x181818ffff181818n,
  0x3070e1c3870e0c0n,
  0xc0e070381c0e0703n,

  0x050a050a050a050an,
  0x55aa55aa00000000n,
  0x0000142814280000n,
  0xff00ff00ff00ff00n,
  0x103070f1f3f7fffn,
  0xff7f3f1f0f070301n,
  0x1818181818181818n,
  0xffff181818n,
  0x181818f8f8181818n,
  0xf8f8181818n,
  0x181818f8f8000000n,
  0xe0f0381818n,
  0x181838f0e0000000n,
  0x000000aaaa000000n,
  0x663399cc663399ccn,
  0xcc993366cc993366n,

  0x0000000055aa55aan,
  0x50a050a050a050a0n,
  0xaaaaaaaaaaaaaaaan,
  0x0f000f000f000f00n,
  0x000000000f0f0f0fn,
  0x0f0f0f0f00000000n,
  0x0303030303030303n,
  0x0707070707070707n,
  0x0f0f0f0f0f0f0f0fn,
  0x1f1f1f1f1f1f1f1fn,
  0x3f3f3f3f3f3f3f3fn,
  0x1818181818n,
  0x1f1f000000n,
  0x1800180018001800n,
  0x00001070f1f1f3fn,
  0x3f1f1f0f07010000n,

  0x55aa55aa50a050a0n,
  0x50a050a055aa55aan,
  0x00000000050a050an,
  0x050a050a00000000n,
  0x00000000f0f0f0f0n,
  0xf0f0f0f000000000n,
  0x0f0f0f0ff0f0f0f0n,
  0xffff000000000000n,
  0xffffffff00000000n,
  0xffffffffffff0000n,
  0x3e525a5a527e523en,
  0xf8f8000000n,
  0x1818181818000000n,
  0x207ffdef7f2000n,
  0x000080e0f0f8f8fcn,
  0xfcf8f8f0e0800000n,

  0x55aa55aa050a050an,
  0x050a050a55aa55aan,
  0x0000000050a050a0n,
  0x50a050a000000000n,
  0xd060b1538300000n,
  0xff894a3c08080000n,
  0x102241858041000n,
  0x86192367510e00n,
  0xf8783c1a0800n,
  0x18fc3e3e1c00n,
  0x667a727a6600n,
  0x665a4e5a6600n,
  0x665e4e5e6600n,
  0x78484e487800n,
  0x5428fe285400n,
  0x821028108200n,
  0x2e3f3f3f2e00n,
  0x062f1f0f0600n,
  0x0a050a50a050n,
  0xa050a0050a05n,
  0x00300003c000n,
  0x600006003000n,
  0x0c3cff7c1c00n,
  0x1e3f3f3f1e00n,
  0x000103070300n,
  0x183c7f7c3800n,
  0x1c3e3f1e1c00n,
  0x387c3e443800n,
  0x384422443800n,
  0xff8080808080n,
  0x808080808080n,
  0x8080808080ffn,
  0x182c3c183c00n,
  0x3c183c2c1800n,
  0x262f7f572600n,
  0x26577f2f2600n,
  0x182c3c2c1800n,
  0x386c786c3800n,
  0x0107070d0300n,
  0x551155445555n,
  0x263cf83c2600n,
  0x001438140000n,
  0x046b7c6b0400n,
  0x12d4f8d41200n,
  0x106b7c6b1000n,
  0xff0000000000n,
  0xff81818181ffn,
  0x0000000000ffn,
  0x1c3e7e7e3c00n,
  0x24767e3e1c00n,
  0x1c3e7e762400n,
  0x3e6c7e6c3e00n,
  0x742878287400n,
  0xf058f058f000n,
  0x3c5a765a3c00n,
  0x3c5272523c00n,
  0x1f353c351f00n,
  0x396f786f3900n,
  0x1f204040201fn,
  0x1f3f7f7f371fn,
  0x182418101800n,
  0xff0101010101n,
  0x010101010101n,
  0x0101010101ffn,
]

export const DESCRIPTION =
  'Extended ASCII Plot (EAP) is user created ASCII Art and stored on chain. Everyone can mint via https://eap.wtf/ for free.'
