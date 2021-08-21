let table = document.querySelector("table");
let tableData = [...table.rows].map(row => [...row.children].map(item => item.innerHTML))

var csvTableData = ''

tableData.forEach(row => {
    csvTableData += row.join(',')
    csvTableData += '\n'
})

const csvFileElement = document.createElement('a')
csvFileElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvTableData)

csvFileElement.download = `${document.title}.csv`
csvFileElement.click()
