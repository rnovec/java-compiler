const mixin = {
  methods: {
    formatJson (filterVal, jsonData) {
      return jsonData.map(v =>
        filterVal.map(j => {
          if (j === 'timestamp') {
            return parseTime(v[j])
          } else {
            return v[j]
          }
        })
      )
    },
    handleDownload (props, list, header) {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const data = this.formatJson(props, list)
        excel.export_json_to_excel({
          header,
          data,
          filename: 'triplo',
          autoWidth: true,
          bookType: 'csv'
        })
        this.downloadLoading = false
      })
    }
  }
}

export default mixin
