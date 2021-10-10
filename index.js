function shapeArea(n) {
    if (n >= 104 || n < 1) return false
    return (n**2+(n-1)**2)
}
console.log(shapeArea(2))