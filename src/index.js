
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if (!matrix || matrix.length === 0) {
		return []
	}
	matrix.forEach ((element, index) => {
		index % 2 === 0 ? element : element.reverse();
	})
  return matrix.join(',').split(',')
}
