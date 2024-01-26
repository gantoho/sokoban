import { it, expect, describe } from 'vitest'
import { usePosition } from '../usePosition'
import { reactive } from 'vue'

describe('usePosition', () => {

  it('should return position', () => {

    const pos = {
      y: 1,
      x: 1,
    }

    const { position } = usePosition(pos)

    // 这里的position是计算属性，需要.value
    expect(position.value).toEqual({
      top: "60px",
      left: "60px"
    })
  })

  it('should update position', () => {

    const pos = reactive({
      y: 1,
      x: 1,
    })

    const { position } = usePosition(pos)

    pos.y = 2

    // 这里的position是计算属性，需要.value
    expect(position.value).toEqual({
      top: "120px",
      left: "60px"
    })
  })
})
