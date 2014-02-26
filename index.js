
module.exports = relative

/**
 * define `path` using relative points
 *
 * @param {Array} path
 * @return {Array}
 */

function relative(path){
  var startX = 0
  var startY = 0
  var x = 0
  var y = 0

  return path.map(function(seg){
    seg = seg.slice()
    var type = seg[0]
    var command = type.toLowerCase()

    // is absolute
    if (type != command) {
      seg[0] = command
      switch (type) {
        case 'A':
          seg[6] -= x
          seg[7] -= y
          break
        case 'V':
          seg[1] -= y
          break
        case 'H':
          seg[1] -= x
          break
        default:
          for (var i = 1; i < seg.length;) {
            seg[i++] -= x
            seg[i++] -= y
          }
      }
    }

    // update cursor state
    switch (command) {
      case 'z':
        x = startX
        y = startY
        break
      case 'h':
        x += seg[1]
        break
      case 'v':
        y += seg[1]
        break
      case 'm':
        x += seg[1]
        y += seg[2]
        startX += seg[1]
        startY += seg[2]
        break
      default:
        x += seg[seg.length - 2]
        y += seg[seg.length - 1]
    }

    return seg
  })
}
