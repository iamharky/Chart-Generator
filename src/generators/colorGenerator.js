let hex = ['8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

const colorGenerator = (len) => {
  let colors = []
  
  for(let l = 0; l < len; l++){
    let color = '#'
    let ln = 0
    
    for(let i = 0; i < 6; i++){
      ln = Math.floor(Math.random() * 8)
      color += hex[ln]
    }
    
    colors.push(color)
  }
  
  return colors
}

export default colorGenerator;